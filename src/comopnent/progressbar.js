import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "../css/progressbar.css";
import { useEffect, useState } from "react";

function Progressbar() {
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
    <div className="Progressbar_Box">
      <p className="Progressbar_Title">
        <stong>산소</stong>
      </p>

      <CircularProgressbar
        className="Progressbar_Img"
        value={numGauge}
        text={numGauge > 0 ? numGauge + "%" : "산소 부족!"}
        styles={{
          text: {
            fontSize: "10px",
          },
        }}
      />

      <p
        className="Progressbar_Notification"
        style={{
          color: numGauge >= 70 ? "green" : numGauge >= 30 ? "orange" : "red",
        }}
      >
        {numGauge >= 70 ? "정상" : numGauge >= 30 ? "보통" : "위험"}
      </p>
    </div>
  );
}

export default Progressbar;
