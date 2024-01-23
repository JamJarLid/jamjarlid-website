import Link from "next/link"
import Image from "next/image";
import styles from "../styles/page.module.css";

export default function Home() {
  return (
    <main>
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
    </main>
  );
}
