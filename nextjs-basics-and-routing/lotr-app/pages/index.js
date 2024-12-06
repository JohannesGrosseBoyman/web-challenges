import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <h1>Hello from Next.js</h1>
      <h1>LOTR</h1>
      <Link href="/volumens" title="Show all Volumens">
        Show all Volumens
      </Link>
    </>
  );
}
