"use client";

import clsx from "clsx";
import Image from "next/image";
import type { HTMLAttributes } from "react";
import { useState } from "react";

import FontSwitcherModal from "@/components/font-switcher/font-switcher-modal/FontSwitcherModal";
import useFont from "@/hooks/useFont";

import styles from "./FontSwitcher.module.scss";

export type FontSwitcherProps = HTMLAttributes<HTMLDivElement>;
export default function FontSwitcher({ className }: FontSwitcherProps) {
  const [font, setFont] = useFont();
  const [modal, setModal] = useState(false);

  return (
    <div className={clsx(styles.root, className)}>
      <button
        className={clsx(styles.font__selector)}
        type="button"
        onClick={() => {
          setModal((prevState) => !prevState);
        }}>
        {font}
      </button>
      <Image
        alt="Arrow down"
        className={clsx(styles.font__selector)}
        height={8}
        src="/images/icon-arrow-down.svg"
        width={12}
        onClick={() => {
          setModal((prevState) => !prevState);
        }}
      />
      {modal ? (
        <FontSwitcherModal setFont={setFont} setModal={setModal} />
      ) : null}
    </div>
  );
}
