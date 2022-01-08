import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import Layout from "@comp/utils/Layout";
import Head from "next/head";
import { AppProvider } from "../context/AppContext";
import { TransactionProvider } from "context/TransactionContext";

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
        <TransactionProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </TransactionProvider>
      </AppProvider>
    </>
  );
}

export default MyApp;
