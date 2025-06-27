import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidate } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_URL, USER_AVATAR } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState();
  const dispatch = useDispatch();

  const nameBox = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const message = checkValidate(
      email.current.value,
      password.current.value
      // nameBox.current.value
    );
    setErrorMessage(message);

    if (message) return;

    if (!isSignInForm) {
      // sign up
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: nameBox.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              // Profile updated!
              // ...
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              // ...
              setErrorMessage(error.message);
            });
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
          // ..
        });
    } else {
      // sign in
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    }
    setErrorMessage(message);
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <img className="absolute" src={BG_URL} alt="backgroudImage" />
      <div>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-3/12 p-10 absolute bg-black text-white my-40 mx-auto right-0 left-0 rounded-2xl opacity-90"
        >
          <h1 className="font-bold text-3xl py-4" onClick={handleButtonClick}>
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>

          {!isSignInForm && (
            <input
              ref={nameBox}
              type="text"
              placeholder="Full Name"
              className="my-4 p-2 w-full  bg-gray-600 rounded-lg"
            />
          )}

          <input
            ref={email}
            type="text"
            placeholder="Email Address"
            className="my-4 p-2 w-full  bg-gray-600 rounded-lg"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className=" my-4 p-2 w-full bold bg-gray-600  rounded-lg"
          />
          <p className="text-red-700 font-bold text-lg">{errorMessage}</p>
          <button
            className="bg-red-700 my-6 w-full p-2 rounded-lg cursor-pointer"
            onClick={handleButtonClick}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>

          <p className="cursor-pointer text-sm" onClick={toggleSignInForm}>
            {isSignInForm
              ? "New to Showciety? Sign Up Now"
              : "Already have an account? Sign In"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
