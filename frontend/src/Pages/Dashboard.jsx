import { useEffect, useState } from "react"
import { Balance, UserLayout } from "@/Components"
import BalanceModals from "@/Components/Dashboard/BalanceModals";
import { Auth } from "@/Utils"

const Dasboard = () => {
  const [postBalance, setPostBalance] = useState(null);
  const [movements, setMovements] = useState([]);
  const user = JSON.parse(localStorage.getItem("userData"))._doc;

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
        <div className="h-screen mx-auto relative left-10 flex flex-col items-center lg:grid lg:grid-cols-2 lg:items-start">
          <Balance setPostBalance={setPostBalance} user={user} movements={movements} />
          {postBalance !== null 
            ? <BalanceModals 
                postBalance={postBalance} 
                setPostBalance={setPostBalance}
                movements={movements}
                setMovements={setMovements}
              /> 
            : null }
        </div>
      </UserLayout>
    </Auth>
  )
}

export default Dasboard
