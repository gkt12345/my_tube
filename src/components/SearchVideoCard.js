import { FaUserCircle } from "react-icons/fa";
import { timeSince } from "../utils/timeSince";

const SearchVideoCard = ({ data }) => {
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
      <div className="flex gap-5 h-48 mb-5">
        <div className="relative">
          <img
            className="min-w-[340px] h-48 rounded-lg hover:rounded-none"
            alt="videoImg"
            src={thumbnails?.high?.url}
          />
          <div className="absolute right-2 top-40 bg-black text-white text-xs font-bold px-2 py-0.5 rounded-md">
            10:20
          </div>
        </div>

        <div className="font-semibold text-gray-600 text-xs">
          <div>
            <div className="text-xl">{title}</div>
            <div className="">{published} ago</div>
          </div>
          <div className="flex items-center text-sm my-3">
            <div className="mr-1 rounded-full cursor-pointer text-xl">
              <FaUserCircle />
            </div>
            <div>{channelTitle}</div>
          </div>
          <div>
            <div>{description}</div>
            <div>4k</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchVideoCard;
