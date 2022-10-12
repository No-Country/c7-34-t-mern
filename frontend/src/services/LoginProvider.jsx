import { FormProvider, useForm } from "react-hook-form"

function LoginProvider({ children }) {
  const methods = useForm()
  const { handleSubmit } = methods

  const onSubmit = handleSubmit((data) => {
    console.log(data)
    const userData = {
      email: data.email,
      password: data.password,
    }
    fetch("http://localhost:4000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((res) => {
        return res.json()
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
  })

  return (
    <FormProvider {...methods}>
      <form onSubmit={onSubmit}>{children}</form>
    </FormProvider>
  )
}

export default LoginProvider
