import { useEffect, useState } from "react";

export type SupportFonts = "mono" | "sans-serif" | "serif";
export default function useFont(): [
  SupportFonts,
  (_font: SupportFonts) => void
] {
  const [font, setFont] = useState<SupportFonts>("mono");

  useEffect(() => {
    const savedFont = window.localStorage.getItem("font") as SupportFonts;
    if (savedFont) {
      setFont(savedFont);
      window.document.documentElement.style.setProperty(
        "--ff",
        `var(--ff-${savedFont})`
      );
    } else {
      window.document.documentElement.style.setProperty(
        "--ff",
        `var(--ff-mono)`
      );
      window.localStorage.setItem("font", "mono");
    }
  }, []);

  const updateFont = (_font: SupportFonts): void => {
    setFont(_font);
    window.document.documentElement.style.setProperty(
      "--ff",
      `var(--ff-${_font})`
    );
    window.localStorage.setItem("font", _font);
  };

  return [font, updateFont];
}
