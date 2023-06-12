declare global {
  interface WindowEventMap {
    "local-storage": CustomEvent;
  }
}

type Definition = {
  antonyms: string[];
  definition: string;
  example?: string;
  synonyms: string[];
};

type License = {
  name: string;
  url: string;
};

type Meaning = {
  antonyms: string[];
  definitions: Definition[];
  partOfSpeech: string;
  synonyms: string[];
};

type Phonetic = string;

type Phonetics = {
  audio: string;
  license?: License;
  sourceUrl?: string;
  text: string;
}[];

type SourceUrls = string[];

type Word = string;

type ErrorResponse = {
  message: string;
  resolution: string;
  title: string;
};

type WordResponse = {
  license: License;
  meanings: Meaning[];
  phonetic: Phonetic;
  phonetics: Phonetics;
  sourceUrls: SourceUrls;
  word: Word;
}[];
