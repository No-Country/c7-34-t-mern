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
        <div className="h-screen mx-auto relative left-10 flex flex-col items-center lg:grid lg:grid-cols-2 lg:items-start">
          <Balance />
        </div>
      </UserLayout>
    </Auth>
  )
}

export default Dasboard
