import React, { useState } from "react"
import logo from "/assets/AppIcon.png"
import Button from "../Utils/Button"

function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { name: "Quienes Somos", link: "/" },
    { name: "Como Funciona", link: "/" },
    { name: "Beneficios", link: "/" },
    { name: "Iniciar Sesión", link: "/" },
  ]

  return (
    <div className="shadow-sm w-full top-0 left-0">
      <div className="md:flex items-center justify-between  bg-primary-dark py-2 md:px-10 px-7">
        <div className="font-bold text-title2 cursor-pointer flex items-center font-title">
          <img className="mr-1  w-20 h-20" src={logo} alt="Logo" />
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="text-big_title absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>
        <ul
          className={`md:flex md:items-center cursor-pointer md:mb-0 mb-12 absolute md:static bg-primary-dark md:z-auto z-[-1] left-0 w-full md:w-auto
      md:pl-0 pl-9 transition-all duration-700 ease-in ${
        open ? "top-20 opacity-100" : "top-[-490px]"
      } `}
        >
          {links.map((link) => (
            <li key={link.name} className="md:ml-8 text-body md:my-0 my-7">
              <a
                href={link.links}
                className="text-white hover:text-gray-300 duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}
          <Button>Crear Cuenta</Button>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
