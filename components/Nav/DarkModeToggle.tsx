"use client";

import React, { useState } from "react";
import { HiSun, HiMoon } from "react-icons/hi";

const DarkModeToggle = () => {
  function processThemeChange() {
    const colorTheme = localStorage.getItem("color-theme");

    if (colorTheme) {
      if (colorTheme === "light") {
        document.documentElement.classList.add("dark");
        localStorage.setItem("color-theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("color-theme", "light");
      }
    } else {
      if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("color-theme", "light");
      } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("color-theme", "dark");
      }
    }
  }

  function switchTheme() {
    processThemeChange();
  }

  return (
    <button
      id="theme-toggle"
      onClick={switchTheme}
      type="button"
      className={`  bg-white flex flex-col justify-center items-center border border-black dark:border-white dark:bg-black dark:text-white p-2`}
    >
      <HiSun className={`w-6 h-6 dark:hidden `} />
      <HiMoon className={`w-6 h-6 hidden dark:block blur-none`} />
    </button>
  );
};

export default DarkModeToggle;
