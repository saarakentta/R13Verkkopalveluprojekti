import React from "react";

function Header() {

  return (
    <div className="header">
      <div>
        <img src={"/images/R13.png"} className="R13logo"/>
        <span className="autologot">
        <img src={"/images/audilogo.png"} className="logo"/>
        <img src={"/images/bmwlogo.png"} className="logo"/>
        <img src={"/images/Mercedes-BenzLogo.png"} className="logo"/>
        </span>
      </div>
    </div>
  );
}

export default Header;
