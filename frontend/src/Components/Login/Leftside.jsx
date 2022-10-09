import logo from "@/assets/AppIcon.svg"
import picSignIn from "@/assets/siginpic.svg"

function Leftside() {
  return (
    <section className="relative w-[40vw] hidden md:block">
      <div className="absolute -z-10 bg-gradient-to-b from-[#ff7b4c4c] via-[#3795634c] to-[#0000004c] h-full w-full" />
      <img
        src={picSignIn}
        alt="bg-signin"
        className="absolute h-full w-full object-cover opacity-60"
      />

      <aside className="flex flex-col gap-[60vh] mx-8">
        <figure className="relative mt-6 h-full">
          <img className="h-20" src={logo} alt="CoinBook-logo" />
        </figure>
        <article className="flex flex-col justify-start items-center gap-6 py-4 px-8 text-center h-60 w-full rounded-md bg-opacity-60 backdrop-filter backdrop-blur-sm">
          <span className="text-white font-general font-semibold text-[2.5rem]">
            Coin Book
          </span>
          <div className="text-white font-general font-normal text-headline lg:text-title3 xl:text-title2">
            La forma mas facil de planificar tus finanzas.
          </div>
        </article>
      </aside>
    </section>
  )
}

export default Leftside
