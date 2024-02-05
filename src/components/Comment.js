import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { timeSince } from "../utils/timeSince";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";

const Comment = ({ commentsData }) => {
  const { snippet } = commentsData?.snippet?.topLevelComment;

  const {
    authorChannelUrl,
    authorDisplayName,
    authorProfileImageUrl,
    likeCount,
    publishedAt,
    textDisplay,
    textOriginal,
  } = snippet;

  const publishedAtSince = timeSince(publishedAt);

  return (
    <div>
      <div className="flex gap-2 mt-1">
        <div className="pt-1.5 rounded-full  cursor-pointer">
          <img
            className="rounded-full h-9"
            alt={<FaUserCircle className="text-xl" />}
            src={
              authorProfileImageUrl ? authorProfileImageUrl : authorChannelUrl
            }
          />
        </div>
        <div className="m-1 text-sm ">
          <div className="font-semibold ">
            {authorDisplayName}
            <span className="text-xs ml-2 text-gray-600">
              {publishedAtSince} ago
            </span>
          </div>
          <div className=" text-gray-600">
            {textDisplay ? textDisplay : textOriginal}
          </div>
          <div className="flex gap-0.5 font-extralight">
            <div className="p-2 hover:bg-gray-300 hover:rounded-full">
              <AiOutlineLike className="text-xl cursor-pointer" />
            </div>
            <div className="py-2">{likeCount}</div>
            <div className="mx-2 p-2 hover:bg-gray-300 hover:rounded-full">
              <AiOutlineDislike className="text-xl cursor-pointer" />
            </div>
            <div className="px-3 pt-2 text-xs font-bold cursor-pointer hover:bg-gray-300 hover:rounded-full">
              Reply
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
