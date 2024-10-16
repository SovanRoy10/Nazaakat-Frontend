


import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import { store } from "../store/store";
import { persistor } from '../store/store';
import { PersistGate } from 'redux-persist/integration/react';
import Script from "next/script"; // Import next/script

 const inter = Inter({ subsets: ["latin"], weight: "400" });

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
   <SessionProvider session={session}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
        <main className={`${inter.className} mx-auto`}>
            {/* Load Razorpay script */}
            <Script
              src="https://checkout.razorpay.com/v1/checkout.js"
              strategy="lazyOnload" // Load the script lazily after the page has loaded
            />
            <Header />
            <Component {...pageProps} />
            <Toaster position="top-center" />
            <Footer />
          </main>
        </PersistGate>
      </Provider>
    </SessionProvider>
  );
}
