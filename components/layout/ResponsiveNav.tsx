import { NavMenus } from "./";
import { FaRegTimesCircle } from "react-icons/fa";

interface ResponsiveNavbarProps {
  changeShow: any;
}

const ResponsiveNav = (props: ResponsiveNavbarProps) => {
  return (
    <div className="z-30 fixed top-0 right-0 w-screen h-screen bg-black bg-opacity-80 ">
      <FaRegTimesCircle
        onClick={() => props.changeShow()}
        className="absolute left-10 top-16 cursor-pointer"
        fontSize={30}
      />
      <div
        className="w-screen h-screen flex mx-auto items-center justify-center"
        style={{ margin: "0 auto" }}
      >
        <NavMenus mode="responsive" />
      </div>
    </div>
  );
};

export default ResponsiveNav;
