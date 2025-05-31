import type { BookType, FilterType, ThemeType } from "@/app/context/AppTypes";
import muiTheme from "@/app/context/theme/MuiTheme";
import parseParams from "@/app/context/urlParams/params";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { createContext, useCallback, useMemo, useState, type ReactNode } from "react";
import data from "@/shared/json/data.json"

interface AppContextInterface {
  theme: ThemeType;
  books: BookType[];
  filtredBooks: BookType[];
  favorites: string[];
  searchQuery: string;
  filters: FilterType;

  toggleTheme: () => void;
  addBook: (book: BookType) => void;
  removeBook: (id: string) => void;
  toggleFavorite: (id: string) => void;
  // ВОЗМОЖНЫ ОШИБКИ ПОТОМ ПРОТЕСТИТЬ
  setSearchQuery: (query: string) => void;
  setFilters: (filters: FilterType) => void;
}

export const AppContext = createContext<AppContextInterface | null>(null);

function AppProvider({children}: {children: ReactNode}) {

  const [theme, setTheme] = useState<AppContextInterface['theme']>(localStorage.getItem('theme') === 'light' ? 'light' : 'dark')
  const [books, setBooks] = useState<AppContextInterface['books']>(data)
  const [favorites, setFavorites] = useState<AppContextInterface['favorites']>([])
  const [searchQuery, setSearchQuery] = useState<AppContextInterface['searchQuery']>('')
  const [filters, setFilters] = useState<AppContextInterface['filters']>(parseParams())

  const toggleTheme = useCallback(() => {
    localStorage.setItem('theme', theme === 'dark' ? 'light' : 'dark')
    setTheme(prev => prev === 'dark' ? 'light' : 'dark'); console.log(theme)
  }, [theme])

  const addBook = useCallback((book: BookType) => setBooks(prev => [...prev, book]), [])

  const removeBook = useCallback((id: string) => setBooks(prev => prev.filter(e => e.id !== id)), [])

  const toggleFavorite = useCallback((id: string) => setFavorites(prev => {
    if (id === 'resetAll') {
      return []
    }
    if (prev.some(e => e === id)) {
      return prev.filter(e => e !== id)
    } else {
      return [...prev, id]
    }
  }), [])

  console.log('filters', filters)

  const filtredBooks = useMemo(() => books
     //SEARCH PARAMS
    .filter(e => e.title.toLocaleLowerCase().includes(searchQuery) || e.author.toLowerCase().includes(searchQuery))
    // ОСТАЛЬНЫЕ ФИЛЬТРЫ
    .filter(e => filters.favorites ? favorites.includes(e.id) : true)
    .filter(e => filters.author.length > 0 ? filters.author?.includes(e.author) : true)
    .filter(e => filters.yearMin ? e.year >= filters.yearMin : true)
    .filter(e => filters.yearMax ? e.year <= filters.yearMax : true), [books, filters, favorites, searchQuery])
  
  return <AppContext.Provider value={{
    theme,
    books,
    filtredBooks,
    favorites,
    searchQuery,
    filters,

    toggleTheme,
    addBook,
    removeBook,
    toggleFavorite,
    setSearchQuery,
    setFilters
  }}>
    <ThemeProvider theme={muiTheme(theme)}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  </AppContext.Provider>
}
export default AppProvider;
