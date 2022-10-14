import constult_state from "@/assets/images/consult-state.png"

const Consult = () => {
  return (
    <section className="bg-gray-50 flex flex-col items-center py-6 px-[15%] md:pb-0 md:px-0 overflow-x-hidden">
      <h2 className="font-semibold text-title1 mb-8 md:mb-20">
        Consultar tu Estado
      </h2>
      <ul className="flex flex-col items-center gap-8 md:flex-row md:items-center md:justify-between px-10 md:w-full">
        <li className="flex flex-col items-center md:items-start md:flex-row w-72 md:mr-4">
          <span className="text-orange-500 font-semibold text-title1 md:mr-8 my-4 md:my-0">
            1
          </span>
          <p className="font-semibold text-body font-general">
            <span className="font-bold">Abre tu cuenta</span>. Lo que no se
            mide, no se mejora,{"  "}
            <span className="font-bold">
              &#161;Toma el control de tu vida&#33;
            </span>
          </p>
        </li>
        <li className="flex flex-col items-center md:items-start md:flex-row w-72 md:mr-4">
          <span className="text-green-600 font-semibold text-title1 md:mr-8 my-4 md:my-0">
            2
          </span>
          <p className="font-semibold text-body font-general">
            Comienza a planificar{"  "}
            <span className="font-bold">para tu futuro</span> y al mismo tiempo,
            {"  "}
            <span className="font-bold">
              &#161;obt&eacute;n excelentes beneficios y descuentos&#33;
            </span>
          </p>
        </li>
        <li className="flex flex-col items-center md:items-start md:flex-row w-72 md:mr-4">
          <span className="text-orange-500 font-semibold text-title1 md:mr-8 my-4 md:my-0">
            3
          </span>
          <p className="font-semibold text-body font-general">
            Adem&aacute;s de controlar tus obligaciones y planes,{"  "}
            <span className="font-bold">
              comparte&#47;divide la cuenta con tus amigos.
            </span>
          </p>
        </li>
      </ul>
      <img
        className="hidden max-h-[912px] md:block"
        src={constult_state}
        alt="consult-img"
      />
    </section>
  )
}

export default Consult
