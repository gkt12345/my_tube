import React from "react";

const WatchVideoPage = ({ searchParams }) => {
  return (
    <div className="">
      <iframe
        className="rounded-xl"
        width="750"
        height="400"
        src={"https://www.youtube.com/embed/" + searchParams.get("v")}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default WatchVideoPage;
