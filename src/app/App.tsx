import AppProvider from "@/app/context/AppContext"
import { BOOK, MAIN, SETTINGS } from "@/CONST/ROUTES"
import Book from "@/pages/book/Book"
import Main from "@/pages/main/Main"
import Settings from "@/pages/settings/Settings"
import Header from "@/shared/ui/Header/Header"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import "@/shared/css/App.scss"

function App() {

  return <AppProvider>
    <BrowserRouter>
      <Routes>
        <Route element={<Header />}>
          <Route path={MAIN} element={<Main />} />
          <Route path={`${BOOK}/:id`} element={<Book />} />
          <Route path={SETTINGS} element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </AppProvider>
}

export default App
