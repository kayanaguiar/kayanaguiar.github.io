export function getDiscountPrice(price: number, discount: number): number{
    let newPrice: number = price - (price * (discount/100))
    return newPrice 
}