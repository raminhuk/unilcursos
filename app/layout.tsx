"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google'
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";

export const GA_TRACKING_ID: string = 'G-LNDG0SKHSM';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html suppressHydrationWarning lang="pt-br">
            <head />
            <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
                <Providers>
                    <Header />
                    {children}
                    <Footer />
                    <ScrollToTop />
                </Providers>
            </body>
            <GoogleAnalytics gaId={GA_TRACKING_ID} />
        </html>
    );
}

import { Providers } from "./providers"; 

