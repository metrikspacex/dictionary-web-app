import "@/styles/globals.scss";

import clsx from "clsx";
import { Inconsolata, Inter, Lora } from "next/font/google";

import Header from "@/components/header/Header";

const inconsolata = Inconsolata({
  style: ["normal"],
  subsets: ["latin"],
  variable: "--ff-mono",
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  style: ["normal"],
  subsets: ["latin"],
  variable: "--ff-sans-serif",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const lora = Lora({
  style: ["italic", "normal"],
  subsets: ["latin"],
  variable: "--ff-serif",
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  description: "Dictionary web application",
  title: "Frontend Mentor | Dictionary web app",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html
      className={clsx(inconsolata.variable, inter.variable, lora.variable)}
      lang="en">
      <body>
        <Header className={clsx()} />
        {children}
      </body>
    </html>
  );
}
