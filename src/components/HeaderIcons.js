import React from "react";
import { RiVideoAddLine } from "react-icons/ri";
import { FaRegBell } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";

const HeaderIcons = () => {
  return (
    <div className="flex gap-5 text-xl">
      <div className="p-2 rounded-full hover:bg-gray-200 cursor-pointer">
        <RiVideoAddLine />
      </div>
      <div className="p-2 text-xl rounded-full  hover:bg-gray-200 cursor-pointer">
        <FaRegBell />
      </div>
      <div className="p-1 rounded-full text-2xl bg-gray-100 hover:bg-gray-200 cursor-pointer">
        <FaUserCircle />
      </div>
    </div>
  );
};

export default HeaderIcons;
