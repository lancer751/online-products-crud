import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/panel/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className='w-full text-center text-emerald-300'>
      Select one option to visualize the data here.
    </div>
  )
}
