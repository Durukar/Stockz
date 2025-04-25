import './global.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'urql'

import { urqlClient } from './api/index.ts'
import { RouterApp } from './app/routes/index.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider value={urqlClient}>
      <RouterApp />
    </Provider>
  </StrictMode>,
)
