import React from "react";

const Button = ({ name }) => {
  return (
    <>
      <button
        className={`bg-gray-100 py-1 px-3 text-sm font-semibold rounded-lg ${
          name === "All" ? "bg-gray-950 text-white" : "hover:bg-gray-200"
        }`}
      >
        {name}
      </button>
    </>
  );
};

export default Button;
