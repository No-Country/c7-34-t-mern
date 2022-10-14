import { Sidebar } from "@/Components"
import { Auth } from "@/Utils"
import { useEffect, useRef } from "react"

const Dasboard = () => {
  const data = useRef()

  useEffect(() => {
    data.current = localStorage.getItem("userData")
  }, [])
  return (
    <Auth>
      <Sidebar />
    </Auth>
  )
}

export default Dasboard
