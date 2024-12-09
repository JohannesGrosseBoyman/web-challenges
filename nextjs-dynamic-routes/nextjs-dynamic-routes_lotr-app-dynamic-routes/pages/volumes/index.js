import Link from "next/link";
import { introduction } from "../../lib/data";
import { volumes } from "../../lib/data"
import { useRouter } from "next/router";

export default function Volumes() {
  const router = useRouter();
  
  function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  function getRandomVolume() {
    const randomVolume = getRandomElement(volumes);
    router.push(`/volumes/${randomVolume.slug}`);
  }

  return (
    <>
      <h1>The Lord of the Rings</h1>
      <p>{introduction}</p>
      <ul>
        
          {volumes.map((volume) => (
            <li key={volume.title}>
              <Link href={`/volumes/${volume.slug}`}>{volume.title} </Link>
            </li>
          ) )}
      </ul>
      <button onClick={getRandomVolume}>Get a random Volume!</button>
    </>
  );
}
