import React from "react";
import "./Header.scss";
import user from "../../images/user.png";
import { useNavigate } from "react-router-dom";

const Header = () => {
  let navigate = useNavigate();

  return (
    <div className="header">
      <div className="logo" onClick={() => {navigate("/")}}>Movie App</div>
      <div className="user-image">
        <img src={user} alt="user" />
      </div>
    </div>
  );
};

export default Header;
