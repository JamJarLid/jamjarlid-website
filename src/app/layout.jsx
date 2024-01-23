import Image from "next/image";
import Link from "next/link";
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
        
        <header>
          <nav>
            <Image
              src="../../public/next.svg"
              alt=""
              width={100}
              height={100}
            />
            <Link href="/twitch">Twitch</Link>
            <Link href="/youtube">YouTube</Link>
            <Link href="/github">Github</Link>
          </nav>
        </header>

        {children}

        <footer>
          <p>© 2024 JamJarLid</p>
        </footer>

      </body>
    </html>
  );
}
