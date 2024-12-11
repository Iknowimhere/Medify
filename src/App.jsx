import { Route, Routes } from "react-router"
import HomePage from "./pages/HomePage"
import SearchPage from "./pages/SearchPage"
import { BookingPage } from "./pages/BookingPage"

function App() {
    return (
        <div>
            <Routes>
                <Route path="/home" element={<HomePage />}></Route>
                <Route path="/search" element={<SearchPage />}></Route>
                <Route path="/book" element={<BookingPage />}></Route>
            </Routes>
        </div>
    )
}

export default App
