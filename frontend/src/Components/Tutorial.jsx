import appImg from "/assets/cbapp.svg"

function Tutorial() {
  return (
    <main className="grid md:grid-cols-2 gap-2 py-12 sm:py-20 mx-auto">
      <section className="max-w-7xl flex flex-col justify-center items-start px-24 md:px-0 gap-6 sm:gap-10 md:pl-24">
        <h1 className="font-general font-semibold text-bold_title text-left">
          ¿Como funciona?
        </h1>
        <div className="flex flex-col gap-4">
          <span className="font-general font-semibold text-title2 text-secondary-light">
            Siempre 24/7
          </span>
          <span className="font-general font-normal text-headline">
            Con Coinbook puedes llevar el registro de tus ingresos, gastos y
            presupuestos sin esfuerzo. gastos y presupuestos sin esfuerzo. todo
            respaldado en la Nube
          </span>
        </div>
        <div className="flex flex-col gap-4">
          <span className="font-general font-semibold text-title2 text-primary-dark">
            Coordina tus roomies
          </span>
          <span className="font-general font-normal text-headline">
            Crear un nuevo espacio, invita a tus amigos y empiza a organizar las
            finanzas compartidas. no volvera a gastar de mas.
          </span>
        </div>
        <div className="flex flex-col gap-4">
          <span className="font-general font-semibold text-title2 text-secondary-light">
            Empieza ahorrar con distintos planes
          </span>
          <span className="font-general font-normal text-headline">
            Conoce planesde ahorro que haran el ahorro supersencillo con las
            notificaciones nunca se te olvidara reservar ese dinero.
          </span>
        </div>
      </section>
      <section className="bg-bgBanner1 bg-no-repeat bg-contain bg-right-bottom hidden md:block lg:w-9/1">
        <div className="flex w-full justify-center items-center">
          <img
            src={appImg}
            alt="CB-Banner"
            className="hidden md:block md:h-[40vh] lg:w-9/12"
          />
        </div>
      </section>
    </main>
  )
}

export default Tutorial
