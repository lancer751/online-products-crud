export interface Product {
    id: number,
    image: string,
    name: string,
    isnew: boolean,
    category: string | null,
    description: string,
    price: number,
    quantity?: number
    createdAt?: string,
    updatedAt?: string,
}