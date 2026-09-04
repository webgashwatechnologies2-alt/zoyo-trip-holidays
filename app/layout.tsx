import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import EnquiryModal from "../components/EnquiryModal";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Zoyo Trip Holidays",
  description: "India's Trusted Tour And Destination Management Company",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} font-sans antialiased`}
        style={{ fontFamily: "var(--font-poppins), sans-serif" }}
      >
        <Header />

        <main className="min-h-screen">
          {children}
        </main>

        <Footer />

        <EnquiryModal />

        {/* Tawk.to Live Chat */}
        <Script
          id="tawk-to"
          strategy="afterInteractive"
        >
          {`
            var Tawk_API = Tawk_API || {};
            var Tawk_LoadStart = new Date();

            (function() {
              var s1 = document.createElement("script");
              var s0 = document.getElementsByTagName("script")[0];

              s1.async = true;
              s1.src = "https://embed.tawk.to/6a9947d7a18d6a344545886a/1k1jc18pe";
              s1.charset = "UTF-8";
              s1.setAttribute("crossorigin", "*");

              s0.parentNode.insertBefore(s1, s0);
            })();
          `}
        </Script>
      </body>
    </html>
  );
}