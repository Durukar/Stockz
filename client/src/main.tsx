import './global.css'

import { PrimeReactProvider } from 'primereact/api'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { RouterApp } from './app/routes/index.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PrimeReactProvider>
      <RouterApp />
    </PrimeReactProvider>
  </StrictMode>,
)
