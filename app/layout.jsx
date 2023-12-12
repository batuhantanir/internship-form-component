import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col`}>
        <div className="h-16 bg-red-400 w-full">Header</div>
        <div className="flex ">
          <div className="hidden w-[15%] bg-slate-600 lg:block">
            Sidebar
          </div>
          <div className="w-full lg:col-start-3 lg:col-span-10">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
