"use client";

import clsx from "clsx";
import { createRef } from "react";

import styles from "./Phonetic.module.scss";

export type PhoneticProps = {
  audio: Phonetics["audio"];
  text: Phonetics["text"];
  word: Word;
};
export default function Phonetic({ audio, text, word }: PhoneticProps) {
  const audioRef = createRef<HTMLAudioElement>();

  return (
    <>
      <h1 className={clsx(styles.word)}>{word}</h1>
      <h2 className={clsx(styles.phonetic)}>{text}</h2>
      {audio ? (
        <>
          <audio
            controls
            hidden
            className={clsx(styles.play)}
            ref={audioRef}
            src={audio}
          />
          <svg
            className={clsx(styles.play)}
            height="75"
            viewBox="0 0 75 75"
            width="75"
            xmlns="http://www.w3.org/2000/svg"
            onClick={async () => audioRef.current?.play()}>
            <g fill="currentColor" fillRule="evenodd">
              <circle cx="37.5" cy="37.5" opacity=".25" r="37.5" />
              <path d="M29 27v21l21-10.5z" fill="#A445ED" />
            </g>
          </svg>
        </>
      ) : null}
    </>
  );
}
