import clsx from "clsx";
import Image from "next/image";
import type { HTMLAttributes } from "react";

import FontSwitcher from "@/components/font-switcher/FontSwitcher";
import ThemeSwitcher from "@/components/theme-switcher/ThemeSwitcher";

import styles from "./Navbar.module.scss";

export type NavbarProps = HTMLAttributes<HTMLElement>;
export default function Navbar({ className }: NavbarProps) {
  return (
    <nav className={clsx(styles.root, className)}>
      <Image alt="Logo" height={32} src="/images/logo.svg" width={32} />

      <div className={clsx(styles.container)}>
        <FontSwitcher />
        <span className={clsx(styles.horizontal__divider)} />
        <ThemeSwitcher />
      </div>
    </nav>
  );
}
