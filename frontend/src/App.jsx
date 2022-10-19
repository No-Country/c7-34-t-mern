import { lazy, Suspense } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { LazyLoader } from "./Components"

const Dashboard = lazy(() => import("@/Pages/Dashboard"))
const Home = lazy(() => import("@/Pages/Home"))
const SignIn = lazy(() => import("@/Pages/SignIn"))
const SignUp = lazy(() => import("@/Pages/SignUp"))
const Error = lazy(() => import("@/Pages/Error"))

function App() {
  return (
    <>
      <Suspense fallback={<LazyLoader />}>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="home" element={<Home />} />
            <Route exact path="login" element={<SignIn />} />
            <Route exact path="register" element={<SignUp />} />
            <Route exact path="dashboard" element={<Dashboard />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </>
  )
}

export default App
