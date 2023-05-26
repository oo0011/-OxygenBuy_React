import myInfoImg from "../images/myinfo.png";
import "../css/myinfo.css";

function MyInfo() {
  return (
    <div className="MyInfo_Box">
      <img className="MyInfo_Img" src={myInfoImg} alt={myInfoImg} />
      <button className="MyInfo_Button">내 정보</button>
    </div>
  );
}

export default MyInfo;
