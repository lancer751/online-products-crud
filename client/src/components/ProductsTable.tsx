import { useEffect, useState } from "react"
import { Product } from "../types/product"
import { getAllProducts } from "../api/products"


export function ProductsTable() {
    const [products, setProducts] = useState<Product[]>([])
    const [ isLoading, setIsLoading] = useState(false)
    console.log(products)
    useEffect(() => {
        async function fetchProducts() {
            try{
                setIsLoading(true)
                const products = await getAllProducts()
                setProducts(products)
            }catch(error) {
                console.log(error)
            }finally{
                setIsLoading(false)
            }
        }

        fetchProducts()
    }, [])

    return (
        <div className="overflow-x-auto">
            <table className="table">
                <thead>
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Category</th>
                        <th>New</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        isLoading ? (
                            Array(10).map(row => (
                                <tr key={row}>
                                    <th>
                                        <label htmlFor="productId"></label>
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-4">
                                            <div className="skeleton h-16 w-16 shrink-0 rounded-full"></div>
                                            <div className="flex flex-col gap-4">
                                                <div className="skeleton h-4 w-20"></div>
                                                <div className="skeleton h-4 w-28"></div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="skeleton h-4 w-20"></div>
                                    </td>
                                    <td>
                                        <div className="skeleton h-4 w-20"></div>
                                    </td>
                                    <td>
                                        <div className="skeleton h-4 w-20"></div>
                                    </td>
                                    <th>
                                        <div className="skeleton h-4 w-20"></div>
                                    </th>
                                </tr>
                            ))
                        ) : !isLoading && products.length > 0 && (
                            products.map(pr => (
                                <tr key={pr.id}>
                                    <th>
                                        <label htmlFor="productId">
                                            <input name="productId" type="checkbox" className="checkbox" value={pr.id} />
                                        </label>
                                    </th>
                                    <td>
                                        <div className="image">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={pr.image}
                                                    alt={pr.name} />
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <p className="font-bold">{pr.name}</p>
                                    </td>
                                    <td>
                                        {pr.category ?? "Sin Categoría"}
                                    </td>
                                    <td>{pr.isNew ? "Yes" : "No"}</td>
                                    <th>
                                        <button className="btn btn-ghost btn-xs">details</button>
                                    </th>
                                </tr>

                            ))
                        )
                    }
                </tbody>
                <tfoot>
                    <tr>
                        <th></th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Category</th>
                        <th>New</th>
                        <th></th>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}