import Link from "../components/Link";
import QuickActions from "../components/QuickActions";

export default function Actions({ onOut, onOn, lightsSum}) {
  return (
    <>
      <Link href="/">← Back home</Link>
      <h1>Quick Actions</h1>
      <QuickActions 
        onOut={onOut}
        onOn={onOn}
        lightsSum={lightsSum}
      />
    </>
  );
}
