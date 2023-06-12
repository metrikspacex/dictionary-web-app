import clsx from "clsx";
import type {
  Dispatch,
  HTMLAttributes,
  MouseEvent,
  SetStateAction,
} from "react";

import type { SupportFonts } from "@/hooks/useFont";

import styles from "./FontSwitcherModal.module.scss";

export type FontSwitcherModalProps = HTMLAttributes<HTMLDivElement> & {
  setFont: (_font: SupportFonts) => void;
  setModal: Dispatch<SetStateAction<boolean>>;
};
export default function FontSwitcherModal({
  className,
  setFont,
  setModal,
}: FontSwitcherModalProps) {
  const onClick = (event: MouseEvent<HTMLLIElement>) => {
    event.preventDefault();
    const _target = event.target as HTMLLIElement;
    const selectedFont = _target.textContent?.toLowerCase() as SupportFonts;
    setFont(selectedFont);
    setModal(false);
  };

  return (
    <ul className={clsx(styles.root, className)}>
      <li className={clsx(styles.font__selection)} onClick={onClick}>
        Sans-Serif
      </li>
      <li className={clsx(styles.font__selection)} onClick={onClick}>
        Serif
      </li>
      <li className={clsx(styles.font__selection)} onClick={onClick}>
        Mono
      </li>
    </ul>
  );
}
