"use client";

import React, { useState } from "react";
import { HiSun, HiMoon } from "react-icons/hi";

const DarkModeToggle = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(
    document.documentElement.classList.contains("dark")
  );

  function processThemeChange() {
    setIsDarkTheme((isDarkTheme) => !isDarkTheme);
    if (localStorage.getItem("color-theme")) {
      if (localStorage.getItem("color-theme") === "light") {
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
      className={`text-gray-900 border-gray-700 dark:text-gray-200 dark:border-gray-200 border-[3px] rounded-lg text-sm p-1 transition-all duration-500 flex justify-center items-center`}
    >
      <HiSun className={`w-5 h-5 dark:hidden`} />
      <HiMoon className={`w-5 h-5 hidden dark:block`} />
    </button>
  );
};

export default DarkModeToggle;
