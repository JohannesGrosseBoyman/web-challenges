import Link from "next/link";
import { introduction, volumes } from "../../resources/lib/data";

export default function Volumes() {
  return (
    <>
      <h1>Lord of the rings</h1>
      <p>{introduction}</p>
      <h2>All volumes</h2>
      
        {volumes.map((volume) => (
          <>
          <Link key={volume.slug} href={`/volumes/${volume.slug}`}>
            {volume.title}
          </Link>
          <br />
          </>
        ))}
    </>
  );
}
