import { FaUserCircle } from "react-icons/fa";
import { timeSince } from "../utils/timeSince";

const WatchSideBarCard = ({ data }) => {
  const {
    channelTitle,
    description,
    publishTime,
    publishedAt,
    thumbnails,
    title,
  } = data?.snippet;
  const published = timeSince(publishedAt);
  return (
    <>
      <div className="flex gap-3 h-24 mb-2">
        <div className="relative ">
          <img
            className="w-40 h-24 rounded-lg hover:rounded-none"
            alt="videoImg"
            src={thumbnails?.high?.url}
          />
          <div className="absolute right-2 top-40 bg-black text-white text-xs font-bold px-2 py-0.5 rounded-md">
            10:20
          </div>
        </div>

        <div className="font-semibold  text-xs w-1/2">
          <div className="line-clamp-2 text-sm">{title}</div>

          <div className="my-1">{channelTitle}</div>

          <div>
            {Math.floor(Math.random() * 10) + 1}M Views . {published} ago
          </div>
        </div>
      </div>
    </>
  );
};

export default WatchSideBarCard;
