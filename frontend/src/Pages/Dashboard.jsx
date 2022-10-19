import { useEffect, useState } from "react"
import { Balance, BalanceGraph, BalanceModals, UserLayout } from "@/Components"
import { Auth } from "@/Utils"
import stonks from "@/assets/images/dashboard-icons/stonks.webp"
import PiggyBank from "@/assets/images/dashboard-icons/PiggyBank.webp"

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
        <div className="mx-auto my-10 max-w-7xl relative left-0 lg:left-10 flex flex-col items-center lg:grid lg:grid-cols-2 lg:gap-20">
          <aside>
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
          </aside>
          <aside className="grid gap-[4.5rem]">
            <article className="hidden lg:flex items-center justify-between bg-white rounded-lg shadow-md">
              <div className="flex flex-col w-60 py-2 px-5 gap-8">
                <span className="font-general font-bold text-title3">
                  Conoce los diferentes planes de ahorros
                </span>
                <span className="font-general font-semibold text-headline border-[2px] border-solid border-primary-darker text-primary-base w-2/3 text-center py-1 px-5 rounded-md">
                  Ver todos
                </span>
              </div>
              <div className="w-40">
                <img className="rounded-lg" src={PiggyBank} alt="PiggyBank" />
              </div>
            </article>
            <BalanceGraph movements={movements} />
            <span className="hidden lg:flex justify-end">
              <img src={stonks} alt="stonks-img" />
            </span>
          </aside>
        </div>
      </UserLayout>
    </Auth>
  )
}

export default Dasboard
