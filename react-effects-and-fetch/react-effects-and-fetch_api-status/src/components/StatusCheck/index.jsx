import { useState } from "react";
import "./StatusCheck.css";

const apiStatusUrl = "https://example-apis.vercel.app/api/status";

export default function StatusCheck() {
  const [statusIcon, setStatusIcon] = useState("⁉️");

  async function handleCheckApiStatus() {
    // --v-- write your code here --v--
    setStatusIcon("⏳");
    try {
      const response = await fetch(apiStatusUrl);
      const data = await response.json();
      console.log("data: ", data);
      console.log("response: ", response);

      if (response.ok) {
        setStatusIcon("✅");
      } else [setStatusIcon("❌")];
    } catch (error) {
      return setStatusIcon("🚨");
    }

    // --^-- write your code here --^--
  }

  return (
    <article className="status-check">
      <div className="status-check__wrapper">
        <h2 className="status-check__heading">Status:</h2>
        <span className="status-check__icon">{statusIcon}</span>
      </div>
      <button
        type="button"
        className="status-check__button"
        onClick={handleCheckApiStatus}
      >
        Check API Status
      </button>
    </article>
  );
}
