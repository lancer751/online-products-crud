export interface Product {
    id: number,
    image: string,
    alt: string,
    title: string,
    isNew: boolean,
    categories: string[],
    description: string,
    price: number,
}