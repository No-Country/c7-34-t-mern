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
        <div className="bg-indigo-400 max-h-screen">
          <Balance />
        </div>
      </UserLayout>
    </Auth>
  )
}

export default Dasboard
