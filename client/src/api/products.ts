import { Product } from "../types/product";
import { mainInstance } from "./instances";

export async function getAllProducts() : Promise<Product[]> {
    try{
        const response = await mainInstance.get<{products: Product[]}>("/products?page=1")
        if (response.status !== 200) {
            throw new Error(`Error: ${response.status} in getAllProducts`);
        }
        return response.data.products;
    }catch(error) {
        console.error("Error fetching products:", error);
        throw error;
    }
}

export async function createNewProduct(productData: Product) {
    try{
        const response = await mainInstance.post<Product>("/products", productData)
        return response.data
    }catch(error){
        console.error(error)
        throw error
    }
}

export async function updateProductById(id: number, productUpdates: Product) {
    try{
        const response = await mainInstance.put<Product>(`/products/${id}`, productUpdates)
        return response.data
    }catch(error){
        console.error(error)
        throw error
    }
}

export async function deleteProductById(id: number) {
    try{
        await mainInstance.delete<{message: string}>(`/products/${id}`)
    }catch(error){
        console.error(error)
        throw error
    }   
}

export async function deleteManyProductsById(ids: number[]) {
    try{
        await mainInstance.delete<{message: string}>("/products/deletemany", {
            data: {ids}
        })
    }catch(error){
        console.error(error)
        throw error
    }   
}