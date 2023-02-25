import Link from "next/link";
import { useRouter } from "next/router";

export default function Button({
  text,
  isOrange,
  reload,
  href = "/"
}: {
  text: string;
  isOrange?: boolean;
  reload?: boolean;
  href?: string;
}) {
  
  if (reload) {
    const router = useRouter();
    return (
      <button
      onClick={() => router.reload()}
      className={`py-3 px-9 border-2 text-sm font-bold rounded-xl hover:brightness-75 
      defaultTrasition ${
        isOrange
          ? "text-white border-orange bg-orange"
          : "text-blue border-blue"
      }`}
    >
      {text}
    </button>
    )
  }

  return (
    <Link
      href={href}
      className={`py-3 px-9 border-2 text-sm font-bold rounded-xl hover:brightness-75 
      defaultTrasition ${
        isOrange
          ? "text-white border-orange bg-orange"
          : "text-blue border-blue"
      }`}
    >
      {text}
    </Link>
  );
}
