import clsx from "clsx";
import Image from "next/image";
import type { HTMLAttributes } from "react";

import styles from "./SourceLink.module.scss";

export type SourceLinkProps = HTMLAttributes<HTMLAnchorElement> & {
  sourceUrls: SourceUrls;
};
export default function SourceLink({ className, sourceUrls }: SourceLinkProps) {
  return (
    <div className={clsx(styles.root, className)}>
      <h1 className={clsx(styles.source)}>Source</h1>
      {sourceUrls.map((item, key) => {
        return (
          <div className={clsx(styles.container)}>
            <a
              className={clsx(styles.source)}
              href={item}
              key={`link-${key}`}
              rel="noreferrer"
              target="_blank">
              {item}
            </a>
            <Image
              alt="Go to source link"
              className={clsx(styles.source)}
              height={12}
              key={`play-${key}`}
              src="/images/icon-new-window.svg"
              width={12}
            />
          </div>
        );
      })}
    </div>
  );
}
