import './global.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { RouterApp } from './app/routes/index.tsx'
import { queryClient, QueryClientProvider, trpcClient, TRPCProvider } from './api/index.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <TRPCProvider trpcClient={trpcClient} queryClient={queryClient}>
          <RouterApp />
      </TRPCProvider>
    </QueryClientProvider>
  </StrictMode>,
)
