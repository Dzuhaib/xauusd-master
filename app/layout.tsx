import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "الذهب/الدولار ماستر🔰 – إشارات الذهب المميزة",
  description: "تابع الذهب/الدولار ماستر🔰 للحصول على إشارات دقيقة لتداول الذهب يومياً. انضم إلى قناتنا على تيليجرام لتحليل XAUUSD في الوقت الفعلي.",
  openGraph: {
    title: "الذهب/الدولار ماستر🔰 – إشارات الذهب المميزة",
    description: "إشارات XAUUSD دقيقة. تحليل يومي لسوق الذهب.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '25725053743754902');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=25725053743754902&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </head>
      <body style={{ height: "100vh", overflow: "hidden", display: "flex", flexDirection: "column" }}>
        {children}
      </body>
    </html>
  );
}
