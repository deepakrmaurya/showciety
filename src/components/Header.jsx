import React from "react";
import logo from "../../../logo.png";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  return (
    <div className="z-10 px-5 py-2 w-screen flex absolute justify-between bg-gradient-to-br from-gray-400">
      <img className="w-32" src={logo} alt="Logo" />

      {user && (
        <div className="flex">
          <img className="w-15" src={user?.photoURL} />
          <button onClick={handleSignOut} className="cursor-pointer">
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
