import { Product } from "../types/product";
import { mainInstance } from "./instances";

export async function getAllProducts() : Promise<Product[] > {
    try{
        const response = await mainInstance.get("/products")
        if (response.status !== 200) {
            throw new Error(`Error: ${response.status} in getAllProducts`);
        }
        return response.data.products as Product[];
    }catch(error) {
        console.error("Error fetching products:", error);
        throw error;
    }
}