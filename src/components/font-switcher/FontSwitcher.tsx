"use client";

import styles from "./FontSwitcher.module.scss";

import Image from "next/image";

import { HTMLAttributes, useState } from "react";

import clsx from "clsx";

import useFont from "@/hooks/useFont";
import FontSwitcherModal from "@/components/font-switcher/font-switcher-modal/FontSwitcherModal";

export type FontSwitcherProps = HTMLAttributes<HTMLDivElement>;
export default function FontSwitcher({ className }: FontSwitcherProps) {
  const [font, setFont] = useFont();
  const [modal, setModal] = useState(false);

  return (
    <div className={clsx(styles.root, className)}>
      <button
        className={clsx(styles["font__selector"])}
        onClick={() => setModal((prevState) => !prevState)}
        type="button">
        {font}
      </button>
      <Image
        alt="Arrow down"
        className={clsx(styles["font__selector"])}
        onClick={() => setModal((prevState) => !prevState)}
        height={8}
        src="/images/icon-arrow-down.svg"
        width={12}
      />
      {modal ? (
        <FontSwitcherModal setFont={setFont} setModal={setModal} />
      ) : null}
    </div>
  );
}
