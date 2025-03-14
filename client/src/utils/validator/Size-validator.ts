import { Size } from "../../types/size-type";

export function sizeValidator(key: string): Size | undefined {
    const sizeEntry = Object.entries(Size).find(([enumKey, enumValue]) => enumKey === key || enumValue === key);
    
    if (sizeEntry) {
        return sizeEntry[1] as Size;
    } else {
        console.error(`Invalid size: ${key}`);
        return undefined;
    }
}

export function getSizeKey(value: string): keyof typeof Size | undefined {
    const sizeEntry = Object.entries(Size).find(([_, val]) => val === value);
    return sizeEntry ? sizeEntry[0] as keyof typeof Size : undefined;
}

