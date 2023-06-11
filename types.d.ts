declare global {
  interface WindowEventMap {
    "local-storage": CustomEvent;
  }
}

type ErrorResponse = {
  message: string;
  resolution: string;
  title: string;
};

type WordResponse = {
  license: {
    name: string;
    url: string;
  };
  meanings: {
    antonyms: string[];
    definitions: {
      antonyms: string[];
      definition: string;
      example?: string;
      synonyms: string[];
    }[];
    partOfSpeech: string;
    synonyms: string[];
  }[];
  phonetic: string;
  phonetics: {
    audio: string;
    license?: {
      name: string;
      url: string;
    };
    sourceUrl?: string;
    text: string;
  }[];
  sourceUrls: string[];
  word: string;
};
