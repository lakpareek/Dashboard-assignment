import "../../App.css";
import BarChart from "../graphs/BarChart";
import LineChart from "../graphs/LineChart";
import { DummyData } from "../../data";
import { useEffect, useState } from "react";

function Biggerbox({ ChartType }) {
  const [eventData, setEventData] = useState({
    labels: [...new Set(DummyData.map((item) => item.event_type))],
    datasets: [
      {
        label: "Event Types",
        data: [],
        backgroundColor: ["#36A2EB", "#FF6384", "#FFFFFF"],
      },
    ],
  });

  const [timeStampData, setTimeStampData] = useState({
    labels: ["3PM", "4PM", "5PM", "6PM"],
    datasets: [
      {
        label: "Request made the Last Hour(Traffic)",
        data: [],
        backgroundColor: ["#36A2EB"],
        borderColor: "#C5C5C5",
        borderWidth: 2,
      },
    ],
  });

  useEffect(() => {
    const eventTypeCount = DummyData.reduce((acc, obj) => {
      if (eventData.labels.includes(obj.event_type)) {
        acc[obj.event_type] = (acc[obj.event_type] || 0) + 1;
      }
      return acc;
    }, {});

    setEventData((prevEventData) => ({
      ...prevEventData,
      datasets: [
        {
          ...prevEventData.datasets[0],
          data: Object.values(eventTypeCount),
          backgroundColor: ["#36A2EB", "#FF6384", "#5E29D6"],
        },
      ],
    }));

    const timingCounts = DummyData.reduce(
      (acc, obj) => {
        const hour = obj.timestamp[12];
        if (["3", "4", "5", "6"].includes(hour)) {
          acc[hour] += 1;
        }
        return acc;
      },
      { "3": 0, "4": 0, "5": 0, "6": 0 }
    );

    setTimeStampData((prevTimeStampData) => ({
      ...prevTimeStampData,
      datasets: [
        {
          ...prevTimeStampData.datasets[0],
          data: Object.values(timingCounts),
        },
      ],
    }));
  }, []);

  return (
    <div className="bg-[#282828] h-[22vw] w-[45.5vw] rounded-md">
      {ChartType === "bar" && <BarChart chartData={eventData} />}
      {ChartType === "line" && <LineChart chartData={timeStampData} />}
    </div>
  );
}

export default Biggerbox;
