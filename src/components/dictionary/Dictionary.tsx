import clsx from "clsx";
import { notFound } from "next/navigation";
import type { HTMLAttributes } from "react";

import Meanings from "@/components/meanings/Meanings";
import Phonetics from "@/components/phonetics/Phonetics";
import SourceLink from "@/components/source-link/SourceLink";

import styles from "./dictionary.module.scss";

// Fetch
async function getWord(word: string) {
  const response = await fetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${word.toLowerCase()}`
  );

  if (!response.ok) {
    notFound();
  }

  return response.json();
}

export type DictionaryProps = HTMLAttributes<HTMLDivElement> & { word: string };
export default async function Dictionary({ className, word }: DictionaryProps) {
  const dictionary: Dictionary = await getWord(word);

  return (
    <>
      {dictionary.map((item, key) => {
        return (
          <div
            className={clsx(styles.root, className)}
            key={`dictionary-${key}`}>
            <Phonetics phonetics={item.phonetics} word={item.word} />
            <Meanings meanings={item.meanings} />
            <span className={clsx(styles.divider)} />
            <SourceLink sourceUrls={item.sourceUrls} />
          </div>
        );
      })}
    </>
  );
}
