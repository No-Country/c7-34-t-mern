import logo from "@/assets/images/AppIcon.webp"
import error from "@/assets/images/error.webp"
import { Link } from "react-router-dom"
import { AiOutlineArrowLeft } from "react-icons/ai"

function Error() {
  return (
    <main className="min-w-screen min-h-screen bg-blue-100 flex items-center justify-center p-5 lg:p-20 overflow-hidden relative">
      <section className="flex-1 min-h-full max-w-7xl rounded-3xl bg-white shadow-xl p-6 xs:p-10 lg:p-20 text-gray-800 relative md:flex items-center text-center md:text-left">
        <div className="w-full md:w-1/2">
          <span className="mb-10 lg:mb-20 flex gap-1 xs:gap-4">
            <img src={logo} alt="logo-cb" className="w-12" />
            <div className="flex gap-1 xs:gap-2">
              <span className="font-title font-semibold text-big_title tracking-wide text-primary-light whitespace-no-wrap">
                Coin
              </span>
              <span className="font-title font-semibold text-big_title tracking-wide text-secondary-light whitespace-no-wrap">
                Book
              </span>
            </div>
          </span>
          <span className="mb-10 md:mb-20 text-gray-600 font-normal font-general text-headline xs:text-title3 md:text-title2">
            <h1 className="font-general font-bold uppercase text-[2rem] sm:text-[3rem] xl:text-[4rem] text-primary-dark mb-2 md:mb-10">
              ¡Parece que te has perdido!
            </h1>
            <p>La pagina que estás buscando no está disponible.</p>
            <p>
              Intenta buscando de nuevo o usa el botón <b>Home</b> de abajo.
            </p>
          </span>
          <Link to={"/home"} className="mb-20 md:mb-0">
            <button className="text-title3 xs:text-title2 md:text-title1 m-4 font-semibold font-general outline-none focus:outline-none transform transition-all hover:scale-110 bg-slate-50 rounded-xl flex items-center gap-4 p-3 text-primary-base">
              <AiOutlineArrowLeft className="text-primary-base h-4 w-4 xs:h-6 xs:w-6 md:h-8 md:w-8" />
              Home
            </button>
          </Link>
        </div>
        <span className="w-full md:w-1/2 flex items-center justify-center">
          <img src={error} alt="error-image" className="xl:h-96" />
        </span>
      </section>
      <div className="w-64 md:w-96 h-96 md:h-full bg-secondary-dye bg-opacity-30 absolute -top-64 md:-top-96 right-20 md:right-32 rounded-full pointer-events-none -rotate-45 transform" />
      <div className="w-96 h-full bg-primary-dye bg-opacity-20 absolute -bottom-96 right-64 rounded-full pointer-events-none -rotate-45 transform" />
    </main>
  )
}
export default Error
