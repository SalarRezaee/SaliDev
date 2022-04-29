import { useState } from "react";
import Image from "next/image";
import { Button } from "../elements";
import { BiMenu } from "react-icons/bi";
import { NavMenus, ResponsiveNav } from "./";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const changeShow = () => {
    console.log('click')
    setShow(false);

  };

  return (
    <nav className="w-full py-3 text-white bg-gradient-to-r from-[#23232A] to-[#2E2E37] rounded-lg my-8 shadow-md">
      <div className="flex items-center justify-between">
        <div className="mr-3 flex">
          <div>
            <Image src="/logo.svg" width={96} height={25} />
            
          </div>
          <div className="lg:block hidden">
            <NavMenus mode="regular" />
          </div>
        </div>
        <div className="lg:mx-8 ml-2 flex items-center">
          <div className="block lg:hidden">
            <BiMenu
              fontSize={30}
              className="mx-2 cursor-pointer"
              onClick={() => setShow(true)}
            />
          </div>
          <Button title="همکاری با من" url="contact-me" />
          {show ? <ResponsiveNav changeShow={changeShow} /> : ""}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
