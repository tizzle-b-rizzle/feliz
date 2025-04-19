"use client";
import { Provider } from "react-redux";
import store from "@/redux/store";
import Head from "next/head";

export default function RootLayout({ children }) {
  return (
    <>
      <title>Feliz aniversário!</title>

      <Provider store={store}>
        <html lang="en">
          <body>{children}</body>
        </html>
      </Provider>
    </>
  );
}
