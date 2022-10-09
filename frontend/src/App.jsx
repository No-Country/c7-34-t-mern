import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home, SignIn } from "./Pages"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="home" element={<Home />} />
        <Route exact path="login" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
