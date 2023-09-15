import React, { useState } from "react";
import { useFirebase } from "../context/Firestore";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const firebase = useFirebase();
  return (
    <div className="h-screen w-full flex justify-center items-center bg-white">
      <header>
        <nav></nav>
      </header>

      <div className="px-32 py-32 bg-white rounded-md border border-gray-200  shadow-lg flex flex-col gap-3">
        <div>
          <h1 className="text-3xl text-center mb-3">Welcome back</h1>
        </div>

        {/* <---- Input Field Code ----> */}

        <div className="flex flex-col gap-3">
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="border py-3 text-center rounded-md"
          />

          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="border px-24 py-3 text-center rounded-md"
          />
          <div className="px-8 py-4 rounded-[32px] flex items-center justify-center bg-gradient-to-r from-[#6F47EB] to-[#F68BFF] text-white shadow-lg">
            Continue
          </div>
        </div>
        {/* <---- Input Field Code ----> */}

        {/* <---- OR ----> */}

        <div className="flex items-center justify-center m-0 p-0">
          <div className="flex gap-1">
            <p> Don't have an account? </p>{" "}
            <a href="#" className="text-[#6F47EB]">
              {" "}
              Sign Up
            </a>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center ">
          <div className="border border-gray-200 w-32 m-0 p-0 h-0"></div>
          <p className="px-2">Or</p>
          <div className="border border-gray-200 w-32 m-0 p-0 h-0"></div>
        </div>

        {/* <---- OR ----> */}

        {/* <---- Button Code ----> */}
        <div className="flex flex-col gap-3 ">
          <div
            onClick={() =>
              firebase.signUpUserWithEmailAndPassword(email, password)
            }
            className="px-8 py-4 rounded-[32px] flex  items-start justify-start bg-gradient-to-r from-[#6F47EB] to-[#F68BFF] text-white gap-3 shadow-lg"
          >
            <i class="ri-mail-fill"></i>
            <h1>Sign Up</h1>
          </div>
          <div
            onClick={() => firebase.googleLogin()}
            className="flex items-start justify-start px-8 py-4 bg-gradient-to-r from-[#6F47EB] to-[#F68BFF] rounded-[32px] whitespace-nowrap  text-white gap-3 shadow-lg"
          >
            <i class="ri-google-fill"></i>
            <h1>Continue with Google</h1>
          </div>
        </div>
        {/* <---- Button Code ----> */}
      </div>
    </div>
  );
};

export default Login;
