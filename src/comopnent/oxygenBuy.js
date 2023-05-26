import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "../css/oxygenBuy.css";
import { useEffect, useState } from "react";

function OxygenBuy() {
  const [numGauge, setnumGauge] = useState(100);

  useEffect(() => {
    const interval = setInterval(() => {
      setnumGauge((numGauge) => numGauge - 10);
      if (numGauge === 0) {
        setnumGauge(0);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  });
  return (
    <div className="OxygenBuy_Box">
      <CircularProgressbar
        className="OxygenBuy_Img"
        value={numGauge}
        text={numGauge > 0 ? numGauge + "%" : "산소 부족!"}
        styles={{
          text: {
            fontSize: "15px",
          },
        }}
      />
      <button className="OxygenBuy_Button">산소구입</button>
    </div>
  );
}

export default OxygenBuy;
