import { Dress } from "../entities/types/dress-type";
import { Size } from "../entities/types/size-type";


export function compareDress(dress: any): keyof typeof Dress | undefined{
    if (Object.keys(Dress).includes(dress)) {
        return dress as keyof typeof Dress;
    }
    return undefined;
}

export function compareSize(size: any): keyof typeof Size | undefined{
    if (Object.keys(Dress).includes(size)) {
        return size as keyof typeof Size;
    }
    return undefined;
}