import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";


const architectural = localFont({
  src: "./fonts/Architectural/OpenType-TT/Architectural-Regular.ttf",
  variable: "--font-architectural",
  weight: "400",
});





export const metadata: Metadata = {
    title: "Decrypto Word Picker",
    description:
        "The website you can generate words for the Decrypto board game on.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <head>
                <link
                    href='https://fonts.cdnfonts.com/css/seven-segment'
                    rel='stylesheet'
                />
                <link href="https://fonts.cdnfonts.com/css/cyrillic-pixel-7" rel="stylesheet"/>
                
            </head>
            <body className={`${architectural.variable} antialiased bg-white`}>{children}</body>
        </html>
    );
}
