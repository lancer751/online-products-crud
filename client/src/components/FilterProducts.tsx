import { useState } from "react"
import { useFilters } from "../hooks/useFilters"

export default function FilterProducts() {
  const { filters, setFilters } = useFilters()
  console.log(filters)
  const handleFilter = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFilters(prevFilter => ({
      ...prevFilter,
      [name]: value
    })
    )
  }

  return (
    <div>
      <div className="join join-vertical space-y-9 md:join-horizontal md:gap-0 gap-5 w-full justify-center max-w-md">
        <div className="w-full">
          <label htmlFor="name">
            <input name="title" onChange={handleFilter} className="input w-full" placeholder="t-shirt, pants, sneaker, etc." />
          </label>
        </div>
        <select name="category" onChange={handleFilter} className="select w-full join-item">
          <option value={"all"}>Todos</option>
          <option>calzado</option>
          <option>tecnología</option>
          <option>accesorios</option>
        </select>
      </div>
      <div className="w-full max-w-xs mx-auto">
        <span className="inline-block text-2xl font-bold">Precio Mínimo: ${filters.minPrice}</span>
        <input onChange={handleFilter} name="minPrice" type="range" min={0} max="100" value={filters.minPrice} step={10} className="range" />
        <div className="flex justify-between px-2.5 mt-2 text-xs">
          <span>|</span>
          <span>|</span>
          <span>|</span>
        </div>
        <div className="flex justify-between px-2.5 mt-2 text-xs">
          <span>$0</span>
          <span>$50</span>
          <span>$100</span>
        </div>
      </div>
    </div>
  )
}
