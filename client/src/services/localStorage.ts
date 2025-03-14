import { ProductCart } from "../types/product.interface";

const STORAGE_KEY = "cartProducts";

export function saveToLocalStorage(product : ProductCart): void {
    const newProduct: ProductCart = product;
    try {
        const existingProducts: ProductCart[] = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
        const productIndex = existingProducts.findIndex(p => p.productId === newProduct.productId);

        if (productIndex !== -1) {
            existingProducts[productIndex].count += newProduct.count;
        } else {
            existingProducts.push(newProduct);
        }
        localStorage.setItem(STORAGE_KEY, JSON.stringify(existingProducts));
        console.log("LocalStorage atualizado:", existingProducts);
    } catch (error) {
        console.error("Erro ao salvar no localStorage:", error);
    }
}

export function getFromLocalStorage(): ProductCart[] {
    try {
        return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    } catch (error) {
        console.error("Erro ao recuperar do localStorage:", error);
        return [];
    }
}

export function removeItemFromLocalStorage(productId: number) {
    try {
        const existingProducts = getFromLocalStorage();
        const filteredProducts = existingProducts.filter(p => p.productId !== productId);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(filteredProducts));
    } catch (error) {
        console.error("Erro ao remover item do localStorage:", error);
    }
}

export function clearLocalStorage(){
    try {
        localStorage.clear();
    } catch (error) {
        console.error("Erro ao limpar itens do localStorage:", error);
    }
}
