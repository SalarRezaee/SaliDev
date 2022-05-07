import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ContactMeMain, Footer, Navbar } from "../components/layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div dir="rtl">
      <Navbar />
      <Component {...pageProps} />
      <ContactMeMain />
      <Footer />
    </div>
  );
}

export default MyApp;
