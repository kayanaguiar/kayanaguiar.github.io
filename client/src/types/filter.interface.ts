import { Category } from "./category-type";
import { Dress } from "./dress-type";
import { Size } from "./size-type";

export interface ProductFilters {
    dress?: Dress;
    category?: Category;
    color?: string[];
    size?: Size[];
    priceMin?: number;
    priceMax?: number;
}