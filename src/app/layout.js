import { Inter } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "Kovara",
  description: "Descubre lo ultimo en tecnología en nuestra tienda",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className} >
        {children}
      </body>
    </html>
  );
}
