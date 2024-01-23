import Header from "./components/Header";
import Footer from "./components/Footer";
import { Inter } from "next/font/google";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "JamJarLid",
  description: "Welcome to the JamJarLid website!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        
        {children}

        <Footer/>

      </body>
    </html>
  );
}
