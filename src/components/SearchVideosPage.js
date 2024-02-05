import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import SearchVideoCard from "./SearchVideoCard";
import { GOOGLE_API_KEY } from "../utils/constants";

const SearchVideosPage = () => {
  const [videosData, setVideosData] = useState([]);
  const { text } = useParams();

  useEffect(() => {
    fetchSearchApi();
  }, []);

  const fetchSearchApi = async () => {
    const data = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${text}&key=${GOOGLE_API_KEY}`
    );
    const json = await data.json();
    setVideosData(json.items);
    console.log(json.items);
  };

  console.log(text);
  return (
    <div className="px-12">
      {videosData?.map((v) => (
        <Link
          to={{
            pathname: "/watch",
            search: `?v=${v?.id?.videoId}`,
          }}
          key={v?.id?.videoId}
        >
          <SearchVideoCard data={v} />
        </Link>
      ))}
    </div>
  );
};

export default SearchVideosPage;
