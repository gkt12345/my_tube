import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="flex gap-5 px-5">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Body;
