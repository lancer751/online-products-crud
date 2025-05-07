import { createFileRoute } from '@tanstack/react-router'
import { ProductsTable } from '../../components/ProductsTable'

export const Route = createFileRoute('/panel/products')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className='w-full'>
      
      <ProductsTable/>
    </div>
  )
}
