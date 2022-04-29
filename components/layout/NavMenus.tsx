import Link from "next/link";

interface NavProps {
  mode: string;
}

const NavMenus = (props: NavProps) => {
  return (
    <ul
      className={`mr-10 p-0 mt-2 flex ${
        props.mode === "responsive" ? "flex-col mr-0 space-y-10" : "flex-row"
      } items-center text-sm whitespace-nowrap `}
    >
      <li>
        <Link href="/">
          <a className="relative">
            صفحه اصلی
            <span className="absolute -top-6 shadow-2xl right-4 h-1 rounded-br-md rounded-bl-md w-6/12 bg-[#2D96FF]"></span>
          </a>
        </Link>
      </li>
      <li className="mx-8">
        <Link href="/">
          <a className="relative">خدمات</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a>نمونه کارها</a>
        </Link>
      </li>
    </ul>
  );
};

export default NavMenus;
