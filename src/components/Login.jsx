import React from "react";
import Header from "./Header";

const Login = () => {
  return (
    <div>
      <Header />
      <img
        className="absolute"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/af2fac72-d956-4952-8686-4d45d359d78c/web/IN-en-20250526-TRIFECTA-perspective_5db3e163-56f7-47c7-9a65-b79b9d76bf24_large.jpg"
        alt="backgroudImage"
      />
      <div>
        <form className="w-3/12 p-12 relative bg-[#DDE5B6] my-40 mx-auto rounded-2xl ">
          <input
            type="text"
            placeholder="Email Address"
            className="my-2 p-2 w-full border-2  border-[#A98467] rounded-lg"
          />
          <input
            type="password"
            placeholder="Password"
            className=" my-2 p-2 w-full border-2 bold border-[#A98467] rounded-lg"
          />
          <button className="bg-[#A98467] my-2 w-full p-2 rounded-lg">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
