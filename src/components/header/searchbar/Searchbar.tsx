"use client";

import styles from "./Searchbar.module.scss";

import { useRouter } from "next/navigation";

import { ChangeEvent, FormEvent, HTMLAttributes, useState } from "react";

import clsx from "clsx";

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
        onChange={onChange}
        placeholder="Search word..."
      />
    </form>
  );
}
