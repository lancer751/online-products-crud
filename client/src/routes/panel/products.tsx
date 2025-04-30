import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/panel/products')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/panel/products"!</div>
}
