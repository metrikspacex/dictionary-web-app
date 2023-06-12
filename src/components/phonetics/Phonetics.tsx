import clsx from "clsx";
import type { HTMLAttributes } from "react";

import Phonetic from "@/components/phonetics/phonetic/Phonetic";

import styles from "./Phonetics.module.scss";

export type PhoneticsProps = HTMLAttributes<HTMLElement> & {
  phonetics: Phonetics[];
  word: Word;
};
export default function Phonetics({
  className,
  phonetics,
  word,
}: PhoneticsProps) {
  const _phoneticsAudio = phonetics.find((item) => item.audio !== "");
  const _phoneticsText = phonetics.find((item) => item.text !== "");

  return (
    <section className={clsx(styles.root, className)}>
      <Phonetic
        audio={_phoneticsAudio ? _phoneticsAudio.audio : ""}
        text={_phoneticsText ? _phoneticsText.text : ""}
        word={word}
      />
    </section>
  );
}
