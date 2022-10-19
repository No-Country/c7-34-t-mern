import { ImCross } from "react-icons/im"
import { ExpenseForm, IncomeForm } from ".."

function BalanceModals({
  postBalance,
  setPostBalance,
  movements,
  setMovements,
}) {
  return (
    <div className="fixed top-0 right-0 h-screen w-screen sm:w-[30rem] bg-white rounded-lg">
      <div className="relative">
        <span
          className="absolute top-4 left-4"
          onClick={() => setPostBalance(null)}
        >
          <ImCross size={30} color="black" />
        </span>
        <div className="h-full w-full p-20 flex flex-col justify-center items-center">
          {postBalance == "income" ? (
            <IncomeForm
              movements={movements}
              setMovements={setMovements}
              setPostBalance={setPostBalance}
            />
          ) : null}
          {postBalance == "expense" ? (
            <ExpenseForm
              movements={movements}
              setMovements={setMovements}
              setPostBalance={setPostBalance}
            />
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default BalanceModals
