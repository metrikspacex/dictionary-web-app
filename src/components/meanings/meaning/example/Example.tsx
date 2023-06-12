import clsx from "clsx";
import type { HTMLAttributes } from "react";

import styles from "./Example.module.scss";

export type ExampleProps = HTMLAttributes<HTMLParagraphElement> & {
  example: Definition["example"];
};
export default function Example({ className, example }: ExampleProps) {
  return <p className={clsx(styles.root, className)}>{example}</p>;
}
