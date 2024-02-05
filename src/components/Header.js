import React, { useEffect } from "react";
import Search from "./Search";
import AppLogo from "./AppLogo";
import HeaderIcons from "./HeaderIcons";
import { GOOGLE_API_KEY } from "../utils/constants";

const Header = () => {
  // const fetchApiOfSearch = async () => {
  //   const data = await fetch(
  //     "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=iphone&key=AIzaSyDYMmAB8LUOYNglVXGCFkn2O9G9mUIgXvA"
  //   );
  //   const json = await data.json();
  //   console.log(json);
  // };
  // useEffect(() => {
  //   fetchApiOfSearch();
  // }, []);
  return (
    <div className="bg-white h-14 flex justify-between py-3 px-5 sticky top-0 transition-all duration-300 z-[1000] ">
      <AppLogo />
      <Search />
      <HeaderIcons />
    </div>
  );
};

export default Header;
