import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import StoreContextProvider from "@/context/StoreContext";

const fontName = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const favIconSvg = `data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🍕</text></svg>`;

export const metadata: Metadata = {
  title: "YumDispatch",
  description: "Food Delivery App",
  icons: {
    icon: favIconSvg,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontName.className} sm:w-[80%] m-auto`}>
        <StoreContextProvider>
          <NavBar />
          {children}
        </StoreContextProvider>
      </body>
    </html>
  );
}
