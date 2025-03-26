import {
  ArrowUpDown,
  ChevronDown,
  Download,
  Edit,
  Eye,
  Filter,
  MoreHorizontal,
  Plus,
  Search,
  SlidersHorizontal,
  Trash2,
  Upload,
} from 'lucide-react'
import { useState } from 'react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

// Dados de exemplo para produtos
const produtos = [
  {
    id: 'PRD001',
    nome: 'Notebook Empresarial X5',
    categoria: 'Eletrônicos',
    preco: 3499.99,
    estoque: 24,
    status: 'Ativo',
    estoqueStatus: 'Normal',
    fornecedor: 'TechCorp',
    ultimaAtualizacao: '15/11/2023',
    codigo: 'NB-X5-001',
    imagem: '/placeholder.svg?height=40&width=40',
  },
]

export function ProdutosPage() {
  const [selectedItems, setSelectedItems] = useState<string[]>([])

  const toggleItem = (id: string) => {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    )
  }

  const toggleAll = () => {
    setSelectedItems((prev) =>
      prev.length === produtos.length ? [] : produtos.map((p) => p.id),
    )
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Ativo':
        return (
          <Badge className="bg-green-100 text-green-800 hover:bg-green-100 dark:bg-green-900/30 dark:text-green-400">
            {status}
          </Badge>
        )
      case 'Inativo':
        return (
          <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-100 dark:bg-gray-900/30 dark:text-gray-400">
            {status}
          </Badge>
        )
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  const getEstoqueBadge = (status: string) => {
    switch (status) {
      case 'Normal':
        return (
          <Badge
            variant="outline"
            className="border-green-500 text-green-700 dark:text-green-400"
          >
            {status}
          </Badge>
        )
      case 'Baixo':
        return (
          <Badge
            variant="outline"
            className="border-yellow-500 text-yellow-700 dark:text-yellow-400"
          >
            {status}
          </Badge>
        )
      case 'Esgotado':
        return (
          <Badge
            variant="outline"
            className="border-red-500 text-red-700 dark:text-red-400"
          >
            {status}
          </Badge>
        )
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-50">
            Produtos
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Gerencie seu catálogo de produtos e estoque
          </p>
        </div>
        <div className="flex items-center gap-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="icon" className="h-9 w-9">
                  <Upload className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Importar produtos</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="icon" className="h-9 w-9">
                  <Download className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Exportar produtos</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <Button className="gap-1">
            <Plus className="h-4 w-4" />
            <span>Novo Produto</span>
          </Button>
        </div>
      </div>

      <Tabs defaultValue="todos" className="w-full">
        <div className="flex items-center justify-between">
          <TabsList className="grid w-full max-w-md grid-cols-4">
            <TabsTrigger value="todos">Todos</TabsTrigger>
            <TabsTrigger value="ativos">Ativos</TabsTrigger>
            <TabsTrigger value="baixo-estoque">Baixo Estoque</TabsTrigger>
            <TabsTrigger value="esgotados">Esgotados</TabsTrigger>
          </TabsList>

          <div className="flex items-center gap-2">
            <Select defaultValue="recentes">
              <SelectTrigger className="h-8 w-[180px]">
                <SelectValue placeholder="Ordenar por" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="recentes">Mais recentes</SelectItem>
                <SelectItem value="antigos">Mais antigos</SelectItem>
                <SelectItem value="preco-asc">
                  Preço: menor para maior
                </SelectItem>
                <SelectItem value="preco-desc">
                  Preço: maior para menor
                </SelectItem>
                <SelectItem value="estoque-asc">
                  Estoque: menor para maior
                </SelectItem>
                <SelectItem value="estoque-desc">
                  Estoque: maior para menor
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <TabsContent value="todos" className="mt-4">
          <Card>
            {/* Barra de ferramentas */}
            <CardHeader className="p-4">
              <div className="flex flex-col space-y-3 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
                <div className="flex flex-1 items-center space-x-2">
                  <div className="relative flex-1 md:max-w-sm">
                    <Search className="absolute top-2.5 left-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
                    <Input
                      type="search"
                      placeholder="Buscar produtos..."
                      className="w-full bg-white pl-9 dark:bg-gray-950"
                    />
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="sm" className="h-9 gap-1">
                        <Filter className="h-4 w-4" />
                        <span className="hidden sm:inline-block">Filtrar</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="w-[200px]">
                      <DropdownMenuLabel>Filtrar por</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <Checkbox id="categoria" className="mr-2" />
                        <label htmlFor="categoria">Categoria</label>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Checkbox id="fornecedor" className="mr-2" />
                        <label htmlFor="fornecedor">Fornecedor</label>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Checkbox id="status" className="mr-2" />
                        <label htmlFor="status">Status</label>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <div className="px-2 py-1.5">
                        <Button variant="default" size="sm" className="w-full">
                          Aplicar Filtros
                        </Button>
                      </div>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="sm" className="h-9 gap-1">
                        <SlidersHorizontal className="h-4 w-4" />
                        <span className="hidden sm:inline-block">Colunas</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="w-[200px]">
                      <DropdownMenuLabel>Mostrar colunas</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <Checkbox id="col-id" className="mr-2" checked />
                        <label htmlFor="col-id">ID</label>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Checkbox id="col-nome" className="mr-2" checked />
                        <label htmlFor="col-nome">Nome</label>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Checkbox id="col-categoria" className="mr-2" checked />
                        <label htmlFor="col-categoria">Categoria</label>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Checkbox id="col-preco" className="mr-2" checked />
                        <label htmlFor="col-preco">Preço</label>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Checkbox id="col-estoque" className="mr-2" checked />
                        <label htmlFor="col-estoque">Estoque</label>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Checkbox id="col-status" className="mr-2" checked />
                        <label htmlFor="col-status">Status</label>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Checkbox
                          id="col-fornecedor"
                          className="mr-2"
                          checked
                        />
                        <label htmlFor="col-fornecedor">Fornecedor</label>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Checkbox id="col-data" className="mr-2" checked />
                        <label htmlFor="col-data">Última Atualização</label>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

                <div className="flex items-center space-x-2">
                  {selectedItems.length > 0 && (
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="sm" className="h-9">
                          Ações em Lote ({selectedItems.length})
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>Atualizar Status</DropdownMenuItem>
                        <DropdownMenuItem>Atualizar Preços</DropdownMenuItem>
                        <DropdownMenuItem>
                          Mover para Categoria
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-red-600 dark:text-red-400">
                          <Trash2 className="mr-2 h-4 w-4" />
                          Excluir Selecionados
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  )}
                </div>
              </div>
            </CardHeader>

            {/* Tabela de produtos */}
            <CardContent className="p-0">
              <div className="overflow-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[40px]">
                        <Checkbox
                          checked={
                            selectedItems.length === produtos.length &&
                            produtos.length > 0
                          }
                          onCheckedChange={toggleAll}
                        />
                      </TableHead>
                      <TableHead className="w-[60px]"></TableHead>
                      <TableHead className="w-[100px]">
                        <div className="flex items-center gap-1">
                          ID
                          <ArrowUpDown className="h-3 w-3" />
                        </div>
                      </TableHead>
                      <TableHead>
                        <div className="flex items-center gap-1">
                          Nome
                          <ArrowUpDown className="h-3 w-3" />
                        </div>
                      </TableHead>
                      <TableHead>Código</TableHead>
                      <TableHead>Categoria</TableHead>
                      <TableHead className="text-right">
                        <div className="flex items-center justify-end gap-1">
                          Preço
                          <ArrowUpDown className="h-3 w-3" />
                        </div>
                      </TableHead>
                      <TableHead className="text-right">
                        <div className="flex items-center justify-end gap-1">
                          Estoque
                          <ArrowUpDown className="h-3 w-3" />
                        </div>
                      </TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Estoque</TableHead>
                      <TableHead>Fornecedor</TableHead>
                      <TableHead>
                        <div className="flex items-center gap-1">
                          Atualização
                          <ArrowUpDown className="h-3 w-3" />
                        </div>
                      </TableHead>
                      <TableHead className="w-[70px]">Ações</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {produtos.map((produto) => (
                      <TableRow
                        key={produto.id}
                        className={
                          selectedItems.includes(produto.id)
                            ? 'bg-blue-50/50 dark:bg-blue-900/20'
                            : ''
                        }
                      >
                        <TableCell>
                          <Checkbox
                            checked={selectedItems.includes(produto.id)}
                            onCheckedChange={() => toggleItem(produto.id)}
                          />
                        </TableCell>
                        <TableCell>
                          <img
                            src={produto.imagem || '/placeholder.svg'}
                            alt={produto.nome}
                            className="h-10 w-10 rounded-md border border-gray-200 object-cover dark:border-gray-700"
                          />
                        </TableCell>
                        <TableCell className="font-medium">
                          {produto.id}
                        </TableCell>
                        <TableCell>
                          <div className="font-medium">{produto.nome}</div>
                        </TableCell>
                        <TableCell className="text-gray-500 dark:text-gray-400">
                          {produto.codigo}
                        </TableCell>
                        <TableCell>{produto.categoria}</TableCell>
                        <TableCell className="text-right font-medium">
                          R$ {produto.preco.toFixed(2)}
                        </TableCell>
                        <TableCell className="text-right">
                          {produto.estoque}
                        </TableCell>
                        <TableCell>{getStatusBadge(produto.status)}</TableCell>
                        <TableCell>
                          {getEstoqueBadge(produto.estoqueStatus)}
                        </TableCell>
                        <TableCell>{produto.fornecedor}</TableCell>
                        <TableCell>{produto.ultimaAtualizacao}</TableCell>
                        <TableCell>
                          <div className="flex items-center justify-end gap-1">
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <Button
                                    variant="ghost"
                                    size="icon"
                                    className="h-8 w-8"
                                  >
                                    <Eye className="h-4 w-4" />
                                  </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p>Ver detalhes</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>

                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <Button
                                    variant="ghost"
                                    size="icon"
                                    className="h-8 w-8"
                                  >
                                    <Edit className="h-4 w-4" />
                                  </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p>Editar produto</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>

                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="h-8 w-8"
                                >
                                  <MoreHorizontal className="h-4 w-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem>Duplicar</DropdownMenuItem>
                                <DropdownMenuItem>
                                  Histórico de Preços
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                  Movimentações
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem className="text-red-600 dark:text-red-400">
                                  <Trash2 className="mr-2 h-4 w-4" />
                                  Excluir
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>

            {/* Paginação */}
            <div className="flex items-center justify-between border-t border-gray-200 px-4 py-3 dark:border-gray-800">
              <div className="flex items-center gap-2">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Mostrando <span className="font-medium">1</span> a{' '}
                  <span className="font-medium">10</span> de{' '}
                  <span className="font-medium">24</span> resultados
                </p>
                <Select defaultValue="10">
                  <SelectTrigger className="h-8 w-[70px]">
                    <SelectValue placeholder="10" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="10">10</SelectItem>
                    <SelectItem value="20">20</SelectItem>
                    <SelectItem value="50">50</SelectItem>
                    <SelectItem value="100">100</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="h-8 w-8 p-0"
                  disabled
                >
                  <ChevronDown className="h-4 w-4 rotate-90" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="h-8 min-w-[2rem] border-blue-200 bg-blue-50 px-3 text-blue-600 dark:border-blue-800 dark:bg-blue-900/20 dark:text-blue-400"
                >
                  1
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="h-8 min-w-[2rem] px-3"
                >
                  2
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="h-8 min-w-[2rem] px-3"
                >
                  3
                </Button>
                <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                  <ChevronDown className="h-4 w-4 -rotate-90" />
                </Button>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="ativos" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Produtos Ativos</CardTitle>
              <CardDescription>
                Lista de todos os produtos ativos no sistema.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Exibindo produtos com status Ativo
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="baixo-estoque" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Produtos com Baixo Estoque</CardTitle>
              <CardDescription>
                Lista de produtos que precisam de reposição.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Exibindo produtos com status de estoque Baixo
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="esgotados" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Produtos Esgotados</CardTitle>
              <CardDescription>
                Lista de produtos sem estoque disponível.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Exibindo produtos com status de estoque Esgotado
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
