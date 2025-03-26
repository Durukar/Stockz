import 'primereact/resources/themes/lara-light-indigo/theme.css' // theme
import 'primereact/resources/primereact.min.css' // core css
import 'primeicons/primeicons.css' // icons
import 'primeflex/primeflex.css' // flex

// import { createTRPCClient, httpBatchLink } from '@trpc/client';
import { Button } from 'primereact/button'
import { InputText } from 'primereact/inputtext'

import reactLogo from './assets/react.svg'

// import type { AppRouter } from '../../server/src';
// 👆 **type-only** import

// Pass AppRouter as generic here. 👇 This lets the `trpc` object know
// what procedures are available on the server and their input/output types.
// const trpc = createTRPCClient<AppRouter>({
//   links: [
//     httpBatchLink({
//       url: 'http://localhost:8787/trpc',
//     }),
//   ],
// });

function App() {
  return (
    <div className="flex flex-col justify-center items-center h-full">
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + PrimeReact</h1>
      <div>
        <h2>PrimeReact Typescript Issue Template</h2>
        <p>
          Please create a test case and attach the link to the to your github
          issue report.
        </p>
      </div>
      <div className="card">
        <Button icon="pi pi-plus" className="mr-2" label="Increment"></Button>
        <InputText />
        <p>
          Edit <code>src/App.tsx</code> and save to test PrimeReact
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
