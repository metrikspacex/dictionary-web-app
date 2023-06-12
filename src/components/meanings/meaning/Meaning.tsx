import clsx from "clsx";
import type { HTMLAttributes } from "react";

import Antonym from "@/components/meanings/meaning/antonym/Antonym";
import Definition from "@/components/meanings/meaning/definition/Definition";
import Example from "@/components/meanings/meaning/example/Example";
import Synonym from "@/components/meanings/meaning/synonym/Synonym";

import styles from "./Meaning.module.scss";

export type MeaningProps = HTMLAttributes<HTMLElement> & {
  meaning: Meaning;
};
export default function Meaning({ className, meaning }: MeaningProps) {
  return (
    <section className={clsx(styles.root, className)}>
      <div className={clsx(styles.partOfSpeech)}>
        <span>{meaning.partOfSpeech}</span>
        <span></span>
      </div>
      <h1 className={clsx(styles.meaning)}>Meaning</h1>
      <ul className={clsx(styles.definitions, className)}>
        {meaning.definitions.map((item) => {
          return (
            <>
              <Definition
                definition={item.definition}
                key={meaning.partOfSpeech}
              />
              <Example example={item.example} key={meaning.partOfSpeech} />
            </>
          );
        })}
      </ul>
      <Antonym antonyms={meaning.antonyms} />
      <Synonym synonyms={meaning.synonyms} />
    </section>
  );
}
