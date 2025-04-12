import { useMutation } from '@/api/mutation'
import { useQuery } from '@/api/query'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { SidebarInset, SidebarTrigger } from '@/components/ui/sidebar'

import {
  mutation$,
  product$,
  query$,
} from '../../../../../types/graphql/fetchers'

const productFetcher = product$.id.title
// const productEdgeFetcher = productEdge$.node(productFetcher)
// const productConn = productConnection$.edges(productEdgeFetcher)
// const qry = query$.products(productFetcher)
const qry = query$.product(productFetcher)

const mut = mutation$.productCreate(productFetcher)

export const ProductPage = () => {
  const { data: newProd, mutate } = useMutation(mut)

  const { data, loading } = useQuery(qry, {
    variables: {
      id: newProd?.productCreate?.id,
    },
  })

  return (
    <SidebarInset>
      <header className="group-has[[data-collapsible=icon]]/sidebar-wrapper:h-12 flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear">
        <div className="flex items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink>Produtos</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Cadastrar</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <p>Loading: {loading ? 'true' : 'false'}</p>
        <p>{data?.product?.id}</p>
        <p>{data?.product?.title}</p>
        <Button onClick={() => mutate({ content: { title: 'teste' } })}>
          create
        </Button>
      </header>
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
          <div className="aspect-video rounded-xl bg-slate-500/50"></div>
          <div className="aspect-video rounded-xl bg-slate-500/50"></div>
          <div className="aspect-video rounded-xl bg-slate-500/50"></div>
        </div>
        <div className="min-h-[100vh] flex-1 rounded-xl bg-slate-500/40 md:min-h-min"></div>
      </div>
    </SidebarInset>
  )
}

export default ProductPage
