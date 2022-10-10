import { useState, useEffect } from 'react';

function Form() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //alert("User Added")
    const userData = {
      email: email,
      password: password,
    };

   try{
    const add = await fetch("http://localhost:4000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    }).then(res => {return res.json()});

  console.log(add)
   }catch(err){
     console.error()
   }
  };

  return (
    <aside>
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label className="text-footer font-semibold text-[#8E9093] tracking-wide">
            Email
            <input
              onChange={handleEmail}
              className="w-full text-call text-black py-2 bg-inherit border-b border-black focus:outline-none focus:border-primary-light"
              type="email"
            />
          </label>
        </div>
        <div className="mt-6">
          <label className="text-footer font-semibold text-[#8E9093] tracking-wide">
            Password
            <input
              onChange={handlePassword}
              className="w-full text-call text-black py-2 bg-inherit border-b border-black focus:outline-none focus:border-primary-light"
              type="password"
            />
          </label>
        </div>
        <div className="flex justify-between mt-6">
          <span className="flex justify-center items-center gap-2">
            <input
              className="accent-primary-base cursor-pointer"
              type="checkbox"
            />
            <p className="font-general font-semibold text-legend2">
              Recordarme al ingresar
            </p>
          </span>
          <a
            href=""
            className="font-general font-semibold text-legend2 cursor-pointer border-b-2 border-black"
          >
            ¿Olvidaste tu contraseña?
          </a>
        </div>
        <div className="mt-10">
          <button
            className="bg-primary-light text-gray-100 py-2 w-full rounded-lg tracking-widest
                                font-semibold font-title focus:outline-none focus:shadow-outline hover:bg-primary-darker
                                shadow-lg"
          >
            Entrar
          </button>
        </div>
      </form>
      <div className="flex items-center justify-between gap-2 md:gap-6 mt-12">
        <p className="text-legend1 md:text-subtitle font-semibold">
          ¿Aún no tienes una cuenta?{" "}
        </p>
        <a
          href=""
          className="font-general font-bold text-legend1 md:text-subtitle text-black cursor-pointer"
        >
          ¡Crea una cuenta gratis aquí!
        </a>
      </div>
    </aside>
  )
}

export default Form
