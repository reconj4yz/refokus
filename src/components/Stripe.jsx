import React from "react";

const Stripe = ({ val }) => {
  return (
    <div className="w-[16.66%] px-[5vw] mt-[8vh] mb-10 py-8 border-t-[1.2px] border-b-[1.2px] border-r-[1.2px] border-zinc-600 flex justify-between items-center gap-5">
      <img src={val.url} alt="" />
      <span className="font-semibold">{val.number}</span>
    </div>
  );
};

export default Stripe;