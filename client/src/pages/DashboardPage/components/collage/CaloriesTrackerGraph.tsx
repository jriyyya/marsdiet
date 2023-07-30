import { ChartComponent } from "../../../../common/ChartComponent";

export default function CaloriesTrackerGraph() {
  const data = {
    labels: [24, 25, 26, 27, 28, 29, 30],
    datasets: [
      {
        label: "Calories Tracker",
        data: [11, 8, 12, 8, 6, 10, 4],
        borderColor: "rgb(255, 159, 64)",
        backgroundColor: "rgba(255, 159, 64, 0.9)",
        borderWidht: 2,
      },
    ],
  };
  return (
    <div className="bg-secondary bg-opacity-40 rounded-3xl basis-2/3 p-4">
      <div className="flex flex-col items-center">
        <ChartComponent data={data} type="bar" />
        <div className="text-sm">Month of July</div>
      </div>
    </div>
  );
}
