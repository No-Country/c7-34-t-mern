import { useEffect, useRef, useState } from "react"
import { Balance, UserLayout } from "@/Components"
import BalanceModals from "@/Components/Dashboard/BalanceModals";
import { Auth } from "@/Utils"

const Dasboard = () => {
  const data = useRef()
  const [postBalance, setPostBalance] = useState(null);

  useEffect(() => {
    data.current = localStorage.getItem("userData")
  }, [])

  return (
    <Auth>
      <UserLayout>
        <div className="h-screen mx-auto relative left-10 flex flex-col items-center lg:grid lg:grid-cols-2 lg:items-start">
          <Balance setPostBalance={setPostBalance} />
          {postBalance !== null ? <BalanceModals postBalance={postBalance} setPostBalance={setPostBalance}/> : null }
        </div>
      </UserLayout>
    </Auth>
  )
}

export default Dasboard
