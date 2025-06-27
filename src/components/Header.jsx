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
    <div className="z-10 px-5 py-2 w-screen flex absolute justify-between bg-gradient-to-br from-gray-400">
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
            className="font-bold rounded-2xl px-5 mt-3 mb-2 mr-7 bg-fuchsia-700 cursor-pointer"
          >
            {showGptSearch ? "Home Page" : "GPT Search"}
          </button>
          <img className="w-15" src={user?.photoURL || USER_AVATAR} />
          <button onClick={handleSignOut} className="cursor-pointer">
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
