import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PhotochroMe - Luxury Photobooth Experience",
  description: "Capture the best moments with PhotochroMe photobooth services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
