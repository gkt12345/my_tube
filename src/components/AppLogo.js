import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import appLogo from "../images/youtube_Logo.jpg";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { Link } from "react-router-dom";
const AppLogo = () => {
  const dispatch = useDispatch();
  return (
    <div className="flex ">
      <div className="hover:bg-gray-200 hover:rounded-full p-1 cursor-pointer">
        <RxHamburgerMenu
          onClick={() => dispatch(toggleMenu())}
          className="text-2xl "
        />
      </div>
      <div className="mx-3 cursor-pointer">
        <Link to="/">
          <img width="100" alt="appLogo" src={appLogo} />
        </Link>
      </div>
    </div>
  );
};

export default AppLogo;
