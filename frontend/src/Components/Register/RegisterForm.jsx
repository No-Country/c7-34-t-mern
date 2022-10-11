import { UtilForm } from "@/Utils"
import { useState } from "react"
import logo from "@/assets/AppIcon.webp"

function RegisterForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleName = (e) => {
    setName(e.target.value)
  }
  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    //alert("User Added")
    const userData = {
      name: name,
      email: email,
      password: password,
    }

    try {
      const add = await fetch("http://localhost:4000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      }).then((res) => {
        return res.json()
      })

      console.log(add)
    } catch (err) {
      console.error()
    }
  }

  return (
    <section className="px-5 mx-auto md:mx-[5%] ">
      <aside>
        <div className="flex flex-col gap-4 text-white text-opacity-70">
          <p className="font-normal font-general text-legend1 uppercase">
            Que tus finanzas estén tranquilas
          </p>
          <h1 className="font-semibold font-title tracking-wider text-title1 sm:text-big_title">
            Crear una nueva cuenta
          </h1>
        </div>


        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="text-footer font-semibold text-[#8E9093] tracking-wide">
              Nombre
              <input
                onChange={handleName}
                className="w-full text-call text-black py-2 bg-inherit border-b border-black focus:outline-none focus:border-primary-light"
                type="text"
                required
              />
            </label>
          </div>
          <div className="mb-6">
            <label className="text-footer font-semibold text-[#8E9093] tracking-wide">
              Email
              <input
                onChange={handleEmail}
                className="w-full text-call text-black py-2 bg-inherit border-b border-black focus:outline-none focus:border-primary-light"
                type="email"
                required
              />
            </label>
          </div>
          <div className="mt-6">
            <label className="text-footer font-semibold text-[#8E9093] tracking-wide">
              Password
              <input
                onChange={handlePassword}
                className="w-full text-call text-black py-2 bg-inherit border-b border-black focus:outline-none focus:border-primary-light"
                type="password"
                required
              />
            </label>
          </div>

          <div className="mt-10">
            <button
              className="bg-primary-light text-gray-100 py-2 w-full rounded-lg tracking-widest
                                font-semibold font-title focus:outline-none focus:shadow-outline hover:bg-primary-darker
                                shadow-lg"
            >
              Crear Cuenta
            </button>
          </div>
        </form>



        {/* <form onSubmit={handleSubmit} action="">
          <div className="mt-8 md:mt-12 flex flex-col gap-3 ">
            <UtilForm onChange={handleName} name="name" type="text">
              Nombre Completo
            </UtilForm>
            <UtilForm onChange={handleEmail} name="email" type="email">
              Email
            </UtilForm>
            <UtilForm onChange={handlePassword} name="password" type="password">
              Contraseña
            </UtilForm>
            <UtilForm name="confirmpass" type="password" >
              Confirmar Contraseña
            </UtilForm>
          </div>
          <span className="w-full">
            <button
              type="submit"
              className="bg-primary-base active:bg-primary-darker text-white mt-4 py-2 px-4 rounded w-full md:w-1/2"
            >
              Crear cuenta
            </button>
          </span>
        </form> */}

      </aside>
    </section>
  )
}

export default RegisterForm
