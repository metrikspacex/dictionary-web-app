"use client";

import clsx from "clsx";
import { useRouter } from "next/navigation";
import type { HTMLAttributes, MouseEvent } from "react";

import styles from "./Synonym.module.scss";

export type SynonymProps = HTMLAttributes<HTMLDivElement> & {
  synonyms: Definition["synonyms"];
};
export default function Synonym({ className, synonyms }: SynonymProps) {
  const router = useRouter();

  const onClick = async (event: MouseEvent<HTMLParagraphElement>) => {
    event.preventDefault();

    const _target = event.target as HTMLParagraphElement;

    router.push(`/${_target.textContent?.slice(0, -2)}`);
  };

  return (
    <div className={clsx(styles.root, className)}>
      <h1 className={clsx(styles.synonym)}>Synonyms</h1>
      <div className={clsx(styles.container)}>
        {synonyms.map((item, key) => {
          return (
            <p
              className={clsx(styles.synonym)}
              key={`synonyms-${key}`}
              onClick={onClick}>
              {item};&nbsp;
            </p>
          );
        })}
      </div>
    </div>
  );
}
