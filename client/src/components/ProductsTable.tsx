import { useEffect, useState } from "react";
import { Product } from "../types/product";
import { deleteManyProductsById, getAllProducts, updateManyProducts } from "../api/products";
import { IoMdClose } from "react-icons/io";
import { FaTrashAlt } from "react-icons/fa";
import { Category, getAllCategories } from "../api/categories";
import { DropdownSelectUpdates } from "./common/Dropdown";

export function ProductsTable() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  //   const [error, setError] = useState<string | null>(null);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [productsUpdates, setproductsUpdates] = useState<{
    categoryId?: number | null;
    isnew?: boolean;
  }>({});

  console.log("pr_updates", productsUpdates);

  useEffect(() => {
    async function fetchProducts() {
      try {
        setIsLoading(true);
        const [products, categories] = await Promise.all([
          getAllProducts(),
          getAllCategories(),
        ]);
        setCategories(categories);
        setProducts(products);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchProducts();
  }, [isDeleting, isUpdating]);

  const handleToogleId = (id: number) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter((i) => i !== id));
      return;
    }
    setSelectedIds((prev) => [...prev, id]);
  };

  const handleDeselect = () => setSelectedIds([]);
  const handleToogleSelectAll = () => {
    if (selectedIds.length > 0) {
      setSelectedIds([]);
      return;
    }
    const allProductsIds = products.map((pr) => pr.id);
    setSelectedIds(allProductsIds);
  };

  const handleDelete = async () => {
    try {
      setIsDeleting(true);
      await deleteManyProductsById(selectedIds);
      setProducts((prev) => prev.filter((p) => !selectedIds.includes(p.id)));
      setSelectedIds([]);
    } catch (error) {
      console.error(error);
    } finally {
      setIsDeleting(false);
    }
  };

  useEffect(() => {
    const handleManyUpdates = async () => {
      try {
        setIsUpdating(true);
        const response = await updateManyProducts({
          ids: selectedIds,
          ...productsUpdates,
        })
        console.log(response)
      } catch (error) {
        console.error(error);
      }
    }
    
    if (selectedIds.length > 0 && Object.keys(productsUpdates).length > 0) {
      handleManyUpdates();
    }

  }, [productsUpdates, selectedIds]);

  return (
    <>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>
                <label>
                  <input
                    checked={selectedIds.length === products.length}
                    onChange={handleToogleSelectAll}
                    type="checkbox"
                    className="checkbox"
                  />
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
                          checked={selectedIds.includes(pr.id)}
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
                    <td>{pr.isnew ? "Yes" : "No"}</td>
                    <th>
                      <button className="btn btn-primary btn-xs">
                        details
                      </button>
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
      {products.length === 0 && !isLoading && (
        <div className="flex flex-col items-center justify-center h-96">
          <h2 className="text-2xl font-bold">No hay productos</h2>
          <p className="text-gray-500">Agrega un producto para comenzar</p>
        </div>
      )}
      {selectedIds.length > 0 && (
        <div className="fixed bottom-2 inset-x-0 flex w-full mx-auto max-w-md items-center justify-center px-4">
          <div className="bg-gray-800/40 w-full flex justify-between items-center rounded-xl py-2 px-3 backdrop-blur-sm shadow-lg">
            <button
              onClick={handleDeselect}
              className="cursor-pointer bg-neutral rounded-md flex items-center justify-center gap-2 w-max h-full px-2 py-1 text-sm text-primary"
            >
              <IoMdClose size={14} />
              {selectedIds.length} seleccionados
            </button>
            <div className="flex gap-2">
              <DropdownSelectUpdates
                label="Category"
                options={[...categories, { id: null, name: "Ninguno" }]}
                selected={productsUpdates.categoryId}
                onSelect={(id: number | null) => {
                  setproductsUpdates((prev) => ({ ...prev, categoryId: id }));
                }}
              />

              <DropdownSelectUpdates
                label="New"
                options={[
                  { id: 1, name: "Yes" },
                  { id: 0, name: "No" },
                ]}
                selected={
                  productsUpdates.isnew
                    ? 1
                    : typeof productsUpdates.isnew === "boolean"
                    ? 0
                    : undefined
                }
                onSelect={(id: number | null) =>
                  setproductsUpdates((prev) => ({ ...prev, isnew: id === 1 }))
                }
              />

              <div className="flex items-center gap-2">
                <button
                  onClick={handleDelete}
                  disabled={isDeleting}
                  className="btn btn-circle btn-sm bg-error"
                >
                  <FaTrashAlt className="text-error-content" size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
