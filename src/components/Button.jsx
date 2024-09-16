import React from "react";
import { IoIosReturnRight } from "react-icons/io";
import { motion } from "framer-motion";

const Button = ({ title = 'Get Started' }) => {
  return (
    <motion.div
      className="max-w-40 min-w-40 px-4 py-2 bg-zinc-100 rounded-full text-black flex items-center justify-between cursor-pointer"
      whileHover={{ scale: 1.1 }} // Shrink the entire button on hover
      whileTap={{ scale: 0.95 }} // Shrink the entire button on tap
      transition={{ duration: 0.15 }} // Smooth transition
    >
      <motion.div
        className="flex w-full justify-between items-center"
        whileHover={{ y: -7 }} // Move contents up on hover
        whileTap={{ y: 0 }} // Reset the position on tap
        transition={{ duration: 0.15 }} // Smooth transition
      >
        <span className="text-sm font-regular">{title}</span>
        <IoIosReturnRight />
      </motion.div>
    </motion.div>
  );
};

export default Button;
