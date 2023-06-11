import styles from "./message.module.scss";

import { HTMLAttributes } from "react";

import clsx from "clsx";

export type MessageProps = {
  error: boolean;
  message: string;
  resolution: string;
  title: string;
} & HTMLAttributes<HTMLDivElement>;
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
        <span className={clsx(styles.emoji)}>:(</span>
      ) : (
        <span className={clsx(styles.emoji)}>:)</span>
      )}
      <h1 className={clsx(styles.title)}>{title}</h1>
      <p className={clsx(styles.message)}>{`${message} ${resolution}`}</p>
    </div>
  );
}
