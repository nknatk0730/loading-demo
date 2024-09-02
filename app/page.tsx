import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Button asChild>
        <Link href="/slow">HeavyPage</Link>
      </Button>
      <Button asChild>
        <Link href="/partial-slow">partial heavy</Link>
      </Button>
    </div>
  );
}
