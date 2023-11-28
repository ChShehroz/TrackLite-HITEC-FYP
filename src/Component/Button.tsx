import React from "react";

interface ButtonProps {
  text: string;
  onClick: () => void;
  size?: "small" | "large" | "smlong";
}

const Button: React.FC<ButtonProps> = ({ text, onClick, size = "default" }) => {
  const baseStyle =
    "text-white font-bold rounded focus:outline-none focus:shadow-outline";
  let sizeClass = "";

  switch (size) {
    case "small":
      sizeClass = "py-2 px-8 text-sm ";
      break;
    case "smlong":
      sizeClass = "py-2 px-20 text-sm ";
      break;
    case "large":
      sizeClass = "py-3 px-12 text-md";
      break;
    default:
      sizeClass = "py-2 px-6 text-md";
  }

  return (
    <button
      onClick={onClick}
      className={`${baseStyle} ${sizeClass} rounded-full font-normal border border-solid hover:border hover:border-solid hover:border-gray-500  bg-black  `}
    >
      {text}
    </button>
  );
};

export default Button;
