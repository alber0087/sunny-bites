import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const API_KEY = "AIzaSyAw-aTPzbceFSmmS4_JNjSO0j7UHv4sgP4";

export const metadata = {
  title: "sunnyBites",
  description: "Find your place",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
