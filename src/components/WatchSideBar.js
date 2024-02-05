import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import WatchSideBarCard from "./WatchSideBarCard";
import { GOOGLE_API_KEY } from "../utils/constants";

const WatchSideBar = ({ searchParams }) => {
  const [videosData, setVideosData] = useState([]);

  useEffect(() => {
    fetchSearchApi();
  }, []);

  const fetchSearchApi = async () => {
    const data = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchParams}&key=${GOOGLE_API_KEY}`
    );
    const json = await data.json();
    setVideosData(json.items);
    console.log(json.items);
  };

  return (
    <div className="ml-5">
      {videosData?.map((v) => (
        <Link
          to={{
            pathname: "/watch",
            search: `?v=${v?.id?.videoId}`,
          }}
          key={v?.id?.videoId}
        >
          <WatchSideBarCard data={v} />
        </Link>
      ))}
    </div>
  );
};

export default WatchSideBar;
