import { Inter } from "next/font/google";

import "@/src/styles/globals.css";
import cn from "classnames";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={cn("relative h-full antialiased", inter.className)}>{children}</body>
        </html>
    );
}
