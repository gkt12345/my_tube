import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const buttonName = [
    "All",
    "Music",
    "React routers",
    "Computer programing",
    "Bollywood",
    "News",
    "Live",
    "Gaming",
    "Stock",
    "AI",
    "Javascriprt",
    "C++",
    "Crud",
    "Core",
  ];

  return (
    <div className="flex gap-2 mb-5">
      {buttonName.map((name) => (
        <Button key={name} name={name} />
      ))}
    </div>
  );
};

export default ButtonList;
