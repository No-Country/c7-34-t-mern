import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home, SignIn, SignUp } from "./Pages"
import Dasboard from "./Pages/Dashboard"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="home" element={<Home />} />
        <Route exact path="login" element={<SignIn />} />
        <Route exact path="register" element={<SignUp />} />
        <Route exact path="dashboard" element={<Dasboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
