import { FaUserCircle } from "react-icons/fa";
import { useDurationParse } from "../utils/useDurationParse";
import { useRawConvert } from "../utils/useRawConvert";
import { timeSince } from "../utils/timeSince";

const VideoCart = ({ data }) => {
  const { contentDetails, snippet, statistics } = data;
  const { channelTitle, title, thumbnails, publishedAt } = snippet;
  const { commentCount, likeCount, viewCount } = statistics;
  const duration = useDurationParse(contentDetails?.duration);
  const viewCountConvert = useRawConvert(viewCount);
  const published = timeSince(publishedAt);

  return (
    <div className="w-[340px] h-[300px] rounded-lg overflow-hidden hover:bg-gray-200 cursor-pointer">
      <div className="relative">
        <img
          className="w-[340px] h-[200px] rounded-b-lg hover:rounded-none"
          alt="videoImg"
          src={thumbnails?.maxres?.url}
        />
        <div className="absolute right-1 top-44 bg-black text-white text-xs font-bold px-2 py-0.5 rounded-md">
          {duration}
        </div>
      </div>
      <div className="flex gap-2 my-1">
        <div className="p-1 rounded-full text-3xl cursor-pointer">
          <FaUserCircle />
        </div>
        <div className="my-1 ">
          <div className="font-bold text-[14px] line-clamp-2 h-12 ">
            {title}
          </div>
          <div className="text-sm text-gray-600">{channelTitle}</div>
          <div className="text-sm text-gray-600">
            {viewCountConvert} views <span className="font-extrabold">.</span>{" "}
            {published} ago
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCart;
