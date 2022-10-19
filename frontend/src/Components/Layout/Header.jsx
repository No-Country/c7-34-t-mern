import avatar from "@/assets/images/Avatar.svg"
import { useEffect, useState } from "react"
import { TbGridDots, TbBell, TbMessage, TbSearch } from "react-icons/tb"

function Header({ title }) {
  const [user, setUser] = useState("random")
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("userData"))._doc.name)
  }, [])

  return (
    <header className="bg-indigo-100 flex items-center justify-center py-8 px-[5%] gap-[5%] sm:px-[10%] sm:justify-around lg:gap-2 relative left-12 md:left-10 h-20 md:h-24">
      <div className="flex items-center gap-1">
        <h2 className="hidden sm:block font-general font-semibold text-title1 lg:text-big_title">
          {title}
        </h2>
      </div>
      <div className="flex gap-2 xs:gap-3 items-center justify-center">
        <span className="flex items-center sm:w-[25vw]">
          <input
            type="text"
            className="hidden sm:block p-2 text-gray-300 rounded-2xl focus:border-primary-light w-full"
            placeholder="Buscar Gasto..."
          />
          <TbSearch className="w-6 h-6 sm:relative sm:right-8" />
        </span>
        <span className="bg-gray-300 hover:bg-gray-100 rounded-full p-2">
          <TbBell className="text-white w-6 h-6 hover:text-black" />
        </span>
        <span className="bg-gray-300 hover:bg-gray-100 rounded-full p-2">
          <TbMessage className="text-white w-6 h-6 hover:text-black" />
        </span>
      </div>
      <div className="flex gap-2 items-center">
        <p className="font-title font-bold text-subtitle hidden md:block">
          ¡Hola, {user}!
        </p>
        <img src={avatar} alt="user-avatar" className="w-10 rounded-full" />
      </div>
    </header>
  )
}
export default Header
