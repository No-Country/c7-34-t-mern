import logo from "@/assets/images/AppIcon.webp"
import logout from "@/assets/images/dashboard-icons/logout-icon.svg"
import { dashLinks } from "@/helpers"
import { Link, useNavigate } from "react-router-dom"

function Sidebar() {
  const navigateTo = useNavigate()

  const handleLogout = () => {
    localStorage.clear()
    navigateTo("/login")
  }

  return (
    <section className="w-20 hover:w-72 bg-white min-h-screen overflow-hidden hover:z-10 hovet:fixed transition-[width] duration-75 ease-[cubic-bezier(0.175, 0.885, 0.32, 1.275)]">
      <div className="flex flex-col gap-4 justify-center m-6 mx-4">
        <aside className="flex gap-6">
          <img src={logo} alt="logo-cb" className="w-12" />
          <div className="flex gap-2">
            <span className="font-title font-semibold text-big_title tracking-wide text-primary-light whitespace-no-wrap">
              Coin
            </span>
            <span className="font-title font-semibold text-big_title tracking-wide text-secondary-light whitespace-no-wrap">
              Book
            </span>
          </div>
        </aside>
        <aside className="flex flex-col justify-center gap-8 mt-4">
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
        </aside>
        <hr className="mt-60" />
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
    </section>
  )
}
export default Sidebar
