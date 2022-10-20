import expense_icon from "@/assets/icons/dashboard/expense.svg"
import { useForm } from "react-hook-form"

function ExpenseForm({ movements, setMovements, setPostBalance }) {
  const methods = useForm()
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = methods

  const onSubmit = handleSubmit((data) => {
    const userID = JSON.parse(localStorage.getItem("userData"))._doc._id
    const userData = {
      user: userID,
      activity: data.activity,
      category: data.category,
      amount: -data.amount,
      balance_type: "expense",
    }
    fetch("https://coinbookbackend-production.up.railway.app/balance/balance", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then((res) => {
        setMovements([...movements, res])
        setPostBalance(null)
      })
      .catch((err) => console.log(err))
  })

  return (
    <>
      <span className="p-6 bg-slate-400/40 rounded-full">
        <img src={expense_icon} alt="expense" />
      </span>
      <form
        autoComplete="off"
        onSubmit={onSubmit}
        className="flex flex-col gap-6 items-center justify-center mt-16"
      >
        <div className="w-full flex flex-col justify-center items-center xs:items-start">
          <label className="py-1 font-title font-semibold text-headline">
            Actividad
          </label>
          <input
            type="text"
            className="h-10 w-full sm:w-80 px-2 font-general font-normal tracking-wide text-subtitle border border-gray-400 border-solid rounded-md placeholder:pl-52 focus:outline-primary-base"
            placeholder="Identificador"
            {...register("activity")}
          />
        </div>
        <div className="w-full flex flex-col justify-center items-center xs:items-start">
          <label className="py-1 font-title font-semibold text-headline">
            Categoría
          </label>
          <input
            type="text"
            className="h-10 w-full sm:w-80 px-2 font-general font-normal tracking-wide text-subtitle border border-gray-400 border-solid rounded-md placeholder:pl-44 focus:outline-primary-base"
            placeholder="Predeterminado"
            {...register("category")}
          />
        </div>
        <div className="w-full flex flex-col justify-center items-center xs:items-start">
          <label className="py-1 font-title font-semibold text-headline">
            Monto
          </label>
          <input
            type="number"
            className="h-10 w-full sm:w-80 px-2 font-general font-normal tracking-wide text-subtitle border border-gray-400 border-solid rounded-md placeholder:pl-44 focus:outline-primary-base"
            placeholder="Cuánto adquiriste"
            {...register("amount")}
          />
        </div>
        <button className="mt-8 sm:mt-12 bg-secondary-light rounded-md w-full py-2 px-4 sm:py-3 sm:px-5 text-white font-general font-semibold text-headline sm:text-title3">
          Añadir Gasto
        </button>
      </form>
    </>
  )
}
export default ExpenseForm
