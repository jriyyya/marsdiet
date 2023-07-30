import { ChartComponent } from "../../../../common/ChartComponent";

export default function SleepTrack() {
  const data = {
    labels: [24, 25, 26, 27, 28, 29, 30],
    datasets: [
      {
        label: "Sleep Tracker",
        data: [11, 8, 12, 8, 6, 10, 4],
        fill: false,
        borderColor: "rgb(255, 120, 31)",
        tension: 0.2,
      },
    ],
  };
  return (
    <div className="bg-secondary bg-opacity-50 basis-1/2 rounded-3xl p-4">
      <div className="flex flex-col items-center">
        <ChartComponent data={data} type="line" />
        <div className="text-sm">Month of July</div>
      </div>
    </div>
  );
}
