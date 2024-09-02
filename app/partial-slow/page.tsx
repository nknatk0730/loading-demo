import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";
import { Suspense } from "react";

export default function Page() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <Link href="/">back home</Link>
      <div className="aspect-video bg-zinc-400">Fast</div>
      <div className="aspect-video">
        <Suspense fallback={<Skeleton className="size-full" />}>
          <SlowComponent />
        </Suspense>
      </div>
      <div className="aspect-video bg-zinc-400">Fast</div>
    </div>
  );
}

const SlowComponent = async () => {
  // 2second later
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return (
    <div className="size-full bg-red-300">
      <p>heavy component</p>
    </div>
  )
}
