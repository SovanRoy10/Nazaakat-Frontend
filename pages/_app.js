import "@/styles/globals.css";
import Header from "@/components/Header";

import { Inter } from "next/font/google";
import { Toaster } from 'react-hot-toast';

import { SessionProvider } from "next-auth/react";

const inter = Inter({ subsets: ["latin"], weight: "400" });

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <main
        className={`${inter.className} mx-auto`}
      >
        <Header />
        <Component {...pageProps} />
        <Toaster position="top-center"  />
      </main>
    </SessionProvider>
  );
}