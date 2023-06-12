import clsx from "clsx";
import type { HTMLAttributes } from "react";

import styles from "./Main.module.scss";

export type MainProps = HTMLAttributes<HTMLElement>;
export default function Main({ className, children }: MainProps) {
  return <main className={clsx(styles.root, className)}>{children}</main>;
}
