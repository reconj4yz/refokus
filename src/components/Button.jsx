import React from 'react'
import { IoIosReturnRight } from "react-icons/io";

const Button = () => {
  return (
    <div className='min-w-40 px-4 py-2 bg-zinc-100 rounded-full text-black flex items-center justify-between'>
        <span className='text-sm font-regular'>Get Started</span>
        <IoIosReturnRight />
    </div>
  )
}

export default Button