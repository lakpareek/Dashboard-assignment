import "../../App.css";
import PieChart from "../graphs/PieChart";
import { DummyData } from "../../data";
import { useEffect, useState } from "react";

function Smallerbox({ ChartType }) {
  const [protocolData, setProtocolData] = useState({
    labels: ["TCP", "UDP"],
    datasets: [
      {
        label: "Request Protocols",
        data: [0, 0],
        backgroundColor: ["#36A2EB", "#FF6384"],
        borderWidth: 0,
        borderColor: ["#282828"],
      },
    ],
  });

  const [ipAddressData, setIpAddressData] = useState({
    labels: ["67.207.67.2", "198.199.99.226", "138.68.3.71"],
    datasets: [
      {
        label: "Destination IP Address",
        data: [0, 0, 0],
        backgroundColor: ["#FF6384", "#5E29D6", "#36A2EB"],
        borderWidth: 0,
        borderColor: ["#282828"],
      },
    ],
  });

  useEffect(() => {
    const protocolCounts = DummyData.reduce(
      (acc, obj) => {
        if (obj.proto === "TCP") acc.tcp += 1;
        if (obj.proto === "UDP") acc.udp += 1;
        return acc;
      },
      { tcp: 0, udp: 0 }
    );

    const ipCounts = DummyData.reduce(
      (acc, obj) => {
        if (obj.dest_ip === "67.207.67.2") acc["67.207.67.2"] += 1;
        if (obj.dest_ip === "198.199.99.226") acc["198.199.99.226"] += 1;
        if (obj.dest_ip === "138.68.3.71") acc["138.68.3.71"] += 1;
        return acc;
      },
      { "67.207.67.2": 0, "198.199.99.226": 0, "138.68.3.71": 0 }
    );

    console.log(ipCounts);

    setIpAddressData({
      ...ipAddressData,
      datasets: [
        {
          label: "Destination IP Address",
          data: [
            ipCounts["67.207.67.2"],
            ipCounts["198.199.99.226"],
            ipCounts["138.68.3.71"],
          ],
          backgroundColor: ["#FF6384", "#5E29D6", "#36A2EB"],
          borderWidth: 0,
          borderColor: ["#282828"],
        },
      ],
    });

    setProtocolData({
      ...protocolData,
      datasets: [
        {
          label: "Request Protocols",
          data: [protocolCounts.tcp, protocolCounts.udp],
          backgroundColor: ["#36A2EB", "#FF6384"],
          borderWidth: 0.5,
          borderColor: ["#C5C5C5"],
        },
      ],
    });
  }, []);

  return (
    <div className="bg-[#282828] h-[22vw] w-[18vw] rounded-md">
      {ChartType === "protocol" && (
        <PieChart chartData={protocolData} title="Request Protocols" />
      )}
      {ChartType === "ip" && (
        <PieChart chartData={ipAddressData} title="Destination IP Address" />
      )}
    </div>
  );
}

export default Smallerbox;
