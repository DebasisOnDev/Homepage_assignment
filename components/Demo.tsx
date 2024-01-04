import React, { useState } from "react";
import {
  RiExternalLinkFill,
  RiSearchLine,
  RiArrowDropDownLine,
} from "react-icons/ri";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Shorts from "./Shorts";

const Demo = () => {
  return (
    <div className=" md:ml-20 ml-1 flex-col md:w-[90%] w-full items-center z-0 relative justify-center mb-8      flex gap-2  md:gap-6">
      <div className="flex    w-full">
        <div className=" flex  items-center justify-center gap-1 ">
          <span className=" font-semibold text-base">Template</span>
          <span>
            <RiExternalLinkFill />
          </span>
        </div>
      </div>
      <div className=" flex w-full bg-white items-start gap-[22px] border-[1px] rounded  border-gray-400 shadow-sm border-opacity-35  justify-between pr-10">
        <div className="   px-4 py-2 w-full h-full  gap-3   flex flex-col  justify-between">
          <div className="flex w-full items-center justify-between py-3">
            <div className=" cursor-pointer px-3 py-1 gap-2 flex md:w-1/4 w-full shadow-sm border-[1.5px] border-opacity-25 border-gray-400 rounded-md items-center justify-between  ">
              <Input
                className="  outline-none placeholder:text-slate-500 placeholder:text-opacity-75 border-none h-5 "
                placeholder="Search here"
                type="text"
              />
              <span className=" text-gray-500">
                <RiSearchLine size={17} />
              </span>
            </div>
            <div className=" md:flex hidden  gap-4">
              <div>
                <DropdownMenu>
                  <DropdownMenuTrigger className=" border-[2px] rounded-md border-opacity-25  w-[140px] px-1  border-gray-400 outline-none  items-center justify-between flex gap-1">
                    <span className=" text-sm text-slate-500 font-[400] text-opacity-80">
                      All use cases
                    </span>
                    <span className="  text-slate-500 font-[400]">
                      <RiArrowDropDownLine size={25} />
                    </span>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Billing</DropdownMenuItem>
                    <DropdownMenuItem>Team</DropdownMenuItem>
                    <DropdownMenuItem>Subscription</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <div>
                <DropdownMenu>
                  <DropdownMenuTrigger className=" border-[2px] rounded-md border-opacity-25 w-[140px] px-1  border-gray-400 outline-none  items-center justify-between flex gap-1">
                    <span className="  text-sm text-slate-500 font-[400] text-opacity-80 ">
                      Portrait
                    </span>

                    <span className="  text-slate-500 font-[400]">
                      <RiArrowDropDownLine size={25} />
                    </span>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Billing</DropdownMenuItem>
                    <DropdownMenuItem>Team</DropdownMenuItem>
                    <DropdownMenuItem>Subscription</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
          <div>
            <Shorts />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo;
