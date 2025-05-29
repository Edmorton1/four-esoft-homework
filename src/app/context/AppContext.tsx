import { createContext, useState, type ReactNode } from "react";

type BookType = {
  id: string,
  title: string,
  author: string,
  year: number,
}

type FilterType = {
  author?: boolean,
  year?: boolean
}

type ThemeType = 'light' | 'dark'

interface AppContextInterface {
  theme: ThemeType;
  books: BookType[];
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

const AppContext = createContext<AppContextInterface | null>(null);

function AppProvider({children}: {children: ReactNode}) {
  const [theme, setTheme] = useState<AppContextInterface['theme']>('dark')
  const [books, setBooks] = useState<AppContextInterface['books']>([
    {
      id: crypto.randomUUID(),
      title: "Евгений Онегин",
      author: "Пушкин",
      year: 1823
    },
    {
      id: crypto.randomUUID(),
      title: "Преступление и наказание",
      author: "Достоевский",
      year: 1866
    }
  ])
  const [favorites, setFavorites] = useState<AppContextInterface['favorites']>([books[0].id])
  const [searchQuery, setSearchQuery] = useState<AppContextInterface['searchQuery']>('')
  const [filters, setFilters] = useState<AppContextInterface['filters']>({})

  const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark')
  const addBook = (book: BookType) => setBooks(prev => [...prev, book])
  const removeBook = (id: string) => setBooks(prev => prev.filter(e => e.id !== id))
  const toggleFavorite = (id: string) => setFavorites(prev => {
    if (prev.some(e => e === id)) {
      return prev.filter(e => e !== id)
    } else {
      return [...prev, id]
    }
  })
  
  
  return <AppContext.Provider value={{
    theme,
    books,
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
  {children}
  </AppContext.Provider>
}
export default AppProvider;
