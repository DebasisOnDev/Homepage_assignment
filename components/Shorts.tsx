import React from "react";
import imgArray from "./img";
import Image from "next/image";
import { TbPlayerPlayFilled } from "react-icons/tb";
const Shorts = () => {
  return (
    <div className=" flex flex-wrap items-center md:justify-start justify-center gap-4 md:gap-3 mx-auto ">
      {imgArray.map((img, i) => (
        <div
          key={i}
          className=" flex items-center justify-center flex-col gap-1 "
        >
          <div className="  relative">
            <Image
              className=" rounded object-cover w-[140px] h-[200px] md:w-[180px] md:h-[300px]"
              src={img.imgLink}
              width={160}
              height={300}
              alt={img.desc}
            />
            <span className=" absolute md:top-[275px] md:left-2 top-[170px] left-2  text-slate-800 h-4 w-4 rounded flex items-center justify-center bg-gray-200 bg-opacity-40  ">
              <TbPlayerPlayFilled />
            </span>
          </div>

          <span className=" font-semibold text-sm">{img.title}</span>
          <span className=" text-[12px] text-opacity-80 text-gray-400">
            {img.desc}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Shorts;
