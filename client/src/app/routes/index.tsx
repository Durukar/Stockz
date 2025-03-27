import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'

const HomeLayout = lazy(() => import('../layout/main'))
const AuthLayout = lazy(() => import('../layout/auth'))

// Lazy load pages
const ProductPage = lazy(() => import('../pages/products/ProductPage'))
const AuthPage = lazy(() => import('../pages/auth'))
const NotFound = lazy(() => import('../pages/404'))

// Fallback component para mostrar durante o carregamento
const LoadingFallback = () => (
  <div className="flex h-screen items-center justify-center">
    <div className="h-32 w-32 animate-spin rounded-full border-t-2 border-b-2 border-blue-500"></div>
  </div>
)

const RouterApp = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route path="/">
            <Route element={<HomeLayout />}>
              <Route index element={<ProductPage />} />
              <Route path="/produtos" element={<ProductPage />} />
              <Route path="*" element={<NotFound />} />
            </Route>
            <Route element={<AuthLayout />}>
              <Route path="/signin" element={<AuthPage />} />
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export { RouterApp }
