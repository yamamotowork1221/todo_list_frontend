import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Todoリストポートフォリオ",
    template: "%s | Todoリストポートフォリオ",
  },
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="ja">
      <body
        className={``}
      >
        {children}
      </body>
    </html>
  );
}

export default RootLayout;