import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

interface RadarChartProps {
  data: { [key: string]: number };
}

export default function RadarChart({ data }: RadarChartProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const ctx = canvasRef.current?.getContext("2d");
    if (!ctx) return;

    const chart = new Chart(ctx, {
      type: "radar",
      data: {
        labels: Object.keys(data),
        datasets: [{
          label: "ACT Profile",
          data: Object.values(data),
          backgroundColor: "rgba(59, 130, 246, 0.2)",
          borderColor: "rgba(59, 130, 246, 1)",
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        scales: {
          r: {
            beginAtZero: true,
            max: 100
          }
        }
      }
    });

    return () => chart.destroy();
  }, [data]);

  return <canvas ref={canvasRef} />;
}