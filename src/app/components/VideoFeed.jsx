'user client';
import YouTube from "react-youtube";

const YOUTUBE_PLAYLIST_ITEMS_API =
  "https://www.googleapis.com/youtube/v3/playlistItems";

export default async function VideoFeed() {
  const res = await fetch('${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&key=${process.env.YOUTUBE_API_KEY}');
  const data = await res.json();

  return {
    props: {
      data
    }
  }
};
