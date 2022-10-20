import { FcGoogle, FcHome } from "react-icons/fc"
import { Link } from "react-router-dom"

function TitleForm() {
  return (
    <aside className="grid gap-2 sm:gap-14">
      <Link
        to={"/home"}
        className="flex justify-end items-center gap-2 font-general font-semibold text-headline underline md:hidden"
      >
        <FcHome fontSize="1.5rem" />
        Home
      </Link>
      <div className="flex flex-col gap-2 items-center justify-center">
        <h1 className="font-bold font-general text-big_title md:text-[3.5rem]">
          ¡Bienvenido/a!
        </h1>
        <p className="font-normal font-general text-call md:text-headline mx-auto text-[#6D6D6D]">
          Por favor, ingresa tus datos
        </p>
      </div>
      <span className="flex flex-col items-center gap-4 w-full">
        {/* <button className="flex justify-center items-center gap-4 font-normal font-general text-legend1 rounded-md shadow-xl bg-white w-60 md:w-[20rem] py-1">
          <FcGoogle fontSize="1.5rem" />
          Acceder con una cuenta de google
        </button> */}
        <div className="relative flex items-center py-5 w-full">
          <span className="flex-grow border-t border-gray-400"></span>
          <p className="flex-shrink mx-4 text-black font-semibold">Or</p>
          <span className="flex-grow border-t border-gray-400"></span>
        </div>
      </span>
    </aside>
  )
}

export default TitleForm
