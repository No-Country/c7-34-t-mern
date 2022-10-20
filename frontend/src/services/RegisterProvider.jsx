import { RegisterModal } from "@/Components"
import { useState } from "react"
import { FormProvider, useForm } from "react-hook-form"

function RegisterProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false)
  const handleShowModal = () => {
    setIsOpen(!!isOpen)
  }

  const handleCloseModal = () => {
    setIsOpen(false)
  }

  const methods = useForm()
  const { handleSubmit } = methods

  const onSubmit = handleSubmit((data) => {
    const userData = {
      name: data.name,
      email: data.email,
      password: data.password, 
    }
    fetch("https://coinbookbackend-production.up.railway.app/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((res) => {
        if (res.status === 200) {
          setIsOpen(true)
        }
        return res.json()
      })
      .catch((err) => console.log(err))
  })

  return (
    <FormProvider {...methods}>
      <form onSubmit={onSubmit}>
        {children}
        <span className="w-full">
          <RegisterModal
            openModal={isOpen}
            showModal={handleShowModal}
            closeModal={handleCloseModal}
          />
        </span>
      </form>
    </FormProvider>
  )
}

export default RegisterProvider
