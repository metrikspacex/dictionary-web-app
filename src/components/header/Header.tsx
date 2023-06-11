import styles from "./Header.module.scss";

import { HTMLAttributes } from "react";

import clsx from "clsx";

import Navbar from "@/components/header/navbar/Navbar";
import Searchbar from "@/components/header/searchbar/Searchbar";

export type HeaderProps = HTMLAttributes<HTMLElement>;
export default function Header({ className }: HeaderProps) {
  return (
    <header className={clsx(styles.root, className)}>
      <Navbar />
      <Searchbar />
    </header>
  );
}
