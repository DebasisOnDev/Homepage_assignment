"use client";
import React, { useState } from "react";
import { BsCameraReelsFill } from "react-icons/bs";
import { HiMiniUser } from "react-icons/hi2";
import { GiHamburgerMenu } from "react-icons/gi";
import { motion } from "framer-motion";
import Slider from "./Slider";

const TopNav = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed z-10 top-0 w-full h-[50px] flex items-center justify-between bg-white border-b-[1px] border-opacity-30">
      <div className="text-[#4F42C7] px-[24.5px] shadow-sm border-r-[1.25px] border-opacity-30 flex items-center justify-center h-full">
        <BsCameraReelsFill size={30} />
      </div>
      <div className="flex items-center justify-between gap-4 px-4">
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="md:hidden flex p-1 bg-gray-100 rounded text-[#4F42C7]"
        >
          <GiHamburgerMenu size={22} />
        </button>
        <button className="px-3 py-[6px] flex items-center justify-center rounded text-[11px] bg-[#4F42C7] text-white font-semibold tracking-wide ">
          Create
        </button>
        <button className="p-1.5 bg-opacity-30 rounded bg-gray-400 text-gray-600 flex items-center justify-center ">
          <HiMiniUser />
        </button>
      </div>

      {/* Render the SidePanel component when open state is true */}
      {open && (
        <motion.div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50"
          onClick={() => setOpen(false)}
        >
          {/* Close the SidePanel when clicking outside */}
        </motion.div>
      )}

      {/* Render the SidePanel component */}
      <Slider isOpen={open} onClose={() => setOpen(false)} />
    </div>
  );
};

export default TopNav;
