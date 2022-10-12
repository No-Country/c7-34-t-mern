import { FormProvider, useForm } from "react-hook-form"

function RegisterProvider({ children }) {
  const methods = useForm()
  const { handleSubmit } = methods

  const onSubmit = handleSubmit((data) => {
    console.log(data)
    const userData = {
      name: data.name,
      email: data.email,
      password: data.password,
    }
    fetch("http://localhost:4000/register", {
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

export default RegisterProvider
