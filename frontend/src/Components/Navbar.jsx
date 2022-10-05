import React from "react"
import logo from '../../public/assets/AppIcon.png'
import Button from "./Button";



function Navbar() {
  let links = [
    { name: "Quienes Somos", link: "/" },
    { name: "Como Funciona", link: "/" },
    { name: "Beneficios", link: "/" },
    { name: "Iniciar Sesión", link: "/" },
  ]
  return( 
    <div className="shadow-sm fixed w-full top-0 left-0">
      <div className="md:flex items-center justify-between  bg-primary-darker py-2 md:px-10 px-7">
      <div className="font-bold text-title2 cursor-pointer flex items-center font-title">
        <img className="mr-1  w-20 h-20" src={logo} alt="Logo" />
      </div>
      <ul className="md:flex md:items-center cursor-pointer">
        {
          links.map((link) =>(
            <li key={link.name} className="md:ml-8 text-body">
              <a href= {link.links} className="text-white hover:text-gray-300 duration-500">{link.name}</a>
            </li>
          ))
        }
        <Button>
        Crear Cuenta
        </Button>
      </ul>
      </div>
    </div>
  );
}

export default Navbar
