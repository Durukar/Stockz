import { BrowserRouter, Route, Routes } from 'react-router'

import { AuthLayout } from '../layout/auth'
// import { AuthLayout } from '../layout/auth'
import { HomeLayout } from '../layout/main'
import { NotFound } from '../pages/404'
import { AuthPage } from '../pages/auth'
import { ProdutosPage } from '../pages/products'

const RouterApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route element={<HomeLayout />}>
            <Route index element={<ProdutosPage />} />
            <Route path="/produtos" element={<ProdutosPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route element={<AuthLayout />}>
            <Route path="/signin" element={<AuthPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export { RouterApp }
