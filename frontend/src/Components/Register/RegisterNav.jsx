import { Link } from "react-router-dom"

function RegisterNav() {
  return (
    <header className="flex items-center justify-around p-4 md:p-6 w-full sm:w-1/2">
      <div className="flex gap-2 font-general font-semibold text-title2 md:text-title1 tracking-wide">
        <span className="text-primary-base">Coin</span>
        <span className="text-secondary-light">Book</span>
      </div>
      <nav className="flex gap-4 md:gap-12 text-white text-call md:text-body text-opacity-70 font-normal">
        <Link to={"/home"} className="hover:underline hover:text-gray-200">
          Home
        </Link>
        <Link to={"/login"} className="hover:underline hover:text-gray-200">
          Sign In
        </Link>
      </nav>
    </header>
  )
}

export default RegisterNav
