import { handleValidation } from "@/helpers"
import { useState } from "react"
import { useFormContext } from "react-hook-form"

function UtilForm({ type, name, children }) {
  const [active, setActive] = useState(false)
  const methods = useFormContext()
  const {
    register,
    formState: { errors },
  } = methods
  const handleActivation = (e) => setActive(!!e.target.value)

  return (
    <div>
      <div className="relative border rounded bg-neutral-gray text-white text-opacity-70 mb-1 border-white border-opacity-25">
        <input
          className={[
            "outline-none w-full rounded-xl bg-transparent transition-all duration-200 ease-in-out p-3",
            active ? "pt-8 md:pt-10" : "",
          ].join(" ")}
          id={name}
          {...register(name, handleValidation(name))}
          type={type}
          onChange={handleActivation}
        />
        <label
          className={[
            "absolute top-0 left-0 flex items-center text-white text-opacity-50 p-3 transition-all duration-200 ease-in-out",
            active ? "text-xs" : "text-sm",
          ].join(" ")}
          htmlFor={name}
        >
          {children}
        </label>
      </div>
      {errors[name] ? (
        <p className="text-red-500 mb-2">{errors[name].message}</p>
      ) : null}
    </div>
  )
}

export default UtilForm
