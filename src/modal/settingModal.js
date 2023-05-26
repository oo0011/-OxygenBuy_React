import "../css/modal/settingModal.css";
import backImg1 from "../images/backImages/backImg1.avif";
import backImg2 from "../images/backImages/backImg2.jpg";
import backImg3 from "../images/backImages/backImg3.png";
import backImg4 from "../images/backImages/backImg4.jpg";
import { useState } from "react";

function ModalBasic({ setModalOpen }) {
  const [isHidden, setIsHidden] = useState(false);

  // 모달 끄기
  const closeModal = () => {
    setModalOpen(false);
  };

  const TemaBtnClick = () => {
    setIsHidden(true);
  };
  console.log(isHidden);
  return (
    <div className="SettingModal_Box">
      <h2 className="SettingModal_Title">환경설정</h2>
      <div className="SettingModal_Butotn_Box">
        <button className="SettingModal_BackImg_Button">배경 이미지</button>
        <button className="SettingModal_Tema_Button" onClick={TemaBtnClick}>
          테마 색상
        </button>
      </div>

      {isHidden ? null : (
        <div className="SettingModal_BackImg_Input_Box">
          <div className="SettingModal_BackImg_Input1">
            <input type="checkbox" id="checkbox1" value="option1" checked />
            <img
              className="SettingModal_BackImg_Img1"
              for="checkbox1"
              src={backImg1}
              alt={backImg1}
            />
            <input type="checkbox" id="checkbox2" value="option2" />
            <img
              className="SettingModal_BackImg_Img2"
              for="checkbox2"
              src={backImg2}
              alt={backImg2}
            />
          </div>

          <div className="SettingModal_BackImg_Input2">
            <input type="checkbox" id="checkbox3" value="option3" />
            <img
              className="SettingModal_BackImg_Img3"
              for="checkbox2"
              src={backImg3}
              alt={backImg3}
            />

            <input type="checkbox" id="checkbox3" value="option3" />
            <img
              className="SettingModal_BackImg_Img4"
              for="checkbox2"
              src={backImg4}
              alt={backImg4}
            />
          </div>
        </div>
      )}

      <button className="SettingModal_Close_Button" onClick={closeModal}>
        닫기
      </button>
    </div>
  );
}
export default ModalBasic;
