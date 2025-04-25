import {
  cpSync,
  existsSync,
  mkdirSync,
  rmdirSync,
  writeFileSync,
} from 'node:fs'
import path from 'node:path'

import {
  getIntrospectedSchema,
  minifyIntrospectionQuery,
} from '@urql/introspection'
import { buildASTSchema } from 'graphql'
import { AsyncGenerator } from 'graphql-ts-client-codegen'

const typesPath = path.resolve('types')
const gqlPath = path.join(typesPath, 'graphql')
const tmpGQLPath = path.join(typesPath, '_graphql')

export const generateGraphqlSchema = async (saveFile = false) => {
  const { typeDefs } = await import('../server/src/graphql/schema')
  const ASTSchema = buildASTSchema(typeDefs)
  // const data = printSchema(ASTSchema)

  const filePath = '.schema.graphql'

  if (saveFile) {
    // writeFileSync(filePath, data)

    const minified = minifyIntrospectionQuery(getIntrospectedSchema(ASTSchema))
    writeFileSync(`${filePath}.json`, JSON.stringify(minified))
  }

  return { ASTSchema, filePath }
}

const moveToFolder = () =>
  new Promise<void>((resolve) => {
    setTimeout(() => {
      try {
        if (existsSync(gqlPath)) {
          rmdirSync(gqlPath, { recursive: true })
        }

        cpSync(tmpGQLPath, gqlPath, { recursive: true })
        rmdirSync(tmpGQLPath, { recursive: true })
      } catch (err) {
        console.error(err)
      }

      resolve()
    }, 500)
  })

const run = async () => {
  console.info('Generating GraphQL types...')

  // Create temp directory
  mkdirSync(path.join(typesPath, '_graphql'), { recursive: true })

  const generatorAsync = new AsyncGenerator({
    scalarTypeMap: {
      Date: 'string',
      Object: 'Record<string, unknown>',
      Time: 'string',
    },
    schemaLoader: async () => {
      const { ASTSchema } = await generateGraphqlSchema(true)
      return ASTSchema
    },
    targetDir: tmpGQLPath,
    tsEnum: 'string',
  })

  await generatorAsync.generate()
  await moveToFolder()

  console.info('GraphQL types generated successfully')
}

run()
