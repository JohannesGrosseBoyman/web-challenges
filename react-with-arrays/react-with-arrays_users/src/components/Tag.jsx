import "./Tag.css";

export default function Tag({ tag }) {
  const tagClasses = tag === "admin" ? "tag tag--highlight" : "tag";
  return <li className={tagClasses}>{tag}</li>;
}
