import './global.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { RouterApp } from './app/routes/index.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterApp />
  </StrictMode>,
)
