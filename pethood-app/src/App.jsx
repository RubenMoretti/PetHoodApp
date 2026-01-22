import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Home from "./pages/Home"
import Access from "./pages/Access"
import Login from "./pages/Login"
import Register from "./pages/Register"

const isAuthenticated = localStorage.getItem("auth") === "true"

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public */}
        <Route path="/access" element={<Access />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected */}
        <Route
          path="/"
          element={isAuthenticated ? <Home /> : <Navigate to="/access" />}
        />

      </Routes>
    </BrowserRouter>
  )
}

export default App
