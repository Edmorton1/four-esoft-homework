import AppProvider from "@/app/context/AppContext"
import { BOOK, MAIN, SETTINGS } from "@/CONST/ROUTES"
import Book from "@/pages/book/Book"
import Main from "@/pages/main/Main"
import Settings from "@/pages/settings/Settings"
import Header from "@/shared/ui/Header/Header"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import "@/shared/css/App.scss"
import { ErrorBoundary } from "react-error-boundary"
import Fallback from "@/app/fallback/Fallback"

function App() {

  return <AppProvider>
    <ErrorBoundary FallbackComponent={Fallback}>
      <BrowserRouter>
        <Routes>
          <Route element={<Header />}>
            <Route path={MAIN} element={<Main />} />
            <Route path={`${BOOK}/:id`} element={<Book />} />
            <Route path={SETTINGS} element={<Settings />} />
            <Route path={"*"} element={<main>Такой страницы нет</main>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  </AppProvider>
}

export default App
