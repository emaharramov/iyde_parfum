import React, { useState } from "react";

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Left Side: Logo and Text */}
      <div className="w-full md:w-1/2 bg-black flex flex-col justify-center items-center text-white p-8">
        <img src="/iydi.png" alt="Logo" className="w-[40vw] md:w-[20vw] mb-4" />
        <p className="text-lg text-center">Fill in information to continue</p>
      </div>

      {/* Right Side: Login/Register Form */}
      <div className="w-full md:w-1/2 bg-white flex flex-col justify-center p-8 md:px-16">
        <div className="flex justify-center mb-6">
          <button
            className={`text-2xl font-bold mr-6 ${isLogin ? "text-black" : "text-gray-400"}`}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button className={`text-2xl font-bold ${!isLogin ? "text-black" : "text-gray-400"}`} onClick={() => setIsLogin(false)}>
            Register
          </button>
        </div>

        {/* Form */}
        <div>
          <input
            type="text"
            placeholder="Phone"
            className="w-full mb-4 p-4 border border-gray-200 rounded-md focus:outline-none focus:border-gray-400"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full mb-6 p-4 border border-gray-200 rounded-md focus:outline-none focus:border-gray-400"
          />

          <button className="w-full py-4 bg-black text-white text-lg font-bold rounded-full flex items-center justify-center">
            {isLogin ? "Login" : "Register"}
          </button>

          {isLogin && (
            <a href="#" className="block mt-4 text-center text-gray-500 hover:text-gray-800">
              Forgot password?
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
