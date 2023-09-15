import React from "react";

const Login = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center ">
      <header>
        <nav></nav>
      </header>

      <div className="px-32 py-32 bg-white rounded-md border border-gray-300  shadow-lg flex flex-col gap-3">
        <div>
          <h1 className="text-3xl text-center mb-5">Welcome back</h1>
        </div>

        {/* <---- Input Field Code ----> */}

        <div className="flex flex-col gap-3">
          <input
            type="text"
            name=""
            id=""
            placeholder="Enter your email"
            className="border py-3 text-center rounded-md"
          />

          <input
            type="text"
            name=""
            id=""
            placeholder="Enter your password"
            className="border py-3 text-center rounded-md"
          />
          <div className="px-8 py-4 rounded-[32px] flex items-center justify-center bg-gradient-to-r from-[#6F47EB] to-[#F68BFF] text-white">
            Login
          </div>
          <div className="flex flex-row items-center justify-center">
            <div className="border border-gray-200 w-32 m-0 p-0 h-0"></div>
            <p className="px-2">Or</p>
            <div className="border border-gray-200 w-32 m-0 p-0 h-0"></div>
          </div>
        </div>

        {/* <---- Input Field Code ----> */}

        {/* <---- Button Code ----> */}
        <div className="flex flex-col gap-3">
          <div className="px-8 py-4 rounded-[32px] flex gap-3 items-start justify-start bg-gradient-to-r from-[#6F47EB] to-[#F68BFF] text-white ">
            <i class="ri-mail-fill"></i>
            <h1>Sign Up</h1>
          </div>
          <div className="flex gap-3 items-start justify-start px-8 py-4 bg-gradient-to-r from-[#6F47EB] to-[#F68BFF] rounded-[32px] whitespace-nowrap  text-white ">
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
