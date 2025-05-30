import type { BookType, FilterType, ThemeType } from "@/app/context/AppTypes";
import muiTheme from "@/app/context/MuiTheme";
import { BOOKS } from "@/CONST/PLACEHOLDERS";
import useUpdateParams from "@/shared/hooks/useUpdateParams";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { createContext, useState, type ReactNode } from "react";

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
  const [books, setBooks] = useState<AppContextInterface['books']>(BOOKS)
  // const years = books.sort((a, b) => a.year - b.year).map(e => e.year)
  // const [favorites, setFavorites] = useState<AppContextInterface['favorites']>([books[0].id])
  const [favorites, setFavorites] = useState<AppContextInterface['favorites']>(['1b3e5fa4-67b6-4f6d-94cd-5e2dfdf80125', '5fcb6cf2-2e80-4ec6-8c52-4bc2074e74e6'])
  const [searchQuery, setSearchQuery] = useState<AppContextInterface['searchQuery']>('')
  const [filters, setFilters] = useState<AppContextInterface['filters']>(useUpdateParams())

  const toggleTheme = () => {
    localStorage.setItem('theme', theme === 'dark' ? 'light' : 'dark')
    setTheme(prev => prev === 'dark' ? 'light' : 'dark'); console.log(theme)
  }
  const addBook = (book: BookType) => setBooks(prev => [...prev, book])
  const removeBook = (id: string) => setBooks(prev => prev.filter(e => e.id !== id))
  const toggleFavorite = (id: string) => setFavorites(prev => {
    // console.log(prev)
    if (prev.some(e => e === id)) {
      return prev.filter(e => e !== id)
    } else {
      return [...prev, id]
    }
  })

  console.log('filters', filters)

  const filtredBooks = books
    .filter(e => filters.favorites ? favorites.includes(e.id) : true)
    .filter(e => filters.author.length > 0 ? filters.author?.includes(e.author) : true)
    .filter(e => filters.yearMin ? e.year > filters.yearMin : true)
    .filter(e => filters.yearMax ? e.year < filters.yearMax : true)

    // const changeFilters = <T extends keyof FilterType>(type: T, filter: FilterType[T]) => {
    //   // if (Object.keys(filters).includes(type)) {

    //   // }
    //   if (type === 'favorites') {
    //     setFilters(prev => [...prev, ])
    //   }
    // }
    useUpdateParams()
  
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
