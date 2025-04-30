import { Outlet } from '@tanstack/react-router'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/panel')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className='grid grid-cols-[250px_1fr] min-h-screen'>
      <aside className='bg-base-200 text-white p-4 border-r-neutral-content border-r'>
          <h1 className='text-2xl font-bold text-primary'>Panel Admin</h1>
        <div>
           
        </div>
      </aside>
      <div className='bg-primary-content'>
        <header className='py-4 px-4 border-b-2 border-b-neutral-content'>
          <nav>
             Breadcumbs
          </nav>
        </header>
        <main className='p-4'>
          <Outlet/>
        </main>
      </div>
    </div>
  )
}
