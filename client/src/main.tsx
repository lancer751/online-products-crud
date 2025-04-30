import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createRouter, ErrorComponent, RouterProvider } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen.ts'

const router = createRouter({
  routeTree,
  defaultPendingComponent: () => (
    <div>
      <span className="loading loading-spinner text-primary"></span>
    </div>
  ),
  defaultErrorComponent: ({error}) => <ErrorComponent error={error}/>,
  defaultPreload: "intent",
  scrollRestoration: true
})

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router
  }
}

const rootElement = document.getElementById("root")!

if(!rootElement.innerHTML) {
  const root = createRoot(rootElement)
  root.render(
    <StrictMode>
      <RouterProvider router={router}/>
    </StrictMode>,
  ) 
}