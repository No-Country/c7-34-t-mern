import React from "react"
import CBanner from "/assets/Coinbook-1.svg"

function BannerCB() {
  return (
    <main className="grid md:grid-cols-2 gap-8 py-12 sm:py-20">
      <section className="bg-bgBanner bg-no-repeat bg-contain bg-center">
        <div className="flex w-full justify-center">
          <img
            src={CBanner}
            alt="CB-Banner"
            className="w-[30rem] md:w-[45rem]"
          />
        </div>
      </section>
      <section className="flex flex-col justify-center items-center sm:items-left gap-8 sm:gap-6 px-8 md:px-0 pr-12 md:pr-20 ">
        <article className="w-full font-general font-normal text-justify text-title2 md:text-title3 leading-lh-9 md:leading-lh-8">
          <span className="font-general font-semibold text-[3rem] text-primary-light">
            Coin
          </span>
          <span className="font-general font-semibold text-[3rem] text-secondary-light px-4">
            Book
          </span>
          es el mejor aliado para controlar tus <b>finanzas</b>, con tan solo
          colocar tu ingresos <b>mensuales</b>, podemos controlar los gastos,
          dividir cuentas con tus amigos. todo lo que quieras controlar nosotros
          <b> te ayudamos</b>
        </article>
        <div className="">
          <a
            href=""
            className="bg-primary-light px-6 py-4 sm:px-4 sm:py-2 rounded-md shadow-xl text-white font-general font-semibold text-title3"
          >
            ¡Empieza ahora!
          </a>
        </div>
      </section>
    </main>
  )
}

export default BannerCB
