import Image from "next/image";

export interface AnimeProp {
  id: string;
  name: string;
  image: {
    original: string;
  };
  kind: string;
  episode: number;
  episode_aired: number;
  score: string;
}

export default function AnimeCard() {
  return (
    <div>
      <h1>AnimeCard</h1>
    </div>
  );
}
