import { useEffect, useState } from "react";
import { Product } from "../types/product";
import { deleteManyProductsById, getAllProducts } from "../api/products";
import { IoMdClose } from "react-icons/io";
import { FaTrashAlt } from "react-icons/fa";

export function ProductsTable() {
    const [products, setProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);
    //   const [error, setError] = useState<string | null>(null);
    const [ids, setIds] = useState<number[]>([]);
    console.log(ids);

    useEffect(() => {
        async function fetchProducts() {
            try {
                setIsLoading(true);
                const products = await getAllProducts();
                setProducts(products);
            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        }

        fetchProducts();
    }, [isDeleting]);

    const handleToogleId = (id: number) => {
        if (ids.includes(id)) {
            setIds(ids.filter((i) => i !== id));
            return
        }
        setIds((prev) => [...prev, id]);
    }

    const handleDelete = async () => {
        try {
            setIsDeleting(true)
            await deleteManyProductsById(ids)
            setProducts(prev => prev.filter(p => !ids.includes(p.id)))
            setIds([])
        }catch(error) {
            console.error(error)
        } finally {
            setIsDeleting(false)
        }
    }

    return (
        <>
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
                        {isLoading
                            ? Array(10)
                                .fill(10)
                                .map((_row, index) => (
                                    <tr key={index}>
                                        <th>
                                            <label htmlFor="productId"></label>
                                        </th>
                                        <td>
                                            <div className="flex items-center gap-4">
                                                <div className="skeleton h-12 w-12 shrink-0 rounded-full"></div>
                                                <div className="flex flex-col gap-4">
                                                    <div className="skeleton h-2 w-20"></div>
                                                    <div className="skeleton h-2 w-28"></div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="skeleton h-2 w-20"></div>
                                        </td>
                                        <td>
                                            <div className="skeleton h-2 w-20"></div>
                                        </td>
                                        <td>
                                            <div className="skeleton h-2 w-20"></div>
                                        </td>
                                        <th>
                                            <div className="skeleton h-2 w-20"></div>
                                        </th>
                                    </tr>
                                ))
                            : !isLoading &&
                            products.length > 0 &&
                            products.map((pr) => (
                                <tr key={pr.id}>
                                    <th>
                                        <label htmlFor="productId">
                                            <input
                                                name="productId"
                                                type="checkbox"
                                                className="checkbox"
                                                checked={ids.includes(pr.id)}
                                                onChange={() => handleToogleId(pr.id)}
                                                value={pr.id}
                                            />
                                        </label>
                                    </th>
                                    <td>
                                        <div className="image">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img src={pr.image} alt={pr.name} />
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <p className="font-bold">{pr.name}</p>
                                    </td>
                                    <td>{pr.category ?? "Sin Categoría"}</td>
                                    <td>{pr.isNew ? "Yes" : "No"}</td>
                                    <th>
                                        <button className="btn btn-primary btn-xs">details</button>
                                    </th>
                                </tr>
                            ))}
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
            <div className="fixed bottom-5 inset-x-0 flex w-full mx-auto max-w-md items-center justify-center px-4">
                <div className="bg-gray-800/40 w-full flex justify-between items-center rounded-xl py-2 px-3 backdrop-blur-sm shadow-lg">
                    <div className="bg-neutral rounded-md flex items-center justify-center gap-2 w-max h-full px-2 text-primary">
                        <IoMdClose size={15} />
                        {ids.length} seleccionados
                    </div>
                    <div>
                        <button onClick={handleDelete} disabled={isDeleting} className="btn btn-circle btn-sm bg-error">
                            <FaTrashAlt className="text-error-content" size={14} />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
