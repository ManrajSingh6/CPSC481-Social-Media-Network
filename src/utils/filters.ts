export function filterGroupsEventsBySearchTerm<T extends { name: string }>(
  elements: T[],
  searchTerm: string
): T[] {
  return elements.filter((elements) => {
    return elements.name.toLowerCase().includes(searchTerm.toLowerCase())
  })
}

export function sortGroupsByCreatedAtDateDesc<T extends { createdAt: Date }>(
  elements: T[]
): T[] {
  return elements.sort((a, b) => {
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  })
}

export function sortEventsByDateDesc<T extends { date: Date }>(
  elements: T[]
): T[] {
  return elements.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })
}
