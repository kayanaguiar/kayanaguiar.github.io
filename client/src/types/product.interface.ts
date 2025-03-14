import { Dress } from './dress-type';
import { Category } from "./category-type";
import { Size } from "./size-type";

export interface Product{
    id: number,
    title: string
    price: number,
    image: string[],
    rating: number,
    description: string,
    color: string[],
    size: Size[],
    category: Category,
    dress: Dress,
    discount?: number
}

export interface ProductCart{
    productId: number,
    count: number,
    color: string,
    size: keyof Size,
    price: number,
    discount: number
}