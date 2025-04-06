import { ArrowLeft, Database } from 'lucide-react'
import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4 dark:bg-gray-900">
      <Card className="w-full max-w-md text-center">
        <CardHeader className="pb-0">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800">
            <Database className="h-10 w-10 text-gray-500 dark:text-gray-400" />
          </div>

          <CardTitle className="text-3xl font-bold text-gray-800 dark:text-gray-200">
            Página não encontrada
          </CardTitle>
          <CardDescription className="mt-2 text-gray-600 dark:text-gray-400">
            Código de erro: 404
          </CardDescription>
        </CardHeader>

        <CardContent className="pt-4">
          <p className="mb-6 text-gray-700 dark:text-gray-300">
            O recurso solicitado não está disponível. Verifique o endereço ou
            navegue de volta para o painel principal.
          </p>

          <div className="border-t border-gray-200 pt-6 dark:border-gray-700">
            <div className="flex items-center justify-center space-x-4">
              <Link to="/">
                <Button variant="outline" className="flex items-center gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Voltar ao Painel
                </Button>
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default NotFound
