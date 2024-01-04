"use client";
import React from "react";
import { MdHome, MdGridView } from "react-icons/md";
import { SlGrid } from "react-icons/sl";
import { BiSolidMovie } from "react-icons/bi";
import { IoIosStats } from "react-icons/io";
import amazon from "@/assets/amazon.svg";
import { BsAmazon } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

const SideNav = () => {
  const pathname = usePathname();
  return (
    <AnimatePresence>
      <div
        className=" fixed hidden md:flex items-start   w-[80px] h-screen 
        bg-white border-r-[1px] border-opacity-30  border-gray-400"
      >
        <motion.div className="flex pt-6 flex-col items-center gap-4 justify-center  h-auto w-full">
          <Link
            className={
              pathname == "/"
                ? "text-violet-600 rounded  bg-opacity-25  p-1.5 bg-violet-300 duration-500 transition-all  "
                : " text-gray-500 bg-opacity-25  p-1.5 "
            }
            href="/"
          >
            <MdHome className="text-xl" />
          </Link>
          <Link
            className={
              pathname == "/amazon"
                ? "text-violet-600 rounded  bg-opacity-25 p-1.5 bg-violet-300 duration-500 transition-all "
                : "text-gray-500 bg-opacity-25  p-1.5"
            }
            href="/amazon"
          >
            <BsAmazon className="text-[20px]" />
          </Link>
          <Link
            className={
              pathname == "/movie"
                ? "text-violet-600 rounded  bg-opacity-25  p-1.5 bg-violet-300 duration-500 transition-all  "
                : "text-gray-500 bg-opacity-25  p-1.5"
            }
            href="/movie"
          >
            <BiSolidMovie className="text-[20px] font-semibold" />
          </Link>
          <Link
            className={
              pathname == "/collection"
                ? "text-violet-600 rounded  bg-opacity-25  p-1.5 bg-violet-300 duration-500 transition-all  "
                : "text-gray-500 bg-opacity-25  p-1.5"
            }
            href="/collection"
          >
            <SlGrid className="text-[]18px" />
          </Link>
          <Link
            className={
              pathname == "/stats"
                ? "text-violet-600 rounded  bg-opacity-25  p-1.5 bg-violet-300 duration-500 transition-all  "
                : "text-gray-500 bg-opacity-25    p-1.5"
            }
            href="/stats"
          >
            <IoIosStats className="text-xl" />
          </Link>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default SideNav;
