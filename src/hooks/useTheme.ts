import { useEffect, useState } from "react";

export type SupportThemes = "dark" | "light";
export default function useTheme(): [
  SupportThemes,
  (_theme: SupportThemes) => void
  // eslint-disable-next-line
] {
  const [theme, setTheme] = useState<SupportThemes>("dark");

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme") as SupportThemes;
    if (savedTheme) {
      setTheme(savedTheme);
      window.document.documentElement.dataset.theme = savedTheme;
    } else {
      window.document.documentElement.dataset.theme = "dark";
      window.localStorage.setItem("theme", "dark");
    }
  }, []);

  const updateTheme = (_theme: SupportThemes): void => {
    setTheme(_theme);
    window.document.documentElement.dataset.theme = _theme;
    window.localStorage.setItem("theme", _theme);
  };

  return [theme, updateTheme];
}
