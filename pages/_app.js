import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import Layout from "@comp/utils/Layout";
import Head from "next/head";
import { AppProvider } from "../context/AppContext";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* favicon.ico */}
        <link rel="icon" href="/favicon.ico" />
        {/* apple-touch-icon.png */}
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.ico" />
      </Head>
      <AppProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AppProvider>
    </>
  );
}

export default MyApp;
