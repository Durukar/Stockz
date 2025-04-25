import { Filter, Pen, Plus, Search, Trash, X } from 'lucide-react'
import { type FC, useCallback, useState } from 'react'

import { useMutation } from '@/api/mutation'
import { useQuery } from '@/api/query'
import { Status } from '@/components/status'
import { Badge } from '@/components/ui/badge'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from '@/components/ui/breadcrumb'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'
import { SidebarInset, SidebarTrigger } from '@/components/ui/sidebar'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { useTitle } from '@/hooks/useTitle'

import {
  mutation$,
  product$,
  productConnection$,
  productEdge$,
  query$,
} from '../../../../../types/graphql/fetchers'

const productFetcher = product$.id.name.type.status.quantity.price
const productUpdateFetcher = product$.id.name.price

const edgeFetcher = productEdge$.node(productFetcher)
const connFetcher = productConnection$.edges(edgeFetcher)

const qry = query$.products(connFetcher)

const mut = mutation$.productUpdate(productUpdateFetcher)

type Product = gqlType<typeof productFetcher>

export const ProductPage: FC = () => {
  useTitle('StockZ | Produtos')

  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>([])
  const [open, setOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  const { mutate: productUpdate } = useMutation(mut)

  const { data } = useQuery(qry, {
    // variables:{
    //   ///
    // }
  })

  const products = data?.products?.edges || []
  const filteredProducts = products

  // Extract unique categories and statuses for filters
  const categories = Array.from(
    new Set(products.map((product) => product.node.type)),
  )
  const statuses = Array.from(
    new Set(products.map((product) => product.node.status)),
  )

  // Apply filters when search term or selected filters change
  // useEffect(() => {
  //   const filtered = products.filter((product) => {
  //     const matchesSearch = product.node.name
  //       .toLowerCase()
  //       .includes(searchTerm.toLowerCase())
  //     const matchesCategory =
  //       selectedCategories.length === 0 ||
  //       selectedCategories.includes(product.node.type)
  //     const matchesStatus =
  //       selectedStatuses.length === 0 ||
  //       selectedStatuses.includes(product.node.status)

  //     return matchesSearch && matchesCategory && matchesStatus
  //   })

  //   setFilteredProducts(filtered)
  // }, [searchTerm, selectedCategories, selectedStatuses])

  // Toggle category selection
  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category],
    )
  }

  // Toggle status selection
  const toggleStatus = (status: string) => {
    setSelectedStatuses((prev) =>
      prev.includes(status)
        ? prev.filter((s) => s !== status)
        : [...prev, status],
    )
  }

  // Format price as currency
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price)
  }

  const handleOpenSheet = (product: Product) => {
    setSelectedProduct(product)
    setOpen(true)
  }

  const onEdit = useCallback(
    (id: string) => () => {
      console.log('Edit', id)
      productUpdate({
        id,
        content: {
          name: '1234',
          price: 100000,
        },
      })
    },
    [productUpdate],
  )

  return (
    <SidebarInset>
      <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
        <div className="flex items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink>Produtos</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </header>
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between p-4">
            <h1 className="text-3xl font-bold tracking-tight select-none">
              Produtos em Estoque
            </h1>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Cadastrar Produto
            </Button>
          </div>
          <div className="space-y-2.5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm font-semibold">Filtros:</span>
              <Input
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="h-8 w-[250px]"
                placeholder="Buscar por nome"
              />

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="h-8">
                    <Filter className="mr-2 h-4 w-4" />
                    Categoria{' '}
                    {selectedCategories.length > 0 &&
                      `(${selectedCategories.length})`}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-[200px]">
                  {categories.map((category) => (
                    <DropdownMenuCheckboxItem
                      key={category}
                      checked={selectedCategories.includes(category)}
                      onCheckedChange={() => toggleCategory(category)}
                    >
                      {category}
                    </DropdownMenuCheckboxItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="h-8">
                    <Filter className="mr-2 h-4 w-4" />
                    Status{' '}
                    {selectedStatuses.length > 0 &&
                      `(${selectedStatuses.length})`}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-[200px]">
                  {statuses.map((status) => (
                    <DropdownMenuCheckboxItem
                      key={status}
                      checked={selectedStatuses.includes(status)}
                      onCheckedChange={() => toggleStatus(status)}
                    >
                      {status}
                    </DropdownMenuCheckboxItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {(selectedCategories.length > 0 ||
                selectedStatuses.length > 0 ||
                searchTerm) && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-8"
                  onClick={() => {
                    setSearchTerm('')
                    setSelectedCategories([])
                    setSelectedStatuses([])
                  }}
                >
                  Limpar filtros
                </Button>
              )}
            </div>

            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[64px]"></TableHead>
                    <TableHead>Nome</TableHead>
                    <TableHead className="w-[120px]">Quantidade</TableHead>
                    <TableHead className="w-[140px]">Categoria</TableHead>
                    <TableHead className="w-[140px]">Preço Unitário</TableHead>
                    <TableHead className="w-[140px]">Status</TableHead>
                    <TableHead className="w-[86px]"></TableHead>
                    <TableHead className="w-[86px]"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredProducts.length > 0 ? (
                    filteredProducts.map(({ node: product }) => (
                      <>
                        <TableRow key={product.id}>
                          <TableCell>
                            <Button
                              onClick={() => handleOpenSheet(product)}
                              variant="outline"
                              size="sm"
                            >
                              <Search className="h-3 w-3" />
                              <span className="sr-only">
                                detalhes do produto
                              </span>
                            </Button>
                          </TableCell>
                          <TableCell className="font-medium">
                            {product.name}
                          </TableCell>
                          <TableCell className="text-muted-foreground">
                            {product.quantity}
                          </TableCell>
                          <TableCell className="text-muted-foreground">
                            {product.type}
                          </TableCell>
                          <TableCell className="font-medium">
                            {formatPrice(product.price)}
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <Status statusText={product.status} />
                            </div>
                          </TableCell>
                          <TableCell>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={onEdit(product.id)}
                            >
                              <Pen className="mr-2 h-3 w-3" />
                              <span>editar</span>
                            </Button>
                          </TableCell>
                          <TableCell>
                            <Button variant="ghost" size="sm">
                              <Trash className="mr-2 h-3 w-3" />
                              <span>apagar</span>
                            </Button>
                          </TableCell>
                        </TableRow>
                      </>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={8} className="h-24 text-center">
                        Nenhum produto encontrado.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </div>
      {open && (
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetContent
            side="right"
            className="w-full overflow-y-auto p-0 sm:max-w-md md:max-w-lg lg:max-w-lg"
          >
            {selectedProduct && (
              <div className="flex h-full flex-col">
                <SheetHeader className="bg-background sticky top-0 z-10 border-b px-6 py-4">
                  <div className="flex items-center justify-between">
                    <SheetTitle className="text-xl font-bold">
                      {selectedProduct.name}
                    </SheetTitle>
                    <SheetClose asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <X className="h-4 w-4" />
                      </Button>
                    </SheetClose>
                  </div>
                  <div className="mt-1 flex items-center gap-2">
                    <Badge variant="outline" className="font-normal">
                      SKU: {selectedProduct.id}
                    </Badge>
                    <Badge
                      variant={
                        selectedProduct.status === 'Em estoque'
                          ? 'default'
                          : selectedProduct.status === 'Estoque baixo'
                            ? 'destructive'
                            : 'outline'
                      }
                    >
                      {selectedProduct.status}
                    </Badge>
                  </div>
                </SheetHeader>

                <div className="flex-1 overflow-y-auto px-6 py-4">
                  <div className="mb-6 flex flex-col gap-6 md:flex-row">
                    <div className="flex-shrink-0">
                      <img
                        src="https://plus.unsplash.com/premium_photo-1679913792906-13ccc5c84d44?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt={selectedProduct.name}
                        className="h-[200px] w-full rounded-md border object-cover md:w-[200px]"
                      />
                    </div>
                    <div className="flex-1 space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-muted-foreground text-sm">Preço</p>
                          <p className="text-lg font-semibold">
                            R$ {selectedProduct.price.toFixed(2)}
                          </p>
                        </div>

                        <div>
                          <p className="text-muted-foreground text-sm">
                            Estoque Atual
                          </p>
                          <p className="text-lg font-semibold">30 unidades</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </SheetContent>
        </Sheet>
      )}
    </SidebarInset>
  )
}

export default ProductPage
