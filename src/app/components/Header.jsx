import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
  <header>
    <nav>
      <Image src="../../public/next.svg" alt="" width={100} height={100} />
      <Link href="/twitch">Twitch</Link>
      <Link href="/youtube">YouTube</Link>
      <Link href="/github">Github</Link>
    </nav>
  </header>
  )
}