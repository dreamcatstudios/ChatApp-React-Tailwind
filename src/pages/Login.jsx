import React from "react";

const Login = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center bg-red-500">
      <header>
        <nav></nav>
      </header>

      <div className="px-32 py-32 bg-white rounded-sm border border-gray-300  shadow-lg flex flex-col gap-3">
        <div>
          <h1 className="text-3xl text-center">ChatApp-React</h1>
        </div>

        {/* <---- Input Field Code ----> */}

        <div className="flex flex-col gap-3">
          <input
            type="text"
            name=""
            id=""
            placeholder="Enter your email"
            className="border py-3 text-center rounded-sm"
          />

          <input
            type="text"
            name=""
            id=""
            placeholder="Enter your password"
            className="border py-3 text-center rounded-sm"
          />
        </div>

        {/* <---- Input Field Code ----> */}

        {/* <---- Button Code ----> */}
        <div className="flex flex-col gap-3">
          <div className="px-8 py-5 bg-green-200 rounded-sm flex items-center justify-center">
            Login 
          </div>
          <div className="px-16 py-5 bg-green-200 rounded-sm whitespace-nowrap flex gap-3 justify-center">
            <h1>Sign up with google</h1>
            <img
              src="https://www.cdnlogo.com/logos/g/35/google-icon.svg"
              alt=""
              className="w-6"
            />
          </div>
        </div>
        {/* <---- Button Code ----> */}
      </div>
    </div>
  );
};

export default Login;
