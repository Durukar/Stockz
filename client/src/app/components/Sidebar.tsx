import {
  BarChart3,
  Box,
  ClipboardList,
  Home,
  Package,
  ShoppingCart,
  Truck,
  Users,
} from 'lucide-react'
import { Link, useLocation } from 'react-router'

export function Sidebar() {
  const location = useLocation()

  // Função para verificar se a rota atual corresponde ao link
  const isActive = (path: string) => {
    // Para a rota inicial, verifica se é exatamente '/' ou começa com '/dashboard'
    if (path === '/dashboard') {
      return (
        location.pathname === '/' || location.pathname.startsWith('/dashboard')
      )
    }

    // Para outras rotas, verifica se corresponde exatamente ou tem rotas aninhadas
    return (
      location.pathname === path || location.pathname.startsWith(path + '/')
    )
  }
  return (
    <aside className="w-64 shrink-0 border-r border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
      <div className="flex h-full flex-col">
        {/* Menu de navegação */}
        <nav className="flex-1 overflow-auto p-4">
          <div className="mb-6">
            <h3 className="mb-2 px-3 text-xs font-semibold tracking-wider text-gray-500 uppercase dark:text-gray-400">
              Principal
            </h3>
            <ul className="space-y-1">
              <li>
                <Link
                  to="/"
                  className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium ${
                    isActive('/dashboard')
                      ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400'
                      : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
                  }`}
                >
                  <Home className="h-4 w-4" />
                  <span>Início</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/produtos"
                  className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium ${
                    isActive('/produtos')
                      ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400'
                      : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
                  }`}
                >
                  <Package className="h-4 w-4" />
                  <span>Produtos</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/estoque"
                  className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium ${
                    isActive('/dashboard/estoque')
                      ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400'
                      : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
                  }`}
                >
                  <Box className="h-4 w-4" />
                  <span>Estoque</span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="mb-2 px-3 text-xs font-semibold tracking-wider text-gray-500 uppercase dark:text-gray-400">
              Operações
            </h3>
            <ul className="space-y-1">
              <li>
                <Link
                  to="/dashboard/pedidos"
                  className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                >
                  <ShoppingCart className="h-4 w-4" />
                  <span>Pedidos</span>
                  <span className="ml-auto flex h-5 min-w-5 items-center justify-center rounded-full bg-blue-100 px-1 text-xs font-medium text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                    8
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/fornecedores"
                  className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                >
                  <Truck className="h-4 w-4" />
                  <span>Fornecedores</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/clientes"
                  className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                >
                  <Users className="h-4 w-4" />
                  <span>Clientes</span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-2 px-3 text-xs font-semibold tracking-wider text-gray-500 uppercase dark:text-gray-400">
              Análises
            </h3>
            <ul className="space-y-1">
              <li>
                <Link
                  to="/dashboard/relatorios"
                  className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                >
                  <BarChart3 className="h-4 w-4" />
                  <span>Relatórios</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/inventario"
                  className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                >
                  <ClipboardList className="h-4 w-4" />
                  <span>Inventário</span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        {/* Rodapé da sidebar */}
        <div className="border-t border-gray-200 p-4 dark:border-gray-800">
          <div className="rounded-md bg-gray-50 p-3 dark:bg-gray-800">
            <div className="flex items-center gap-3">
              <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Stockz
              </div>
              <div className="ml-auto rounded-full bg-blue-100 px-1.5 py-0.5 text-xs font-medium text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                v1.2.0
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  )
}
