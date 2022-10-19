import { lazy, Suspense, useEffect, useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Loader } from "./Components"

const Dashboard = lazy(() => import("@/Pages/Dashboard"))
const Home = lazy(() => import("@/Pages/Home"))
const SignIn = lazy(() => import("@/Pages/SignIn"))
const SignUp = lazy(() => import("@/Pages/SignUp"))

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
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
    </>
  )
}

export default App
