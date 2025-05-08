import { createFileRoute, Link, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/panel')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
      <main className='max-w-screen-xl w-full mx-auto px-4 md:px-7'>
        <section className="pt-16 pb-12 mx-auto w-full max-w-md">
          <div className='space-y-6 text-center'>
            <h1 className='text-xl md:text-4xl lg:text-6xl text-primary font-bold'>Panel Admin</h1>
            <p className='text-white'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit quas quo veritatis dolore qui, obcaecati similique distinctio deleniti. Omnis, consequuntur.
            </p>
            <div className='w-full flex mx-auto max-w-md justify-center items-center gap-2'>
              <Link to={"/panel/products"} className='btn btn-secondary border-b text-center'>Products</Link>
              <Link to={"/panel/products"} className='btn bg-amber-600 hover:bg-amber-500 border-b text-center'>Categories</Link>
            </div>
          </div>
        </section>
        <section className='py-6 mx-auto w-full max-w-4xl'>
            <Outlet/>
        </section>
      </main>
  )
}
