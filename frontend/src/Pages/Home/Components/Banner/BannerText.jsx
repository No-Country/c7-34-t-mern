function BannerText() {
  return (
    <section className="flex flex-col justify-center items-start sm:items-left gap-10 px-8 md:px-0 pr-12 md:pr-20 ">
      <article className="w-full font-general font-normal text-justify text-headline leading-lh-7 sm:leading-lh-8 md:text-left md:text-title3 md:leading-lh-9">
        <span className="font-general font-semibold text-bold_title sm:text-[3rem] text-primary-light">
          Coin
        </span>
        <span className="font-general font-semibold text-bold_title sm:text-[3rem] text-secondary-light px-4">
          Book
        </span>
        es el mejor aliado para controlar tus <b>finanzas</b>, con tan solo
        colocar tu ingresos <b>mensuales</b>, podemos controlar los gastos,
        dividir cuentas con tus amigos. todo lo que quieras controlar nosotros
        <b> te ayudamos</b>
      </article>
      <div>
        <a
          href=""
          className="bg-primary-light px-4 py-3 rounded-md shadow-xl text-white font-general font-semibold text-title3"
        >
          ¡Empieza ahora!
        </a>
      </div>
    </section>
  )
}

export default BannerText
