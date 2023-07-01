"use client";

import Spline from "@splinetool/react-spline";
import React from "react";

const Avatar = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="bg-[#9a7f49] dark:bg-emerald-500 w-52 h-52 rounded-full">
        <Spline scene="/spline/scene.splinecode" />
      </div>
    </div>
  );
};

export default Avatar;
