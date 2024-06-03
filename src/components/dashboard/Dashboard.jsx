import "../../App.css";
import Biggerbox from "../dashboard/Biggerbox";
import Smallerbox from "../dashboard/Smallerbox";
import Userinfo from "../dashboard/Userinfo";

function Dashboard() {
  return (
    <div className="max-[768px]:flex max-[768px]:justify-center max-[768px]:items-center">
      <div className="flex max-[768px]:justify-center max-[768px]:items-center md:flex-row flex-col gap-[2vw] ps-[6%] pt-[2vw]">
        <Userinfo />
        <div className="flex flex-col gap-[1vw]">
          <Biggerbox ChartType="bar" />
          <Biggerbox ChartType="line" />
        </div>
        <div className="flex flex-row md:flex-col gap-[1vw]">
          <Smallerbox ChartType="protocol" />
          <Smallerbox ChartType="ip" />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
