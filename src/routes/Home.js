import Weather from "../comopnent/weather";
import Progressbar from "../comopnent/progressbar";
import Setting from "../comopnent/setting";
import MyInfo from "../comopnent/myinfo";
import OxygenBuy from "../comopnent/oxygenBuy";
import OxygenManagement from "../comopnent/oxygenManagement";

import "../css/Home.css";

function Home() {
  return (
    <div className="Home_Box">
      <h2 className="Home_Main_Title">
        <span className="CM_CM">CM</span>{" "}
        <span className="black">천명그룹</span>
      </h2>
      <Weather />
      <Progressbar />
      <Setting />
      <MyInfo />
      <OxygenBuy />
      <OxygenManagement />
    </div>
  );
}

export default Home;
