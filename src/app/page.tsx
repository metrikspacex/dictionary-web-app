import clsx from "clsx";

import Message from "@/components/message/Message";

import styles from "./page.module.scss";

export default function Page() {
  return (
    <main className={clsx(styles.root)}>
      <section className={clsx(styles.welcome)}>
        <Message
          error={false}
          message="Search our dictionary"
          resolution="and hopefully we can find the word you are looking for."
          title="Search our dictionary!"
        />
      </section>
    </main>
  );
}
