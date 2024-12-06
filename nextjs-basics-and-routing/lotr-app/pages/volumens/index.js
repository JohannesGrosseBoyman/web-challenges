import Link from "next/link";
import { introduction } from "../../resources/lib/data";

export default function Volumes() {
  return (
    <>
      <h1>Lord of the rings</h1>
      <p>{introduction}</p>
      <h2>All volumes</h2>
      <ul>
        <li>
          <Link href="/volumens/the-fellowship-of-the-ring">
            the-fellowship-of-the-ring
          </Link>{" "}
        </li>
        <li>
          <Link href="/volumens/the-two-towers">the-two-towers</Link>
        </li>
        <li>
          <Link href="/volumens/the-return-of-the-king">
            the-return-of-the-king
          </Link>
        </li>
      </ul>
    </>
  );
}
