import { Inter } from "next/font/google";
import cn from "classnames";
import PageHeader from "@/src/components/page-header";
import PageFooter from "@/src/components/page-footer";

import "@/src/styles/globals.css";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

export const metadata = {
    title: "Online Store Tech Test",
    description: "Online Store Tech Test",
};

interface IRootLayoutProps {
    children: React.ReactNode;
}

export default function RootLayout({ children }: IRootLayoutProps) {
    return (
        <html lang="en">
            <body className={cn("relative h-full antialiased", inter.className)}>
                <PageHeader />
                {children}
                <PageFooter />
            </body>
        </html>
    );
}
