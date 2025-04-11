import { useState } from "react"

export default function FilterProducts() {
  const [filter, setFilters] = useState({
    title: "",
    category: ""
  })

  const handleFilter = (e : React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const {name, value} = e.target
    setFilters(prevFilter => ({
      ...prevFilter, 
      [name] : value
    })
  )}

  return (
    <div className="join join-vertical md:join-horizontal md:gap-0 gap-5 w-full justify-center max-w-md">
      <div className="w-full">
          <label htmlFor="name">
            <input name="title" onChange={handleFilter} className="input w-full" placeholder="t-shirt, pants, sneaker, etc." />
          </label>
      </div>
      <select name="category" onChange={handleFilter} className="select w-full join-item">
        <option disabled selected>Categoría</option>
        <option>Sci-fi</option>
        <option>Drama</option>
        <option>Action</option>
      </select>
      <div className="">
        <button className="btn btn-block rounded-full md:rounded-l-sm btn-md btn-primary join-item">Buscar</button>
      </div>
    </div>
  )
}
