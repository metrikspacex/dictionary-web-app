import clsx from "clsx";

import Message from "@/components/message/Message";

import styles from "./not-found.module.scss";

export default async function NotFound() {
  return (
    <main className={clsx(styles.root)}>
      <section className={clsx(styles["not-found"])}>
        <Message
          error
          message="Sorry pal, we couldn't find definitions for the word you were looking for."
          resolution="You can try the search again at later time or head to the web instead."
          title="No Definition Found"
        />
      </section>
    </main>
  );
}
