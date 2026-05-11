import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HawkEye XAUUSD – Premium Gold Signals",
  description: "Follow HawkEye XAUUSD for daily precision gold trading signals. All 5 TPs hit today! Join our WhatsApp channel for real-time XAUUSD analysis.",
  openGraph: {
    title: "HawkEye XAUUSD – Premium Gold Signals",
    description: "Precision XAUUSD signals. All 5 TPs hit today!",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ height: "100vh", overflow: "hidden", display: "flex", flexDirection: "column" }}>
        {children}
      </body>
    </html>
  );
}
