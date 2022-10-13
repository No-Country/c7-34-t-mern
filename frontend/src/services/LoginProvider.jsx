import { FormProvider, useForm } from "react-hook-form"
import { useNavigate } from 'react-router-dom';

function LoginProvider({ children }) {
  const methods = useForm()
  const { handleSubmit } = methods
  const navigateTo = useNavigate();

  const onSubmit = handleSubmit((data) => {
    //console.log(data)
    // const userData = {
    //   email: data.email,
    //   password: data.password,
    // }

    const userData = {
      email: "j@juan.com",
      password: "1234",
    }

    const URL = "http://localhost:4000/login"
    const options = {
      method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData)
    }

    const responseLogin = fetch(URL, options)
      .then((response) => response.json())
      .then((user) => {
        return user;
      })

    const loginData = async () => {
      const a = await responseLogin
      const b = a['token']
      if (b) {
        navigateTo("/dashboard")
      } else {
        navigateTo("/login")
      } 
    }
    loginData()

  })

  return (
    <FormProvider {...methods}>
      <form onSubmit={onSubmit}>{children}</form>
    </FormProvider>
  )
}

export default LoginProvider