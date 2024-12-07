export const TRIM_LENGTH_CHARS = 100

export function trimString(str: string, maxLength: number): string {
  return str.length > maxLength ? `${str.slice(0, maxLength)}...` : str
}
