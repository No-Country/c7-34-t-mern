import { Suspense } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Dashboard, Home, SignIn, SignUp } from "./Pages"

function App() {
  return (
    <Suspense fallback={<h1>Cargando...</h1>}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="home" element={<Home />} />
          <Route exact path="login" element={<SignIn />} />
          <Route exact path="register" element={<SignUp />} />
          <Route exact path="dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  )
}

export default App
