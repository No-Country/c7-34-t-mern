import logo from "/assets/AppIcon.svg"
import picSignIn from "/assets/siginpic.svg"
import { FcGoogle } from "react-icons/fc"

function SignIn() {
  return (
    <main className="h-screen flex">
      <section className="relative w-[40vw] hidden md:block">
        <div className="absolute -z-10 bg-gradient-to-b from-[#ff7b4c4c] via-[#3795634c] to-[#0000004c] h-full w-full" />
        <img
          src={picSignIn}
          alt="bg-signin"
          className="absolute h-full w-full object-cover opacity-60"
        />

        <aside className="flex flex-col gap-[60vh] mx-8">
          <figure className="relative mt-6 h-full">
            <img className="h-20" src={logo} alt="CoinBook-logo" />
          </figure>
          <article className="flex flex-col justify-start items-center gap-6 py-4 px-8 text-center h-60 w-full rounded-md bg-opacity-60 backdrop-filter backdrop-blur-sm">
            <span className="text-white font-general font-semibold text-[2.5rem]">
              Coin Book
            </span>
            <div className="text-white font-general font-normal text-headline lg:text-title3 xl:text-title2">
              La forma mas facil de planificar tus finanzas.
            </div>
          </article>
        </aside>
      </section>

      <section className="grid gap-12 justify-center w-full md:w-[60vw] py-24 px-2 bg-slate-200">
        <aside className="flex flex-col gap-14">
          <div className="flex flex-col gap-2 items-center justify-center">
            <h1 className="font-bold font-general text-big_title md:text-[3.5rem]">
              ¡Bienvenido/a!
            </h1>
            <p className="font-normal font-general text-call md:text-headline mx-auto text-[#6D6D6D]">
              Por favor, ingresa tus datos
            </p>
          </div>
          <span className="flex flex-col items-center gap-4 w-full">
            <button className="flex justify-center items-center gap-4 font-normal font-general text-legend1 rounded-md shadow-xl bg-white w-60 md:w-[20rem] py-1">
              <FcGoogle fontSize="1.5rem" />
              Acceder con una cuenta de google
            </button>
            <div class="relative flex items-center py-5 w-full">
              <span class="flex-grow border-t border-gray-400"></span>
              <p class="flex-shrink mx-4 text-black font-semibold">Or</p>
              <span class="flex-grow border-t border-gray-400"></span>
            </div>
          </span>
        </aside>
        <aside>
          <form>
            <div className="mb-6">
              <label className="text-footer font-semibold text-[#8E9093] tracking-wide">
                Email
                <input
                  className="w-full text-call text-black py-2 bg-inherit border-b border-black focus:outline-none focus:border-primary-light"
                  type="email"
                />
              </label>
            </div>
            <div className="mt-6">
              <label className="text-footer font-semibold text-[#8E9093] tracking-wide">
                Password
                <input
                  className="w-full text-call text-black py-2 bg-inherit border-b border-black focus:outline-none focus:border-primary-light"
                  type="password"
                />
              </label>
            </div>
            <div className="flex justify-between mt-6">
              <span className="flex justify-center items-center gap-2">
                <input className="bg-inherit cursor-pointer" type="checkbox" />
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
            <a
              href=""
              className="font-general font-bold text-legend1 md:text-subtitle text-black cursor-pointer"
            >
              ¡Crea una cuenta gratis aquí!
            </a>
          </div>
        </aside>
      </section>
    </main>
  )
}

export default SignIn
