import Link from "next/link";

export default async function Page() {
  // 5second later
  await new Promise((resolve) => setTimeout(resolve, 5000));

  return (
    <div>
      <Link href='/'>back home</Link>
      <p>this page is Heavy</p>
    </div>

  )
}