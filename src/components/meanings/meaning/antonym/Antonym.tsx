"use client";

import clsx from "clsx";
import { useRouter } from "next/navigation";
import type { HTMLAttributes, MouseEvent } from "react";

import styles from "./Antonym.module.scss";

export type AntonymProps = HTMLAttributes<HTMLDivElement> & {
  antonyms: Definition["antonyms"];
};
export default function Antonym({ antonyms, className }: AntonymProps) {
  const router = useRouter();

  const onClick = async (event: MouseEvent<HTMLParagraphElement>) => {
    event.preventDefault();

    const _target = event.target as HTMLParagraphElement;

    router.push(`/${_target.textContent?.slice(0, -2)}`);
  };

  return (
    <div className={clsx(styles.root, className)}>
      <h1 className={clsx(styles.antonyms)}>Antonyms</h1>
      <div className={clsx(styles.container)}>
        {antonyms.map((item, key) => {
          return (
            <p
              className={clsx(styles.antonyms)}
              key={`antonyms-${key}`}
              onClick={onClick}>
              {item};&nbsp;
            </p>
          );
        })}
      </div>
    </div>
  );
}
