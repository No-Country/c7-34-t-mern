import { handleValidation } from "@/helpers"
import { useState } from "react"
import { useFormContext } from "react-hook-form"
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai"

function UtilForm({ type, name, children }) {
  const [active, setActive] = useState(false)
  const [showPass, setShowPass] = useState(false)
  const handleShow = () => setShowPass(!showPass)

  const methods = useFormContext()
  const {
    register,
    formState: { errors },
  } = methods
  const handleActivation = (e) => setActive(!!e.target.value)

  return (
    <>
      <div className="relative border rounded bg-neutral-gray text-white text-opacity-70 mb-1 border-white border-opacity-25">
        <input
          className={[
            "outline-none w-full rounded-xl bg-transparent transition-all duration-200 ease-in-out p-3",
            active ? "pt-8 md:pt-10" : "",
          ].join(" ")}
          id={name}
          {...register(name, handleValidation(name))}
          type={type === "password" && showPass === false ? "password" : "text"}
          onChange={handleActivation}
          autoComplete="off"
        />
        <label
          className={[
            "absolute top-0 flex items-center text-white text-opacity-50 p-3 transition-all duration-200 ease-in-out",
            active ? "text-call" : "text-subtitle",
          ].join(" ")}
          htmlFor={name}
        >
          {children}
        </label>
        {type === "password" ? (
          <button
            className="absolute right-3 top-3 cursor-pointer"
            type="button"
            onClick={handleShow}
          >
            {showPass ? (
              <AiFillEyeInvisible fontSize="1.5rem" />
            ) : (
              <AiFillEye fontSize="1.5rem" />
            )}
          </button>
        ) : null}
      </div>
      {errors[name] ? (
        <p className="text-red-500 mb-2">{errors[name].message}</p>
      ) : null}
    </>
  )
}

export default UtilForm
