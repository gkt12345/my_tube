import React, { useEffect, useState } from "react";
import VideoCart from "./VideoCart";
import { YOUTUBE_API } from "../utils/constants";
import Shimer from "./Shimer";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videoData, setVideoData] = useState([]);
  useEffect(() => {
    fetchDataFromApi();
  }, []);

  const fetchDataFromApi = async () => {
    const data = await fetch(YOUTUBE_API);
    const json = await data.json();
    // console.log(json);
    setVideoData(json.items);
  };
  const dummyArry = Array.from({ length: 20 }, (_, index) => index + 1);
  return (
    <div className="flex justify-center flex-wrap gap-5">
      {videoData.length < 1
        ? dummyArry.map((val, indx) => <Shimer key={indx} />)
        : videoData.map((item) => (
            <Link to={`watch?v=${item.id}`} key={item.id}>
              <VideoCart data={item} />
            </Link>
          ))}
    </div>
  );
};

export default VideoContainer;
