"use client";

import Image from "next/image";
// import Spline from "@splinetool/react-spline";
import React from "react";

const Avatar = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      {/* <div className="bg-[#9a7f49] dark:bg-white w-52 h-52 rounded-full"> */}
      <div className="w-80 rounded-full">
        {/* <Spline scene="/spline/scene.splinecode" /> */}
        <Image
          width="0"
          height="0"
          sizes="100vw"
          className="w-full h-full"
          src="/assets/images/wfh.gif"
          alt="avatar"
        />
      </div>
    </div>
  );
};

export default Avatar;
