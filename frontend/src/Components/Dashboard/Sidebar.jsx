import logo from "@/assets/images/AppIcon.webp"
import { dashLinks } from "@/helpers/dashboard"
import { Link } from "react-router-dom"

function Sidebar() {
  return (
    <section className="flex gap-6">
      <div className="w-16 bg-white min-h-screen">
        <aside className="flex gap-4 justify-center items-center py-6">
          <img src={logo} alt="logo-cb" className="w-12" />
          <div className="flex gap-2">
            <span className="font-title font-semibold text-big_title tracking-wide text-primary-light">
              Coin
            </span>
            <span className="font-title font-semibold text-big_title tracking-wide text-secondary-light">
              Book
            </span>
          </div>
        </aside>
        <aside className="mt-4 flex flex-col gap-4 relative">
          {dashLinks.map((links) => {
            const { id, name, link, icon } = links

            return (
              <Link
                key={id}
                to={link}
                className="flex gap-3 items-center justify-center py-3 hover:text-white hover: hover:bg-gray-400 rounded-md"
              >
                <img src={icon} alt="dashboard-icon" className="w-6" />
                <h2 className="font-general font-semibold text-headline">
                  {name}
                </h2>
              </Link>
            )
          })}
        </aside>
      </div>
    </section>
  )
}
export default Sidebar
