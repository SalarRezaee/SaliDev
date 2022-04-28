import Link from "next/link";

interface ButtonProps {
  url: string;
  title: string;
}
const Button = (props: ButtonProps) => {
  return (
    <div className="rounded-md bg-gradient-to-r from-[#0080FF] to-[#57ABFF] text-xs px-3 py-2 sm:text-sm lg:px-4 lg:py-3 whitespace-nowrap">
      <Link href={props.url}>{props.title}</Link>
    </div>
  );
};

export default Button;
