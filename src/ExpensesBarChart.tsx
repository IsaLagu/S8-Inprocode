import { Bar, getElementAtEvent } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, Chart } from "chart.js";
import { useRef } from "react";
Chart.defaults.color = "#000000";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  aspectRatio: 1,
  plugins: {
    legend: {
      position: "top" as const,
      display: false,
    },
    title: {
      display: true,
      text: "Expenses. Last Week",
      font: {
        size: 22,
        color: "#000000",
      },
    },
  },
  // scales: {
  //   x: {
  //     display: false,
  //   },
  // },
};

const labels = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

export const data = {
  labels,
  datasets: [
    {
      label: "",
      data: [57, 35.99, 20.78, 60, 87.05, 120, 78, 89.25],
      backgroundColor: "#fc7d4b",
    },
  ],
};

interface ExpensesBarChartProps {
  onClickItem: (label: string, value: number) => void;
}

function ExpensesBarChart({ onClickItem }: ExpensesBarChartProps) {
  const chartRef = useRef();

  const onClick = (event: any) => {
    if (chartRef.current) {
      const dataElement = getElementAtEvent(chartRef.current, event);
      const dat = dataElement[0];
      const index = dat.index;
      onClickItem(labels[index], data.datasets[0].data[index]);
    }
  };

  return <Bar ref={chartRef} onClick={onClick} options={options} data={data} />;
}

export default ExpensesBarChart;
