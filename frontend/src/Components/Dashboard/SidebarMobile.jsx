import { Link, useNavigate } from "react-router-dom"
import { dashLinks } from "@/helpers"
import logo from "@/assets/images/AppIcon.webp"
import logout from "@/assets/images/dashboard-icons/logout-icon.svg"
import { ImCross } from "react-icons/im"

function SidebarMobile({ setOpen }) {
  const navigateTo = useNavigate()

  const handleLogout = () => {
    localStorage.clear()
    navigateTo("/login")
  }

  return (
    <aside className="w-screen xs:w-72 bg-white min-h-screen overflow-visible fixed z-10 left-0 top-0 transition-[width] duration-75 ease-linear-[cubic-bezier(0.175, 0.885, 0.32, 1.275)]">
      <span className="absolute top-4 right-4" onClick={() => setOpen(false)}>
        <ImCross className="text-primary-base w-4 h-4" />
      </span>
      <div className="flex flex-col gap-4 justify-center m-8 mx-4">
        <span className="flex gap-6">
          <img src={logo} alt="logo-cb" className="w-12" />
          <div className="flex gap-2">
            <span className="font-title font-semibold text-big_title tracking-wide text-primary-light whitespace-no-wrap">
              Coin
            </span>
            <span className="font-title font-semibold text-big_title tracking-wide text-secondary-light whitespace-no-wrap">
              Book
            </span>
          </div>
        </span>
        <div className="absolute top-20 flex flex-col justify-center gap-2 xs:gap-8 mt-4">
          {dashLinks.map((links) => {
            const { id, name, link, icon } = links

            return (
              <Link
                key={id}
                to={link}
                className="flex items-center gap-8 px-3 hover:text-white hover:bg-gray-400 rounded-md h-12"
              >
                <img src={icon} alt="sidebar-icon" className="w-6" />
                <h2 className="font-general font-normal text-headline hover:font-semibold tracking-wide whitespace-no-wrap">
                  {name}
                </h2>
              </Link>
            )
          })}
          <hr className="mt-4 xs:mt-12 pr-8 w-full xs:w-60" />
          <button
            onClick={handleLogout}
            className="flex items-center gap-8 px-3 h-12"
          >
            <img src={logout} alt="logout" className="w-6" />
            <h2 className="font-general font-semibold text-headline tracking-wide whitespace-no-wrap">
              Cerrar sesión
            </h2>
          </button>
        </div>
      </div>
    </aside>
  )
}
export default SidebarMobile
