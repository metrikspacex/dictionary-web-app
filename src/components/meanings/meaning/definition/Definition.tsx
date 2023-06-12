import clsx from "clsx";
import type { HTMLAttributes } from "react";

import styles from "./Definition.module.scss";

export type DefinitionsProps = HTMLAttributes<HTMLLIElement> & {
  definition: Definition["definition"];
};
export default function Definition({
  className,
  definition,
}: DefinitionsProps) {
  return <li className={clsx(styles.root, className)}>{definition}</li>;
}
