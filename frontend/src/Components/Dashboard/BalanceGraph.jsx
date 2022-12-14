import Chart from "chart.js/auto"
import { Line } from "react-chartjs-2"
import { handleMovements } from "@/helpers/movements"

const BalanceGraph = ({ movements }) => {
  const { balance } = handleMovements(movements)

  let values = [0]
  movements.map((mov) => {
    values.push(values[values.length - 1] + mov.amount)
  })

  const labels = ["inicio", ...movements.map((mov) => mov.activity)]
  const colors =
    balance > 0 ? "rgb(55, 149, 99, 0.4)" : "rgba(255, 140, 98, 0.4)"

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Tus estadisticas",
        backgroundColor: colors,
        borderColor: colors,
        data: values,
      },
    ],
  }
  return (
    <div className="w-64 xs:w-72 sm:w-96 lg:w-[25rem] xl:w-[30rem] lg:mt-8 bg-white rounded-lg shadow-md p-2">
      <Line data={data} options={{ fill: true }} />
    </div>
  )
}

export default BalanceGraph
