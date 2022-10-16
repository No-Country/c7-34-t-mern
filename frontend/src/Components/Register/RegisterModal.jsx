import { Dialog, Transition } from "@headlessui/react"
import { Fragment } from "react"
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
          <Transition appear show={openModal} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={closeModal}>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-black bg-opacity-25" />
              </Transition.Child>

              <div className="fixed inset-0 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                      <Dialog.Title
                        as="h3"
                        className="text-center font-normal font-general text-headline leading-lh-6 text-gray-500"
                      >
                        ¡Registro Exitoso!
                      </Dialog.Title>
                      <div className="mt-6">
                        <p className="font-semibold font-general text-subtitle xs:text-headline text-gray-500 text-center">
                          Dirígite al apartado <b>Sign In</b> e inicia con tu
                          cuenta.
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
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition>
        </>
      ) : null}
    </>
  )
}
