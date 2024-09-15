import React from "react";
import { IoIosReturnRight } from "react-icons/io";

const Button = ({title = 'Get Started'}) => {
  return (
    <div className="max-w-40 min-w-40 px-4 py-2 bg-zinc-100 rounded-full text-black flex items-center justify-between">
      <span className="text-sm font-regular">{title}</span>
      <IoIosReturnRight />
    </div>
  );
};

export default Button;
