"use client";
import { useMemo } from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  type ChartOptions,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

// Props interface
interface ChartDonutProps {
  correct: number;
  wrong: number;
}

// The component
function ChartDonut({ correct, wrong }: ChartDonutProps) {
  // Get the total amount of questions and the correct percentage
  const total = correct + wrong;
  const percentage = total > 0 ? Math.round((correct / total) * 100) : 0;

  let message = "";
  switch (true) {
    case percentage === 100:
      message = "Perfection 🏆";
      break;
    case percentage >= 80:
      message = "Great job!";
      break;
    case percentage >= 60:
      message = "Not bad!";
      break;
    default:
      message = "Keep practicing!";
  }

  // Prepare Donut data
  const data = useMemo(
    () => ({
      labels: ["Correct", "Wrong"],
      datasets: [
        {
          data: [correct, wrong],
          backgroundColor: ["oklch(98% 0.016 73.684)", "rgba(101, 67, 33)"],
          borderColor: ["rgba(101, 67, 33)", "rgba(101, 67, 33)"],
          borderWidth: 2,
          hoverOffset: 0,
          cutout: "70%",
        },
      ],
    }),
    [correct, wrong],
  );

  // Donut's options
  const options: ChartOptions<"doughnut"> = useMemo(
    () => ({
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: (ctx) => {
              const value = Number(ctx.raw ?? 0);
              const pct = total > 0 ? Math.round((value / total) * 100) : 0;
              return `${ctx.label}: ${value} (${pct}%)`;
            },
          },
        },
      },
    }),
    [total],
  );

  // Returned JSX
  return (
    <div className="grig gap-4 max-w-72 mx-auto">
      <div className="relative h-60">
        <Doughnut data={data} options={options} />
        <div className="absolute inset-0 grid items-center justify-center pointer-events-none text-center">
          <div>
            <div className="font-merriweather font-bold text-[38px] leading-0 mt-5">
              {percentage}%
            </div>
            <div className="mt-5">{message}</div>
          </div>
        </div>
      </div>
      <div className="flex justify-between text-center mt-2">
        <div>
          <div className="text-[12px] opacity-75">Correct</div>
          <div className="text-[20px] font-bold">{correct}</div>
        </div>
        <div>
          <div className="text-[12px] opacity-75">Wrong</div>
          <div className="text-[20px] font-bold">{wrong}</div>
        </div>
        <div>
          <div className="text-[12px] opacity-75">Total</div>
          <div className="text-[20px] font-bold">{total}</div>
        </div>
      </div>
    </div>
  );
}

export default ChartDonut;
