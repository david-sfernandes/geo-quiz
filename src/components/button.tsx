import Link from "next/link";

export default function Button({
  text,
  isOrange,
  href = "/",
  onClick,
}: {
  text: string;
  isOrange?: boolean;
  href?: string;
  onClick?: () => void;
}) {
  if (onClick) {
    return (
      <button
        onClick={() => onClick()}
        className={`py-3 px-9 border-2 text-sm font-bold rounded-xl hover:brightness-75 
      defaultTrasition ${
        isOrange
          ? "text-white border-orange bg-orange"
          : "text-blue border-blue bg-white"
      }`}
      >
        {text}
      </button>
    );
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
