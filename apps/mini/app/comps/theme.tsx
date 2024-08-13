"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { MdOutlineLightMode, MdNightlight } from "react-icons/md";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <>
      {theme === "light" ? (
        <MdNightlight
          className="h-[1.5rem] w-[1.3rem text-card-foreground"
          onClick={() => setTheme("dark")}
        />
      ) : (
        <MdOutlineLightMode
          className="h-[1.5rem] w-[1.3rem text-card-foreground"
          onClick={() => setTheme("light")}
        />
      )}
    </>
  );
}
