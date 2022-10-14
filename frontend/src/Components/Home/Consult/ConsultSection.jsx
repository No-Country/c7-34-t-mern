import constult_state from "@/assets/images/consult-state.png";

const Consult = () => {
  return (
    <section className="flex flex-col items-center px-[10%] md:px-0">
      <h2 className="font-semibold text-title1 mb-14 md:mb-20">Consulta tu Estado en cualquier momento</h2>
      <ul className="flex flex-col md:flex-row items-center md:items-start md:justify-between w-full px-10 lg:w-4/6">
        <li className="flex flex-col items-center md:items-start md:flex-row w-72 md:mr-4">
          <span className="text-orange-500 font-semibold text-title1 md:mr-8 my-4 md:my-0">1</span>
          <p className="font-semibold text-body">
            <span className="font-bold">Abre tu cuenta</span>. Lo que no se mide, no se mejora, {" "}
            <span className="font-bold">&#161;Toma el control de tu vida&#33;</span></p>
        </li>
        <li className="flex flex-col items-center md:items-start md:flex-row w-72 md:mr-4">
          <span className="text-green-600 font-semibold text-title1 md:mr-8 my-4 md:my-0">2</span>
          <p className="font-semibold text-body">Comienza a planificar <span className="font-bold">para tu futuro</span> y al mismo tiempo,
          <span className="font-bold">&#161;obt&eacute;n excelentes beneficios y descuentos&#33;</span></p>
        </li>
        <li className="flex flex-col items-center md:items-start md:flex-row w-72 md:mr-4">
          <span className="text-orange-500 font-semibold text-title1 md:mr-8 my-4 md:my-0">3</span>
          <p className="font-semibold text-body">Adem&aacute;s de controlar tus obligaciones y planes, <span className="font-bold">comparte&#47;divide la cuenta con tus amigos.</span></p>
        </li>
      </ul>
      <img style={{ 'max-height': '912px'}} src={constult_state} />
    </section>
  );
}

export default Consult;
