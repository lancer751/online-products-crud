export interface Product {
    id: number,
    image: string,
    alt: string,
    title: string,
    isNew: boolean,
    category: string,
    description: string,
    price: number,
    quantity?: number
}