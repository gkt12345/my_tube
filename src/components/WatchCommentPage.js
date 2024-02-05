import React from "react";
import Comment from "./Comment";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";

const WatchCommentPage = ({ commentsData }) => {
  return (
    <div className="mt-5">
      <div className="font-bold text-2xl">Comments :</div>
      <div>
        {commentsData.map((cData) => (
          <React.Fragment key={cData.id}>
            <Comment commentsData={cData} />
            {cData?.replies?.comments?.length > 0 ? (
              <div className="pl-10">
                <div className="w-36 flex items-center text-blue-500 font-bold  px-2 py-1 hover:bg-blue-200 hover:rounded-full">
                  <IoMdArrowDropdown className=" mr-4 " />
                  <div className="text-xs">7 replies</div>
                </div>
                <div>
                  {/* {cData?.replies?.comments?.map((cReply) => (
                    <Comment commentsData={cReply} key={cReply.id} />
                  ))} */}
                </div>
              </div>
            ) : null}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default WatchCommentPage;
