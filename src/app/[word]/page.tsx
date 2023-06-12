import clsx from "clsx";
import { notFound } from "next/navigation";

import Meanings from "@/components/meanings/Meanings";
import Phonetic from "@/components/phonetic/Phonetic";
import SourceLink from "@/components/source-link/SourceLink";

import styles from "./page.module.scss";

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

// Metadata
export async function generateMetadata({
  params: { word },
}: {
  params: {
    word: string;
  };
}) {
  const _word = word.replace("%20", " ");

  return {
    description: `Search results for ${_word}`,
    title: `${_word}`,
  };
}

export default async function Page({
  params: { word },
}: {
  params: {
    word: string;
  };
}) {
  const wordResponse: WordResponse = await getWord(word);

  if (
    wordResponse[0].word.toLowerCase() !==
    word.replace("%20", " ").toLowerCase()
  ) {
    notFound();
  }

  return (
    <div className={clsx(styles.root)}>
      <Phonetic
        phonetic={wordResponse[0].phonetic}
        word={wordResponse[0].word}
      />
      <Meanings meanings={wordResponse[0].meanings} />
      <span className={clsx(styles.divider)} />
      <SourceLink sourceUrls={wordResponse[0].sourceUrls} />
    </div>
  );
}
