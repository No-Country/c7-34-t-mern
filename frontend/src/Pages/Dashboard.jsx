import { Balance, UserLayout } from "@/Components"
import { Auth } from "@/Utils"
import { useEffect, useRef } from "react"

const Dasboard = () => {
  const data = useRef()

  useEffect(() => {
    data.current = localStorage.getItem("userData")
  }, [])
  return (
    <Auth>
      <UserLayout>
        <Balance />
      </UserLayout>
    </Auth>
  )
}

export default Dasboard
