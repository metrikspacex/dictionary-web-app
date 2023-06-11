import styles from "./page.module.scss";

import clsx from "clsx";

export default async function Page({
  params: { search },
}: {
  params: {
    search: string;
  };
}) {
  console.log(search);
  return (
    <section className={clsx(styles.root)}>
      <h1>{search}</h1>
    </section>
  );
}

// Metadata
export async function generateMetadata({
  params: { search },
}: {
  params: {
    search: string;
  };
}) {
  const _search = search.replace("%20", " ");

  return {
    description: `Search results for ${_search}`,
    title: `${_search}`,
  };
}
