import clsx from "clsx";
import type { HTMLAttributes } from "react";

import Navbar from "@/components/header/navbar/Navbar";
import Searchbar from "@/components/header/searchbar/Searchbar";

import styles from "./Header.module.scss";

export type HeaderProps = HTMLAttributes<HTMLElement>;
export default function Header({ className }: HeaderProps) {
  return (
    <header className={clsx(styles.root, className)}>
      <Navbar />
      <Searchbar />
    </header>
  );
}
