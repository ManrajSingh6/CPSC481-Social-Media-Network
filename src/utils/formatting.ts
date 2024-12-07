export const TRIM_LENGTH_CHARS = 100

export function trimString(str: string, maxLength: number): string {
  return str.length > maxLength ? `${str.slice(0, maxLength)}...` : str
}

export function formatTime(date: Date) {
  let hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const ampm = hours >= 12 ? 'PM' : 'AM';

  hours = hours % 12 || 12; // Convert 0 (midnight) and 12 (noon) to 12-hour format

  return `${hours}:${minutes} ${ampm}`; // Format time without seconds
}

