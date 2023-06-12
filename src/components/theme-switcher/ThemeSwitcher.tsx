"use client";

import clsx from "clsx";
import type { HTMLAttributes } from "react";

import useTheme from "@/hooks/useTheme";

import styles from "./ThemeSwitcher.module.scss";

export type ThemeSwitcherProps = HTMLAttributes<HTMLDivElement>;
export default function ThemeSwitcher({ className }: ThemeSwitcherProps) {
  const [theme, updateTheme] = useTheme();

  const onChange = () => {
    if (theme === "dark") {
      updateTheme("light");
    } else {
      updateTheme("dark");
    }
  };

  return (
    <div className={clsx(styles.root, className)}>
      <label className={clsx(styles.theme__switch)} htmlFor="themeSwitch">
        <input
          checked={theme === "dark"}
          className={clsx(styles.theme__switcher__checkbox)}
          id="themeSwitch"
          name="themeSwitch"
          type="checkbox"
          onChange={onChange}
        />
        <span className={clsx(styles.theme__switch__slider)} />
      </label>

      <svg
        className={clsx(styles.theme__switch__icon__moon)}
        height="22"
        viewBox="0 0 22 22"
        width="22"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M1 10.449a10.544 10.544 0 0 0 19.993 4.686C11.544 15.135 6.858
             10.448 6.858 1A10.545 10.545 0 0 0 1 10.449Z"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
      </svg>
    </div>
  );
}
