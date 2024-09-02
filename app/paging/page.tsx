import Link from "next/link";

export default function Page({
  searchParams: {
    page
  }
}: {
  searchParams: {
    page: string
  }
}) {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="h-20">&apos;{page}&apos;</div>
      <Link href={"/paging?page=1"} className="aspect-video border">1</Link>
      <Link className="aspect-video border" href={"/paging?page=2"}>2</Link>
      <Link className="aspect-video border" href={"/paging?page=3"}>3</Link>
      <Link href="/">back home</Link>
    </div>
  )
}
