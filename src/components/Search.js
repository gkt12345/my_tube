import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { MdKeyboardVoice } from "react-icons/md";
import { YOUTUBE_AUTOCOMPLETEE_API } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { cacheResult } from "../utils/searchSlice";
import { Link } from "react-router-dom";

const Search = () => {
  const [searchQuerry, setSearchQuerry] = useState("");
  const [suggesations, setSuggesations] = useState([]);
  const [onBlourEf, setOnBlourEf] = useState(false);
  const dispatch = useDispatch();
  const showChache = useSelector((store) => store.search);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (showChache[searchQuerry]) setSuggesations(showChache[searchQuerry]);
      else getSearchSuggesation();
    }, 300);
    return () => clearTimeout(timer);
  }, [searchQuerry]);

  const getSearchSuggesation = async () => {
    const data = await fetch(YOUTUBE_AUTOCOMPLETEE_API + searchQuerry);
    const json = await data.json();
    setSuggesations(json[1]);
    dispatch(cacheResult({ [searchQuerry]: json[1] }));
  };

  return (
    <div className="w-1/2">
      <div className=" flex justify-center items-center">
        <input
          type="text"
          className="w-8/12 h-9 border rounded-l-full outline-none pl-5 focus:border-blue-700"
          placeholder="search..."
          value={searchQuerry}
          onChange={(e) => setSearchQuerry(e.target.value)}
          onFocus={() => setOnBlourEf(true)}
          onBlur={() => setTimeout(() => setOnBlourEf(false), 200)}
        />
        <div className="w-1/12 h-9 border rounded-r-full px-3 pt-2 cursor-pointer hover:bg-gray-100">
          <CiSearch className="text-xl" />
        </div>
        <div className="mx-5 p-2 text-xl rounded-full bg-gray-100 hover:bg-gray-200 cursor-pointer">
          <MdKeyboardVoice />
        </div>
      </div>
      {onBlourEf && suggesations.length > 0 && (
        <div className="w-[100%] px-11 pr-44">
          <ul className="bg-white py-3 border rounded-xl overflow-hidden">
            {suggesations.map((s) => (
              <li className=" px-3 py-1 hover:bg-gray-200" key={s}>
                <Link to={`/search/${encodeURIComponent(s)}`}>
                  <CiSearch className=" inline-block mr-2" />
                  <span>{s}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Search;
