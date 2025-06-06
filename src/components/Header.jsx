import React from "react";
import logo from "../../../showcietylogo.png";

const Header = () => {
  return (
    <div className="bg-[#DDE5B6] ">
      <div className="px-5 py-2">
        <img className="w-32  " src={logo} alt="Logo" />
      </div>
    </div>
  );
};

export default Header;
