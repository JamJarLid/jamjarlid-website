import Link from "next/link"
import Image from "next/image";
import styles from "../styles/page.module.css";

export default function Home() {
  return (
    <main>
      <header>
        <nav>
          <Image src="../../public/next.svg" alt="" width={100} height={100} />
          <Link href="/twitch">Twitch</Link>
          <Link href="/youtube">YouTube</Link>
          <Link href="/github">Github</Link>
        </nav>
      </header>
      <Link href="/twitch">
        <h2>Twitch</h2>
        <p>Main streaming site</p>
      </Link>
      <Link href="/youtube">
        <h2>YouTube</h2>
        <p>Videos of stream highlights and secondary stream</p>
      </Link >
      <Link href="/github">
        <h2>Github</h2>
        <p>Coding projects and other personal source code</p>
      </Link >
      <footer>
        <p>© 2024 JamJarLid</p>
      </footer>
    </main>
  );
}
