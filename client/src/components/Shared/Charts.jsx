import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  ArcElement,
} from "chart.js";
import { Text } from "@chakra-ui/react";
import { Bar, Line, Pie } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const week_labels = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const month_labels = ["Week1", "Week2", "Week3", "Week4", "Remaining days"];
const colors = [
  "#003f5c",
  "#2f4b7c",
  "#665191",
  "#a05195",
  "#d45087",
  "#f95d6a",
  "#ff7c43",
  "#ffa600",
  "#de425b",
  "#ec838a",
  "#6aaa96",
  "#488f31",
];

export default function BarChart({ title, label, reports }) {
  const labels = title === "Monthly" ? month_labels : week_labels;

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: title,
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: label,
        data: labels.map((label, i) => (reports ? reports[i] : i)),
        backgroundColor: colors.map((color) => color),
      },
    ],
  };

  return <Bar data-testid="inventory-chart" options={options} data={data} />;
}

export function LineChart({ title, reports }) {
  const labels = title === "Monthly" ? month_labels : week_labels;

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: title,
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: "Cash",
        data: labels.map((label, i) => reports?.cash[i]),
        borderColor: "rgb(255, 166, 0)",
        backgroundColor: "rgba(255, 166, 0, 0.5)",
      },
      {
        label: "Credit Card",
        data: labels.map((label, i) => reports?.credit_card[i]),
        borderColor: "rgb(72, 143, 49)",
        backgroundColor: "rgba(72, 143, 49, 0.5)",
      },
      {
        label: "Debit Card",
        data: labels.map((label, i) => reports?.debit_card[i]),
        borderColor: "rgb(102, 81, 145)",
        backgroundColor: "rgba(102, 81, 145, 0.5)",
      },
      {
        label: "Mobile",
        data: labels.map((label, i) => reports?.mobile[i]),
        borderColor: "rgb(12, 206, 240)",
        backgroundColor: "rgba(12, 206, 240, 0.5)",
      },
      {
        label: "Uber eats",
        data: labels.map((label, i) => reports?.uber_eats[i]),
        borderColor: "rgb(212, 80, 135)",
        backgroundColor: "rgba(212, 80, 135, 0.5)",
      },
    ],
  };

  return <Line data-testid="finance-chart" options={options} data={data} />;
}

export function PieChart({ reports }) {
  const data = {
    labels: ["Burger", "Sandwich", "Drinks", "Sides"],
    datasets: [
      {
        label: "% of sales",
        data: reports,
        backgroundColor: [
          "rgba(212, 80, 135, 0.5)",
          "rgba(255, 166, 0, 0.5)",
          "rgba(12, 206, 240, 0.5)",
          "rgba(72, 143, 49, 0.5)",
        ],
        borderColor: [
          "rgb(212, 80, 135)",
          "rgb(255, 166, 0)",
          "rgb(12, 206, 240)",
          "rgb(72, 143, 49)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return reports.every((report) => report === null) ? (
    <Text
      textAlign="center"
      w="100%"
      fontFamily="'Poppins', sans-serif"
      fontSize="1.15rem"
      fontWeight="semibold"
    >
      Data unavailable
    </Text>
  ) : (
    <Pie data-testid="sales-chart" data={data} />
  );
}
