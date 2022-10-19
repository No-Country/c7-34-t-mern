import { useEffect, useState } from "react"
import { Balance, BalanceGraph, BalanceModals, UserLayout } from "@/Components"
import { Auth } from "@/Utils"

const Dasboard = () => {
  const [postBalance, setPostBalance] = useState(null)
  const [movements, setMovements] = useState([])
  const user = JSON.parse(localStorage.getItem("userData"))._doc

  useEffect(() => {
    fetch(
      `https://coinbookbackend-production.up.railway.app/balance/balance/${user._id}`,
      {
        method: "GET",
        credentials: "same-origin",
      }
    )
      .then((res) => res.json())
      .then((res) => setMovements(res))
      .catch((err) => console.error(err))
  }, [])

  return (
    <Auth>
      <UserLayout>
        <div className="mx-auto my-10 max-w-7xl relative left-10 flex flex-col items-center lg:grid lg:grid-cols-2 lg:gap-12">
          <Balance
            setPostBalance={setPostBalance}
            user={user}
            movements={movements}
          />
          {postBalance !== null ? (
            <BalanceModals
              postBalance={postBalance}
              setPostBalance={setPostBalance}
              movements={movements}
              setMovements={setMovements}
            />
          ) : null}
          <BalanceGraph movements={movements} />
        </div>
      </UserLayout>
    </Auth>
  )
}

export default Dasboard
