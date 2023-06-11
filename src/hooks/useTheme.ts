import { useEffect, useState } from "react";

export type SupportThemes = "dark" | "light";
export default function useTheme(): [
  SupportThemes,
  (_theme: SupportThemes) => void
] {
  const [theme, setTheme] = useState<SupportThemes>("dark");

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme") as SupportThemes;
    if (savedTheme) {
      setTheme(savedTheme);
      window.document.documentElement.setAttribute("data-theme", savedTheme);
    } else {
      window.document.documentElement.setAttribute("data-theme", "dark");
      window.localStorage.setItem("theme", "dark");
    }
  }, []);

  const updateTheme = (_theme: SupportThemes): void => {
    setTheme(_theme);
    window.document.documentElement.setAttribute("data-theme", _theme);
    window.localStorage.setItem("theme", _theme);
  };

  return [theme, updateTheme];
}
