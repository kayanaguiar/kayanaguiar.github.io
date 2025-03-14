import { API_URL } from "../services/dataService";

export function getImagePath(path: string): string{
    const imagePath = `${API_URL}${path}`
    return imagePath
}

export function getRandomImage(max: number): number{
    const num = Math.floor((Math.random()) * max);
    return num;
}