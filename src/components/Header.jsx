import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES, USER_AVATAR } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        // ...
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
    console.log(e.target.value);
  };

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };
  return (
    <div className="z-10  w-screen flex flex-col md:flex-row absolute items-center justify-center md:justify-between px-4 py-2 bg-gradient-to-br from-gray-600 shadow-md">
      {/* // className="z-10 px-5 py-2 w-screen absolute justify-between flex
      bg-gradient-to-br from-gray-400" */}
      <img className="w-32" src={LOGO} alt="Logo" />
      {user && (
        <div className="flex">
          {showGptSearch && (
            <select
              onClick={handleLanguageChange}
              className="font-bold rounded-2xl text-white px-5 mr-7 mt-3 mb-2 bg-gray-700 cursor-pointer"
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            onClick={handleGptSearchClick}
            className="cursor-pointer px-5 mt-3 mb-2 mr-7 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out"
            // className="font-bold rounded-2xl px-5 mt-3 mb-2 mr-7 bg-fuchsia-700 cursor-pointer"
          >
            {showGptSearch ? "Home Page" : "Smart Search"}
          </button>

          <details className="relative">
            <summary className="list-none cursor-pointer">
              <img
                className="w-14 h-14"
                src={user?.photoURL || USER_AVATAR}
                alt="User"
              />
            </summary>
            <div className="absolute right-0 mt-2 bg-white border rounded-lg shadow-lg  w-25 z-50">
              <button
                onClick={handleSignOut}
                className="w-full text-left px-4 py-2 hover:bg-gray-200 text-black"
              >
                Sign Out
              </button>
            </div>
          </details>
        </div>
      )}
    </div>
  );
};

export default Header;
