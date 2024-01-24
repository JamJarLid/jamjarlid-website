import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div>
        <Link href="/twitch">
          <h2>Twitch</h2>
        </Link>
        <p>Main streaming site</p>
        <Link href="https://twitch.tv/jamjarlid">To Twitch Channel</Link>
      </div>
      <div>
        <Link href="/youtube">
          <h2>YouTube</h2>
        </Link>
        <p>Videos of stream highlights and secondary stream</p>
        <Link href="https://www.youtube.com/channel/UCHeK73JvwilHaKwi0_7dpjg">
          To YouTube Channel
        </Link>
      </div>
      <div>
        <Link href="/github">
          <h2>Github</h2>
        </Link>
        <p>Coding projects and other personal source code</p>
        <Link href="https://github.com/JamJarLid">To GitHub Page</Link>
      </div>
    </main>
  );
}
