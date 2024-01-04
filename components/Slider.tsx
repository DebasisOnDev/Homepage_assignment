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

const Slider = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const variants = {
    open: { x: 0 },
    closed: { x: "-100%" },
  };
  const pathname = usePathname();
  return (
    <motion.div
      className="fixed top-0 left-0 h-full flex flex-col  w-[20%] bg-white shadow-lg"
      initial={false}
      animate={isOpen ? "open" : "closed"}
      variants={variants}
    >
      <div className=" px-6 py-3 flex items-center justify-center flex-col gap-5">
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
      </div>
    </motion.div>
  );
};

export default Slider;
