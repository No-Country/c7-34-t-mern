import { useEffect, useRef } from "react"
import { useNavigate } from "react-router-dom"

const Auth = ({ children }) => {
  const data = useRef()
  const navigate = useNavigate()

  useEffect(() => {
    data.current = localStorage.getItem("userData")
    if (data.current === null) {
      navigate("/")
    }
  }, [])
  return <div>{children}</div>
}

export default Auth
