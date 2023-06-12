"use client";

import clsx from "clsx";
import { useRouter } from "next/navigation";
import type { ChangeEvent, FormEvent, HTMLAttributes } from "react";
import { useState } from "react";

import styles from "./Searchbar.module.scss";

export type SearchbarProps = HTMLAttributes<HTMLFormElement>;
export default function Searchbar({ className }: SearchbarProps) {
  const [search, setSearch] = useState<string>("");
  const router = useRouter();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setSearch("");

    router.push(`/${search}`);
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return (
    <form className={clsx(styles.root, className)} onSubmit={handleSubmit}>
      <input
        className={clsx(styles.search)}
        placeholder="Search word..."
        onChange={onChange}
      />
    </form>
  );
}
