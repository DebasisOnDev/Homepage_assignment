import React from "react";
import { RiExternalLinkFill } from "react-icons/ri";
import { RxCardStack } from "react-icons/rx";
import { RiCheckboxBlankFill } from "react-icons/ri";
import { Input } from "./ui/input";

const Cards = () => {
  return (
    <div className=" w-full  lg:w-[87%] items-center justify-center mb-3 mt-2   flex  gap-6">
      <div className=" flex flex-col md:flex-row w-full items-start  md:gap-[22px] gap-3  md:justify-between  justify-between">
        <div className="  px-1 md:px-24 lg:px-4 py-2  md:w-1/3 h-full  gap-1 md:gap-3   flex flex-col justify-between">
          <h2 className=" font-[600] text-slate-950  text-base">
            Quick create
          </h2>
          <div className="  bg-white    border-[2px] border-slate-600 border-opacity-10 rounded-[6px]   py-2   w-[370px] md:w-[200px] lg:w-[370px]  h-auto flex flex-col items-start justify-between gap-4 ">
            <div className=" px-4  flex flex-col gap-3 w-full items-start justify-start py-1 ">
              <h3 className=" md:hidden visible lg:flex  font-semibold text-slate-700 text-opacity-85 text-sm">
                Generate video from any URL (Eg. Amazon)
              </h3>
              <Input
                type="text"
                placeholder="https://www.amazon.com"
                className=" flex items-center focus:border-none outline-none justify-center h-8 border-[1.4px]    placeholder:text-[14px]  placeholder:items-start   placeholder:px-3 placeholder:py- placeholder:text-slate-700 placeholder:text-opacity-50 rounded-md focus:outline-none  border-opacity-30  border-gray-500 w-full"
              />
            </div>
            <span className="  border-dashed  border-[1.3px] border-opacity-35 divide-dotted  w-full" />

            <div className=" px-4  flex flex-col gap-1 w-full items-start justify-start py-1 ">
              <span className=" font-semibold text-slate-700 text-opacity-80 text-sm pl-2">
                Or
              </span>
              <div className=" flex items-center justify-center w-full gap-2">
                <button className=" text-[12px] font-semibold text-violet-700 px-5 border-[1px] border-violet-500 border-opacity-40 py-1 bg-violet-300 bg-opacity-30 rounded-md flex items-center justify-center">
                  Create from scratch
                </button>
                <button className=" text-[12px] font-semibold text-violet-700 px-5 border-[1px] border-violet-500 border-opacity-40 py-1 bg-violet-300 bg-opacity-30 rounded-md flex items-center justify-center">
                  Create from templates
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="   md:px-11 lg:px-4 px-1 py-2 w-1/3 h-full relative  gap-1 md:gap-3   flex flex-col justify-between">
          <div className=" relative w-full items-center justify-center">
            <div className=" flex gap-2  float-left  items-center justify-center font-[600] text-lg">
              <span className=" text-base w-full">Your gallery</span>
              <span className=" flex items-center justify-center">
                <RiExternalLinkFill size={15} />
              </span>
            </div>
          </div>
          <div className="  bg-white    border-[2px] border-slate-600 border-opacity-10 rounded-[6px]   py-2  w-[370px] md:w-[200px] lg:w-[370px] h-auto flex flex-col items-start justify-between gap-4 ">
            <div className=" flex items-center justify-center  flex-col mx-auto p-5">
              <div className=" text-slate-600 text-opacity-40">
                <RxCardStack size={81} />
              </div>
              <div className=" font-semibold text-sm  text-slate-600 text-opacity-40 flex flex-col gap-[3px]">
                <span>No videos yet,</span>
                <span>create one today</span>
              </div>
            </div>
          </div>
        </div>
        <div className="   md:px-4 px-1 py-2 w-1/3 h-full relative gap-1  md:gap-3   flex flex-col justify-between">
          <div className=" w-full items-center justify-center">
            <div className=" flex gap-2  float-left  items-center justify-center font-[600] text-lg">
              <span className=" text-base">Usage</span>
              <span className=" flex items-center justify-center">
                <RiExternalLinkFill size={15} />
              </span>
            </div>
          </div>
          <div className="  bg-white    border-[2px] border-slate-600 border-opacity-10 rounded-[6px]   py-2  w-[370px] md:w-[200px] lg:w-[370px] h-auto flex flex-col items-start justify-between gap-1 md:gap-4 ">
            <div className=" flex items-center justify-center  flex-col mx-auto px-2 md:px-5">
              <div className="  rounded-full bg-sky-500  w-32 h-32 flex items-center justify-center">
                <div className=" flex items-center justify-center flex-col h-[85px] w-[85px] rounded-full bg-white ">
                  <span className=" font-semibold text-sm text-gray-400">
                    Total
                  </span>
                  <span className=" text-lg text-slate-800 text-opacity-70  font-semibold">
                    2,000
                  </span>
                </div>
              </div>
              <div className=" text-sm py-2   text-opacity-40 flex flex-col gap-[3px]">
                <div className=" flex items-center justify-center gap-1">
                  <span className=" text-sky-500 ">
                    <RiCheckboxBlankFill size={18} />
                  </span>
                  <span className=" text-[12px] text-slate-700">
                    Credits left:
                  </span>
                  <span className=" font-semibold text-slate-800 text-opacity-70">
                    100%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
