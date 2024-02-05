import React from "react";

const Shimer = () => {
  return (
    <div className="w-[340px] h-[300px] rounded-lg overflow-hidden bg-gray-50 cursor-pointer">
      <div className="w-[340px] h-[200px] bg-gray-300 rounded-b-lg hover:rounded-none"></div>
      <div className="flex gap-2 my-1 mt-2">
        <div className="rounded-full w-8 h-8 bg-slate-300"></div>
        <div className="h-8 w-[300px] bg-gray-300 rounded-lg"></div>
      </div>
      <div className="h-8 mt-3 w-[340px] bg-gray-300 rounded-lg"></div>
    </div>
  );
};

export default Shimer;
