import clsx from "clsx";
import type { HTMLAttributes } from "react";

import styles from "./Phonetic.module.scss";

export type PhoneticProps = HTMLAttributes<HTMLElement> & {
  audio: Phonetics["audio"];
  text: Phonetics["text"];
  word: Word;
};
export default function Phonetic({
  audio,
  className,
  text,
  word,
}: PhoneticProps) {
  console.log(audio);
  return (
    <section className={clsx(styles.root, className)}>
      <h1 className={clsx(styles.word)}>{word}</h1>
      <h2 className={clsx(styles.phonetic)}>{text}</h2>
      <svg
        className={clsx(styles.play)}
        height="75"
        viewBox="0 0 75 75"
        width="75"
        xmlns="http://www.w3.org/2000/svg">
        <g fill="currentColor" fillRule="evenodd">
          <circle cx="37.5" cy="37.5" opacity=".25" r="37.5" />
          <path d="M29 27v21l21-10.5z" fill="#A445ED" />
        </g>
      </svg>
    </section>
  );
}
