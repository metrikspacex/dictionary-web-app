import clsx from "clsx";

import Dictionary from "@/components/dictionary/Dictionary";

import styles from "./page.module.scss";

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
  return (
    <main className={clsx(styles.root)}>
      <Dictionary word={word} />
    </main>
  );
}
