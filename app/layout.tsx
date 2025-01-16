import "./globals.css";
import { inter } from "./ui/fonts"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="overflow-x-hidden" lang="en">
      <body className={`${inter.className} antialiased bg-stone-200 text-stone-800`}>
        {children}
      </body>
    </html>
  );
}