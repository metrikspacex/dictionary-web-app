"use client";

import styles from "./error.module.scss";

import clsx from "clsx";

import Message from "@/components/message/message";

export default function Error() {
  return (
    <section className={clsx(styles.root)}>
      <Message error={true} message="" resolution="" title="" />
    </section>
  );
}
