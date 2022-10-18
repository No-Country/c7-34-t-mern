import expense_icon from "@/assets/icons/dashboard/expense.svg"
import { useForm } from "react-hook-form"

function ExpenseForm() {
  const methods = useForm()
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = methods
  const onSubmit = handleSubmit((data) => {
    console.log(data)
  })
  return (
    <>
      <span className="p-6 bg-slate-400/40 rounded-full">
        <img src={expense_icon} alt="expense" />
      </span>
      <form
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
          />
        </div>
        <button className="mt-8 sm:mt-12 bg-secondary-light rounded-md w-full py-2 px-4 sm:py-3 sm:px-5 text-white font-general font-semibold text-headline sm:text-title3">
          Añadir ingreso
        </button>
      </form>
    </>
  )
}
export default ExpenseForm
