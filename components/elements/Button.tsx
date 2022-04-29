import Link from "next/link";

interface ButtonProps {
  url: string;
  title: string;
  fill: string;
  size: string;
}
const Button = (props: ButtonProps) => {
  return (
    <div
      className={`rounded-md mx-2 ${
        props.fill === "none"
          ? "border-2 border-[#0080FF]  hover:bg-[#0080FF] transition duration-100"
          : "bg-gradient-to-r from-[#0080FF] to-[#57ABFF]"
      } text-xs sm:text-sm ${
        props.size === "full"
          ? "px-4 py-3 mr-0 mx-2"
          : "px-3 py-2 lg:px-4 lg:py-3"
      } whitespace-nowrap`}
    >
      <Link href={props.url}>{props.title}</Link>
    </div>
  );
};

export default Button;
