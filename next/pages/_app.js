import "@/styles/globals.css";
import localFont from "@next/font/local";

const uncialFont = localFont({
  src: "../public/lhf_uncial_caps-webfont.woff2",
  weight: "400",
  variable: "--font-uncial",
});

export default function App({ Component, pageProps }) {
  return (
    <main className={uncialFont.variable}>
      <Component {...pageProps} />
    </main>
  );
}
