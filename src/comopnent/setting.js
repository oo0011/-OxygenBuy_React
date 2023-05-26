import settingsIcon from "../images/settings-icon.png";
import { useState } from "react";
import ModalBasic from "../modal/settingModal.js";
import "../css/setting.css";

function Setting() {
  // 모달을 노출하는 페이지

  // 모달창 노출 여부 state
  const [modalOpen, setModalOpen] = useState(false);

  // 모달창 노출
  const showModal = () => {
    setModalOpen(true);
  };

  return (
    <div>
      <div className="Setting_Box">
        <img
          className="Setting_Img"
          src={settingsIcon}
          alt={settingsIcon}
          onClick={showModal}
        />
        <button className="Setting_Title" onClick={showModal}>
          환경설정
        </button>
        {modalOpen && <ModalBasic setModalOpen={setModalOpen} />}
      </div>
    </div>
  );
}

export default Setting;
