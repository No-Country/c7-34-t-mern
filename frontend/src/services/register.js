import { useForm } from "react-hook-form";

const methods = useForm();
const { handleSubmit } = methods;

export const onSubmit = handleSubmit((data) => {
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
    .then(res => console.log(res))
    .catch(err => console.log(err))
});
