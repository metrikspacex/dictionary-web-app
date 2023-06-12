import Meaning from "@/components/meanings/meaning/Meaning";

export default function Meanings({ meanings }: { meanings: Meaning[] }) {
  return (
    <>
      {meanings.map((item) => {
        return <Meaning key={item.partOfSpeech} meaning={item} />;
      })}
    </>
  );
}
