import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rêve Novateur",
  description: "Du rêve à la réalisation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className='w-screen scroll-smooth snap-mandatory snap-y overflow-x-hidden'>
      <head>
        <link rel="icon" type="image/png" href="/assets/images/logo-bluegray.png" /> 
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.css"></link>
      </head>
      <body className={''}>{children}</body>
    </html>
  );
}
