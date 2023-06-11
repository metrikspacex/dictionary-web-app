import styles from "./page.module.scss";

import clsx from "clsx";

import Message from "@/components/message/message";

export default function Page() {
  return (
    <section className={clsx(styles.root)}>
      <Message error={false} message="" resolution="" title="" />
    </section>
  );
}
