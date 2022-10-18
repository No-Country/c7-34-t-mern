import dataBalance from "@/assets/images/balance-data.svg"
import subsBalance from "@/assets/images/balance-subs.svg"
import { useEffect, useRef, useState } from "react"

function Balance({ setPostBalance }) {
  const [movements, setMovements] = useState();
  const user= JSON.parse(localStorage.getItem("userData"))._doc;
  
  useEffect(() => {
    fetch(`https://coinbookbackend-production.up.railway.app/balance/balance/${user._id}`, {
      method: 'GET',
      credentials: 'same-origin'
    })
    .then(res => res.json())
    .then(res => setMovements(res))
    .catch(err => console.error(err));

  }, [])
  return (
    <section className="flex flex-col gap-10 my-6 sm:my-10">
      <aside>
        <div className="bg-white py-2 md:py-6 px-4 rounded-xl grid w-64 sm:w-[20rem] md:w-[25rem] gap-6">
          <span className="flex items-center justify-start font-title font-bold tracking-wide text-title2 md:text-[2rem]">
            Balance:
          </span>
          <span className="flex items-center justify-end font-title font-bold text-title3 md:text-title2 tracking-wide text-primary-base">
            $ 15,300.28
          </span>
        </div>
      </aside>
      <aside>
        <div className="hidden sm:flex items-center sm:gap-16 md:gap-20 w-fit">
          <article className="bg-white py-6 px-4 rounded-xl flex items-center w-32 md:w-40 gap-2">
            <img src={dataBalance} alt="balance-data" className="h-24" />
            <h2 className="hidden md:block font-title font-bold text-[3.5rem]">
              2
            </h2>
          </article>
          <article className="bg-white py-6 px-4 rounded-xl flex items-center w-32 md:w-40 gap-2">
            <img src={subsBalance} alt="balance-subs" className="h-24" />
            <h2 className="hidden md:block font-title font-bold text-[3.5rem]">
              0
            </h2>
          </article>
        </div>
      </aside>
      <aside>
        <table className="w-64 sm:w-[20rem] md:w-[25rem] rounded-xl py-10">
          <thead className="min-w-full">
            <tr>
              <th
                colSpan={2}
                className="px-5 py-2 border-b-2 border-gray-200 bg-white text-center font-general font-semibold text-footer lg:text-headline text-gray-600 uppercase tracking-wider"
              >
                Movimientos {user.name}
              </th>
            </tr>
          </thead>
          <tbody>
            { movements !== undefined ? movements.map((mov, i) => {
              const { _id, activity, category, amount, type } = mov

              return (
                <tr
                  key={_id}
                  className={`${
                    i % 2 == 0
                      ? "bg-indigo-100 border-x border-neutral-gray drop-shadow-lg"
                      : "bg-white"
                  } py-1`}
                >
                  <td className="border-b border-gray-200 px-2">
                    <div className="flex flex-col px-4 py-1 sm:py-0.5">
                      <p className="font-general font-semibold text-footer xl:text-headline tracking-normal">
                        {activity}
                      </p>
                      <p className="font-general font-semibold text-legend1 xl:text-footer text-gray-400 tracking-normal">
                        {category}
                      </p>
                    </div>
                  </td>
                  <td className="border-b border-gray-200">
                    <div className="flex justify-end px-4">
                      <p
                        className={`${
                          type === "ingreso"
                            ? "text-primary-base"
                            : "text-secondary-light"
                        } font-general font-bold tracking-wide text-headline xl:text-title3`}
                      >
                        {type === "ingreso" ? "+ $ " : "- $ "}
                        {amount}
                      </p>
                    </div>
                  </td>
                </tr>
              )
            }) : null
          }
          </tbody>
        </table>
        <div className="w-full flex items-center justify-around gap-2 my-8">
          <button 
            className="rounded-2xl py-3 bg-secondary-light hover:bg-secondary-lighter text-white font-general font-semibold text-footer sm:text-headline w-28 sm:w-40"
            onClick={() => setPostBalance('expense')}
          >
            {" "}
            -$ Añadir Gasto{" "}
          </button>
          <button 
            className="rounded-2xl py-3 bg-primary-base hover:bg-primary-light text-white font-general font-semibold text-footer sm:text-headline w-28 sm:w-40"
            onClick={() => setPostBalance('income')}
          >
            {" "}
            + Añadir Ingreso{" "}
          </button>
        </div>
      </aside>
    </section>
  )
}
export default Balance
