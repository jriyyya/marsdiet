import Chart, { ChartData, ChartConfiguration } from "chart.js/auto";
import { useEffect, useRef } from "react";
import { useForceUpdate } from "../hooks/useForceUpdate";

interface ChartComponentProps {
  title?: string;
  type: ChartConfiguration["type"];
  data: ChartData;
}

export function ChartComponent(props: ChartComponentProps) {
  const canvasRef = useRef() as React.MutableRefObject<HTMLCanvasElement>;

  useEffect(() => {
    // const ctx = canvasRef.current.getContext("2d") as CanvasRenderingContext2D;

    try {
      const data = props.data;
      new Chart(canvasRef.current, {
        type: props.type,
        options: {
          responsive: true,
          interaction: {
            mode: "index",
            intersect: false,
          },
          plugins: {
            title: {
              display: props.title ? true : false,
              text: props.title,
            },
          },
        },
        data: data,
      });
    } catch (error) {
      console.error(error);
    }
  }, [props.data]);

  const update = useForceUpdate();

  return <canvas ref={canvasRef} />;
}
