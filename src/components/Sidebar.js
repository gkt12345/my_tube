import React, { useEffect, useState } from "react";
import SidebarCard, { LinkSidebarCard } from "./SidebarCard";
import { categories } from "../utils/constants";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const [sidebarInfo, setSidebarInfo] = useState([]);
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  useEffect(() => {
    setSidebarInfo(categories);
  }, []);
  if (!isMenuOpen) return null;
  return (
    <div className="">
      {sidebarInfo.map((info) =>
        info.name === "Home" ? (
          <LinkSidebarCard info={info} key={info.name} />
        ) : (
          <SidebarCard info={info} key={info.name} />
        )
      )}
    </div>
  );
};

export default Sidebar;
