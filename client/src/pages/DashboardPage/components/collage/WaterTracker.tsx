import { useEffect, useState } from "react";
import { ChartComponent } from "../../../../common/ChartComponent";
import MaterialIcon from "../../../../common/MaterialIcon";

export default function WaterTracker() {
  const [glassesCount, setGlassesCount] = useState(15);
  const [glassesDrank, setGlassesDrank] = useState(5);
  const [data, setData] = useState({
    labels: ["Drank", "Left"],
    datasets: [
      {
        label: "Glasses",
        data: [glassesDrank, glassesCount - glassesDrank],
        backgroundColor: ["rgb(101, 189, 255)", "rgb(255, 101, 101)"],
        hoverOffset: 4,
      },
    ],
  });
  useEffect(() => {
    // Update the chart data whenever glassesDrank changes
    setData({
      ...data,
      datasets: [
        {
          ...data.datasets[0],
          data: [glassesDrank, glassesCount - glassesDrank],
        },
      ],
    });
  }, [glassesDrank, glassesCount]);
  //   const data = {
  //     labels: ["Drank", "Left"],
  //     datasets: [
  //       {
  //         label: "Glasses",
  //         data: [glassesDrank, glassesCount - glassesDrank],
  //         backgroundColor: ["rgb(54, 162, 235)", "rgb(255, 99, 132)"],
  //         hoverOffset: 4,
  //       },
  //     ],
  //   };
  return (
    <div className="bg-foreground bg-opacity-25 rounded-3xl p-4 items-center basis-1/2 flex flex-col gap-y-4">
      <ChartComponent type="doughnut" data={data} />
      <div className="flex gap-x-2">
        <button
          className="bg-blue-500 flex items-center px-2 py-2 rounded-xl text-white font-semibold"
          onClick={() => {
            setGlassesDrank(glassesDrank + 1);
          }}
        >
          Drank water <MaterialIcon codepoint="e145" />
        </button>
        <button
          className="bg-blue-500 flex items-center px-2 py-2 rounded-xl text-white font-semibold"
          onClick={() => {
            setGlassesDrank(glassesDrank + 1);
          }}
        >
          <MaterialIcon codepoint="e166" />
        </button>
      </div>
    </div>
  );
}
