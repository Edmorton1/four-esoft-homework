export const filtredBooks = books
  .filter((e) => (filters.favorites ? favorites.includes(e.id) : true))
  .filter((e) => (filters.authors ? filters.authors.includes(e.author) : true))
  .filter((e) => (filters.min_year ? e.year > filters.min_year : true))
  .filter((e) => (filters.max_year ? e.year < filters.max_year : true));
