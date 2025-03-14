export function productSlice<T>(arr: T[], max: number): T[]{
    return arr.slice(0,max)
  }