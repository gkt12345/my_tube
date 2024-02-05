import { Link } from "react-router-dom";

const SidebarCard = ({ info }) => {
  const { name, icon, divider } = info;
  return (
    <div>
      <div
        className={`w-44 flex items-center gap-5 hover:bg-gray-200 px-3 py-1.5 rounded-lg cursor-pointer ${
          name === "Home" ? "bg-gray-200" : ""
        }`}
      >
        <div className="text-xl">{icon}</div>
        <div className="text-sm">{name}</div>
      </div>
      {divider && <div className="my-4 border"></div>}
    </div>
  );
};

// higher Order Component
export const LinkSidebarCard = ({ info }) => {
  return (
    <Link to="/">
      <SidebarCard info={info} />
    </Link>
  );
};

export default SidebarCard;
