import "./globals.css";
import { Jost } from "next/font/google";

const jost = Jost({
  subsets: ["latin"],
});

export const metadata = {
  title: "AJ Portfolio",
  description:
    "I have 1.6 years of experience as a talented front-end developer but minimal background in the backend.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${jost.className} flex justify-center flex-col items-center p-2 my-4 bg-[#E0C9A6] dark:bg-slate-900 transition-all duration-500`}
      >
        {children}
      </body>
    </html>
  );
}
