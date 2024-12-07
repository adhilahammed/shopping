import React from "react";
import { useNavigate } from "react-router";

const LoginAlert = () => {
  const navigate = useNavigate();
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20">
      <div className="flex w-full h-screen justify-center items-center">
        <div className="bg-white w-full mx-8 max-w-3xl shadow-lg p-4">
          <div
            className="min-h-[50vh] flex flex-col items-center justify-center"
            style={{
              border: "1px solid #ddd",
              borderRadius: "5px",
            }}
          >
            <h2 className="text-xl font-semibold mb-4">Please login</h2>
            <button
              className="bg-blue-800 text-white py-2 px-4 rounded hover:bg-blue-800 transition"
              onClick={() => {
                navigate("/login");
                // Handle button click, e.g., redirect to login page
              }}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginAlert;
