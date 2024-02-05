import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeSideBar } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import WatchVideoPage from "./WatchVideoPage";
import WatchCommentPage from "./WatchCommentPage";
import WatchSideBar from "./WatchSideBar";
import { COMMENTS_API } from "../utils/constants";

const WatchPage = () => {
  const [commentsData, setCommentsData] = useState([]);
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  useEffect(() => {
    dispatch(closeSideBar());
    fetchCommentApi();
  }, []);

  const fetchCommentApi = async () => {
    const data = await fetch(COMMENTS_API + searchParams.get("v"));
    const json = await data.json();
    setCommentsData(json.items);
    console.log(json.items);
  };

  return (
    <div className="px-20 pt-5 flex">
      <div className="flex flex-col w-8/12">
        <WatchVideoPage searchParams={searchParams} />
        {commentsData.length > 0 ? (
          <WatchCommentPage commentsData={commentsData} />
        ) : null}
      </div>
      <div>
        <WatchSideBar searchParams={searchParams.get("v")} />
      </div>
    </div>
  );
};

export default WatchPage;
