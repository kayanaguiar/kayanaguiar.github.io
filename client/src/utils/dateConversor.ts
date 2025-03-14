export function dateToText(date: string): string{
    const parsedDate = new Date(date);
    if (isNaN(parsedDate.getTime())) {
        throw new Error("Invalid date string");
    }
    let year = parsedDate.getFullYear();
    let month = parsedDate.toLocaleString('default', { month: 'long' });
    let day = parsedDate.getDate();
    return `${month} ${day}, ${year}`
}