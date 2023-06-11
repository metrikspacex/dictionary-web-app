import styles from "./Main.module.scss";

import { HTMLAttributes } from "react";

import clsx from "clsx";

export type MainProps = HTMLAttributes<HTMLElement>;
export default function Main({ className, children }: MainProps) {
  return <main className={clsx(styles.root, className)}>{children}</main>;
}
