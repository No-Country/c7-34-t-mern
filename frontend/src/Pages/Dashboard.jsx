import { Auth } from "@/Utils"
import React, { useEffect, useRef } from "react"

const Dasboard = () => {
  const data = useRef()

  useEffect(() => {
    data.current = localStorage.getItem("userData")
  }, [])
  return <Auth>qweqwuikje</Auth>
}

export default Dasboard
