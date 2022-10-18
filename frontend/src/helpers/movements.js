// export const movements = [
//   {
//     id: 0,
//     activity: "Supermercado",
//     category: "Alimento semanal",
//     amount: 1386,
//     type: "egreso",
//   },
//   {
//     id: 1,
//     activity: "Cine",
//     category: "Entretenimiento",
//     amount: 250,
//     type: "egreso",
//   },
//   {
//     id: 2,
//     activity: "Pago de octubre",
//     category: "Salario nómina",
//     amount: 20000,
//     type: "ingreso",
//   },
//   {
//     id: 3,
//     activity: "Agua",
//     category: "Servicios de la casa",
//     amount: 250,
//     type: "egreso",
//   },
//   {
//     id: 4,
//     activity: "Internet",
//     category: "Servicios de la casa",
//     amount: 150,
//     type: "egreso",
//   },
//   {
//     id: 5,
//     activity: "Teléfono",
//     category: "Móvil",
//     amount: 100,
//     type: "egreso",
//   },
//   {
//     id: 6,
//     activity: "Gasolina",
//     category: "Moto",
//     amount: 200,
//     type: "egreso",
//   },
//   {
//     id: 7,
//     activity: "Mi amigo me pagó",
//     category: "Préstamo",
//     amount: 3500,
//     type: "ingreso",
//   },
// ];

// import { json } from "react-router-dom";

async function fetchBalance(id) {
  try {
    const response = await fetch(`https://coinbookbackend-production.up.railway.app/balance/balance/${id}`, {
      method: 'GET',
      credentials: 'same-origin'
    });
    const balance = await response.json();
    return balance;
  } catch (error) {
    console.error(error);
  }
}

async function renderBalance(id) {
  const balance = await fetchBalance(id);
  console.log(balance)
  return balance
}

export const balance_movements = renderBalance(`6334d7285fd8cb18d0a2a3d3`)