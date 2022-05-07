import Link from "next/link";
import { useRouter } from "next/router";
interface NavProps {
  mode: string;
}

const NavMenus = (props: NavProps) => {
  const router = useRouter();

  return (
    <ul
      className={`mr-10 p-0 mt-2 flex ${
        props.mode === "responsive" ? "flex-col ml-10 space-y-10" : "flex-row"
      } items-center text-sm whitespace-nowrap mx-auto w-full `}
    >
      <li>
        <Link href="/">
          <a className="relative">
            صفحه اصلی
            {router.pathname === "/" && (
              <span className="absolute -top-6 shadow-2xl right-4 h-1 rounded-br-md rounded-bl-md w-6/12 bg-[#2D96FF]"></span>
            )}
          </a>
        </Link>
      </li>
      <li className="mx-8">
        <Link href="/services">
          <a className="relative">
            خدمات
            {router.pathname === "/services" && (
              <span className="absolute -top-6 shadow-2xl right-3 h-1 rounded-br-md rounded-bl-md w-6/12 bg-[#2D96FF]"></span>
            )}
          </a>
        </Link>
      </li>
      <li>
        <Link href="/portfolio">
          <a className="relative">نمونه کارها
          {router.pathname === "/portfolio" && (
              <span className="absolute -top-6 shadow-2xl right-4 h-1 rounded-br-md rounded-bl-md w-6/12 bg-[#2D96FF]"></span>
            )}
          </a>
        </Link>
      </li>
    </ul>
  );
};

export default NavMenus;
