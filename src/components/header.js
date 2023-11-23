import React from "react";

function Header() {

  return (
    <div className="header">
      <div>
        <img src={"/images/R13.png"} className="R13logo"/>
        <span className="autologot">
        <img src={"/images/audilogo3.png"} className="logo"/>
        <img src={"/images/bmwlogo1.png"} className="logo"/>
        <img src={"/images/MercedesLogo1.png"} className="logo"/>
        </span>
      </div>
    </div>
  );
}

export default Header;
