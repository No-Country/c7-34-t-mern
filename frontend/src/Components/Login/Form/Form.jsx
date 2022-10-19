import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"

function Form() {
  const methods = useForm()
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = methods
  const navigateTo = useNavigate()

  const onSubmit = handleSubmit((data) => {
    const userData = {
      email: data.email,
      password: data.password,
    }

    const URL = "https://coinbookbackend-production.up.railway.app/login"
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    }

    const responseLogin = fetch(URL, options)
      .then((response) => response.json())
      .then((user) => {
        localStorage.setItem("userData", JSON.stringify(user))
        return user
      })
      .catch((error) => {
        console.log(error)
      })

    const loginData = async () => {
      const a = await responseLogin
      const b = a["token"]
      if (b) {
        navigateTo("/dashboard")
      } else {
        navigateTo("/login")
      }
    }
    loginData()
  })

  return (
    <aside>
      <form onSubmit={onSubmit}>
        <div className="mb-6">
          <label className="text-footer font-semibold text-[#8E9093] tracking-wide">
            Email
            <input
              className="w-full text-call text-black py-2 bg-inherit border-b border-black focus:outline-none focus:border-primary-light"
              type="email"
              {...register("email")}
            />
          </label>
          {errors.email ? (
            <p className="text-red-500 mb-2">{errors.email.message}</p>
          ) : null}
        </div>
        <div className="mt-6">
          <label className="text-footer font-semibold text-[#8E9093] tracking-wide">
            Password
            <input
              className="w-full text-call text-black py-2 bg-inherit border-b border-black focus:outline-none focus:border-primary-light"
              type="password"
              {...register("password")}
            />
          </label>
          {errors.password ? (
            <p className="text-red-500 mb-2">{errors.password.message}</p>
          ) : null}
        </div>
        <div className="flex justify-between mt-6">
          <span className="flex justify-center items-center gap-2">
            <input
              className="accent-primary-base cursor-pointer"
              type="checkbox"
            />
            <p className="font-general font-semibold text-legend2">
              Recordarme al ingresar
            </p>
          </span>
          <a
            href=""
            className="font-general font-semibold text-legend2 cursor-pointer border-b-2 border-black"
          >
            ¿Olvidaste tu contraseña?
          </a>
        </div>
        <div className="mt-10">
          <button
            className="bg-primary-light text-gray-100 py-2 w-full rounded-lg tracking-widest
                                font-semibold font-title focus:outline-none focus:shadow-outline hover:bg-primary-darker
                                shadow-lg"
          >
            Entrar
          </button>
        </div>
      </form>
      <div className="flex items-center justify-between gap-2 md:gap-6 mt-12">
        <p className="text-legend1 md:text-subtitle font-semibold">
          ¿Aún no tienes una cuenta?{" "}
        </p>
        <Link
          to={"/register"}
          className="font-general font-bold text-legend1 md:text-subtitle text-black cursor-pointer"
        >
          ¡Crea una cuenta gratis aquí!
        </Link>
      </div>
    </aside>
  )
}

export default Form
