import { Modal } from "@/Utils"
import { Dialog } from "@headlessui/react"
import { Link } from "react-router-dom"

export default function RegisterModal({ openModal, showModal, closeModal }) {
  return (
    <>
      <button
        className="bg-primary-base active:bg-primary-darker text-white mt-4 py-2 px-4 rounded w-full md:w-1/2 focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="submit"
        onClick={showModal}
      >
        Crear cuenta
      </button>
      {openModal ? (
        <>
          <Modal openModal={openModal} closeModal={closeModal}>
            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
              <Dialog.Title
                as="h3"
                className="text-center font-normal font-general text-headline leading-lh-6 text-gray-500"
              >
                ¡Registro Exitoso!
              </Dialog.Title>
              <div className="mt-6">
                <p className="font-semibold font-general text-subtitle xs:text-headline text-gray-500 text-center">
                  Dirígite al apartado <b>Sign In</b> e inicia con tu cuenta.
                </p>
              </div>

              <Link
                to={"/login"}
                className="mt-8 flex justify-center items-center"
              >
                <button
                  type="button"
                  className="w-full xs:w-2/3 sm:w-1/2 inline-flex justify-center rounded-md border border-transparent bg-primary-light px-4 py-2 text-headline font-general font-normal text-white hover:bg-primary-lighter focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-lighter focus-visible:ring-offset-2"
                  onClick={closeModal}
                >
                  ¡Inicia sesión ahora!
                </button>
              </Link>
            </Dialog.Panel>
          </Modal>
        </>
      ) : null}
    </>
  )
}
