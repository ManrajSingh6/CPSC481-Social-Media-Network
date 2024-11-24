export function filterGroupsEventsBySearchTerm<T extends { name: string }>(
  elements: T[],
  searchTerm: string
): T[] {
  return elements.filter((elements) => {
    return elements.name.toLowerCase().includes(searchTerm.toLowerCase())
  })
}
