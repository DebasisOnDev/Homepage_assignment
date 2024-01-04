import React from "react";
import { RiExternalLinkFill } from "react-icons/ri";
const Template = () => {
  return (
    <div className=" w-full mx-auto   bg-[#F1F5F9]  h-full flex flex-col items-center justify-center">
      <div className=" w-[1100px]  mx-auto flex  items-center justify-center flex-col ">
        <div className=" pl-8 w-full items-center justify-center">
          <div className=" flex gap-2  float-left items-center justify-center font-[600] text-lg">
            <span className=" text-base">Your gallery</span>
            <span className=" flex items-center justify-center">
              <RiExternalLinkFill size={15} />
            </span>
          </div>
        </div>
        <div className=" bg-white flex flex-col  mx-auto w-full pt-3">
          <div className=" gap-4 w-full flex items-center justify-between">
            <div className=" bg-violet-200">aa</div>
            <div className=" bg-violet-200">aa</div>
          </div>
          <div className=" w-full bg-red-200">bb</div>
        </div>
      </div>
    </div>
  );
};

export default Template;
