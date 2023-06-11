import styles from "./Navbar.module.scss";

import Image from "next/image";

import { HTMLAttributes } from "react";

import clsx from "clsx";

import FontSwitcher from "@/components/font-switcher/FontSwitcher";
import ThemeSwitcher from "@/components/theme-switcher/ThemeSwitcher";

export type NavbarProps = HTMLAttributes<HTMLElement>;
export default function Navbar({ className }: NavbarProps) {
  return (
    <nav className={clsx(styles.root, className)}>
      <Image alt="Logo" height={32} src="/images/logo.svg" width={32} />

      <div className={clsx(styles.container)}>
        <FontSwitcher />
        <span className={clsx("horizontal-divider")} />
        <ThemeSwitcher />
      </div>
    </nav>
  );
}
