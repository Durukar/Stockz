import { BrowserRouter, Route, Routes } from 'react-router'

import { AuthLayout } from '../layout/auth'
import { AuthPage } from '../pages/auth'

const RouterApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route element={<AuthLayout />}>
            <Route index element={<AuthPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export { RouterApp }
