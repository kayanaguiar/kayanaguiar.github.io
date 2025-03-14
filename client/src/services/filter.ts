import { ProductFilters } from "../types/filter.interface";
import { Product } from "../types/product.interface";

export function filterProducts(products: Product[], filters: ProductFilters): Product[] {
    const { category, dress, color, size, priceMin, priceMax } = filters;
    return products.filter(product =>
        (!category || category.includes(product.category)) &&
        (!dress || dress.includes(product.dress)) &&
        (!color || product.color.some(c => color.includes(c))) &&
        (!size || product.size.some(s => size.includes(s))) &&
        (priceMin === undefined || product.price >= priceMin) &&
        (priceMax === undefined || product.price <= priceMax)
    );
}