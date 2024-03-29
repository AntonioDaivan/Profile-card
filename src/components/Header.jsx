import { FaConnectdevelop } from "react-icons/fa";

import "../styles/header.sass";
import profile from "../assets/avatar.png";

export function Header() {
  return (
    <header>
      <div className="app-title">
        <h1>Dev Profile</h1>
        <div className="spinner-box">
          <div className="orbit"></div>
          <div className="orbit"></div>
          <div className="orbit"></div>
          <div className="orbit"></div>
        </div>
      </div>
      <div className="user-info">
        <div className="div-profile-image">
          <img src={profile} alt="profile image" />
        </div>
        <div>
          <h1 className="user-name">Antonio Daivan</h1>
          <p className="user-description">FRONTEND DEVELOPER</p>
        </div>
      </div>
    </header>
  );
}
