import Book from "@/pages/book/Book"
import Main from "@/pages/main/Main"
import Settings from "@/pages/settings/Settings"
import Header from "@/shared/ui/Header"
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {

  return <BrowserRouter>
    <Routes>
      <Route element={<Header />}>
        <Route path="/" element={<Main />} />
        <Route path="book/:id" element={<Book />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
    </Routes>
  </BrowserRouter>
}

export default App
