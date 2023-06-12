import clsx from "clsx";
import type { HTMLAttributes } from "react";

import styles from "./Message.module.scss";

export type MessageProps = HTMLAttributes<HTMLDivElement> & {
  error: boolean;
  message: string;
  resolution: string;
  title: string;
};
export default function Message({
  className,
  error,
  message,
  resolution,
  title,
}: MessageProps) {
  return (
    <div className={clsx(styles.root, className)}>
      {error ? (
        <span className={clsx(styles.emoji)}>😕</span>
      ) : (
        <span className={clsx(styles.emoji)}>😀</span>
      )}
      <h1 className={clsx(styles.title)}>{title}</h1>
      <p className={clsx(styles.content)}>{`${message} ${resolution}`}</p>
    </div>
  );
}
