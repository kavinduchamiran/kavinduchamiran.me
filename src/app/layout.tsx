import type {Metadata} from 'next';
import {Roboto_Mono} from 'next/font/google';
import './globals.css';
import React from "react";

const robotoMono = Roboto_Mono({subsets: ['latin']});

export const metadata: Metadata = {
  title: 'Kavindu Chamiran',
  description: 'Portfolio',
};

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
    <head>
      <link rel="icon" href="/favicon.svg" sizes="any"/>
      <title>Kavindu Chamiran - Portfolio</title>
    </head>
    <body className={robotoMono.className}>{children}</body>
    </html>
  );
}
