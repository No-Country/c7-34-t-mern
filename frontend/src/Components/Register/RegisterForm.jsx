import { RegisterProvider } from "@/services"
import { UtilForm } from "@/Utils"

function RegisterForm() {
  return (
    <section className="px-5 mx-auto md:mx-[5%] ">
      <aside>
        <div className="flex flex-col gap-4 text-white text-opacity-70">
          <p className="font-normal font-general text-legend1 uppercase">
            Que tus finanzas estén tranquilas
          </p>
          <h1 className="font-semibold font-title tracking-wider text-title1 sm:text-big_title">
            Crear una nueva cuenta
          </h1>
        </div>
        <RegisterProvider>
          <div className="mt-8 md:mt-12 flex flex-col gap-3 ">
            <UtilForm name="name" type="text">
              Nombre Completo
            </UtilForm>
            <UtilForm name="email" type="email">
              Email
            </UtilForm>
            <UtilForm name="password" type="password">
              Contraseña
            </UtilForm>
            <UtilForm name="confirmpass" type="password">
              Confirmar Contraseña
            </UtilForm>
          </div>
          <span className="w-full">
            <button
              type="submit"
              className="bg-primary-base active:bg-primary-darker text-white mt-4 py-2 px-4 rounded w-full md:w-1/2"
            >
              Crear cuenta
            </button>
          </span>
        </RegisterProvider>
      </aside>
    </section>
  )
}

export default RegisterForm
