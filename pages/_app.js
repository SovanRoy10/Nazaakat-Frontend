import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";

import { SessionProvider } from "next-auth/react";

const inter = Inter({ subsets: ["latin"], weight: "400" });

import { Provider } from "react-redux";
import { store } from "../store/store";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <main className={`${inter.className} mx-auto`}>
          <Header />
          <Component {...pageProps} />
          <Toaster position="top-center" />
          <Footer />
        </main>
      </Provider>
    </SessionProvider>
  );
}
