import React, { useEffect, useState } from "react";
import "../css/weather.css";

function Weather() {
  const [weatherData, setWeatherData] = useState(null);
  const API_KEY = "34dacbb25aedd782adb0ecaa3c0a0525";

  useEffect(() => {
    const fetchWeatherData = async (latitude, longitude) => {
      try {
        const response = await fetch(
          `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
        );
        const data = await response.json();
        setWeatherData(data);
        console.log(data);
        console.log(latitude, longitude);
      } catch (error) {
        console.log(error);
      }
    };

    const getCurrentLocation = () => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchWeatherData(latitude, longitude);
        },
        (error) => {
          console.log(error);
        }
      );
    };

    getCurrentLocation();
  }, [API_KEY]);

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  // 받아온 weatherData JSON 데이터를 사용하여 원하는 대로 활용합니다.
  const { name, main, weather } = weatherData;

  return (
    <div className="box1">
      <div>
        <h1 className="name">{name} 님</h1>
        <hr className="hr" />
      </div>
      <div className="Weather_Box">
        <span className="Weather_Temp">{Math.round(main.temp)}</span>
        <span className="Weather_Temp_Sub">°</span>
        <span className="Weather_Main_Sub">날씨</span>
        <span className="Weather_Main">{weather[0].main}</span>
      </div>
    </div>
  );
}

export default Weather;
