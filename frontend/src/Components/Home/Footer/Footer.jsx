import logo_brand from "@/assets/images/AppIcon.webp"
import { IoLogoAppleAppstore, IoLogoGooglePlaystore } from "react-icons/io5"
import { AiFillAppstore } from "react-icons/ai"

const Footer = () => {
  return (
    <footer className="px-4 sm:px-20 pt-14 pb-8">
      <div className="flex flex-col md:flex-row justify-center items-center mb-8">
        <div className="flex md:justify-evenly md:w-3/6 gap-10 mb-4 md:mb-0">
          <span className="mr-0 md:mr-0 flex justify-center items-center">
            <img src={logo_brand} className="w-12" alt="Coin book logo" />
          </span>
          <ul className="font-semibold">
            <li className="mb-2 text-call">Producto</li>
            <li className="mb-2 text-footer">Sobre nosotros</li>
            <li className="mb-2 text-footer">Equipo de desarrollo</li>
            <li className="mb-2 text-footer">Privacidad</li>
          </ul>
        </div>
        <div className="flex md:justify-evenly md:w-3/6 gap-10">
          <div className="text-center md:text-start">
            <p className="font-semibold">Descargar</p>
            <ul className="flex gap-x-8">
              <li className="cursor-pointer">
                <IoLogoAppleAppstore size={35} />
              </li>
              <li className="cursor-pointer">
                <AiFillAppstore size={35} />
              </li>
              <li className="cursor-pointer">
                <IoLogoGooglePlaystore size={35} />
              </li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">Portales</p>
            <ul className="font-semibold">
              <li>Lorem ipsum dolor </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-around">
        <p className="max-w-4xl mr-12 hidden md:block">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitant
          sagittis semper ipsum in cras ornare. Ut eleifend mollis sed
          scelerisque velit. Id sed eu eget tortor lacus, blandit integer. Hac
          viverra ut enim sed bibendum tellus. Lorem
        </p>
        <button
          className="rounded-lg bg-green-600/80 hover:bg-green-600/100 text-white h-12 px-5"
          type="button"
        >
          Ayuda
        </button>
      </div>
    </footer>
  )
}

export default Footer
