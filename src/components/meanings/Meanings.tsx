import Meaning from "@/components/meanings/meaning/Meaning";

export default function Meanings({ meanings }: { meanings: Meaning[] }) {
  return (
    <>
      {meanings.map((item, key) => {
        return <Meaning key={`meaning-${key}`} meaning={item} />;
      })}
    </>
  );
}
