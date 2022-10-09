import { Leftside, Rightside } from "../Components"

function SignIn() {
  return (
    <main className="h-full min-h-screen flex">
      <Leftside />
      <section className="grid gap-8 sm:gap-12 justify-center w-full md:w-[60vw] py-[15%] sm:py-32 px-3 bg-slate-200">
        <Rightside />
      </section>
    </main>
  )
}

export default SignIn
