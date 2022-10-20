import { RegisterForm, RegisterNav } from "@/Components"

function SignUp() {
  return (
    <main className="bg-bgRegister bg-cover bg-no-repeat h-full min-h-screen flex flex-col gap-[10vh] sm:gap-20 md:gap-32 justify-start items-start pb-20 sm:pb-0">
      <RegisterNav />
      <RegisterForm />
    </main>
  )
}

export default SignUp
