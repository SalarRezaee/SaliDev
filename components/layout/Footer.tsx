import Image from "next/image";
import { SiGithub, SiLinkedin, SiTelegram, SiInstagram } from "react-icons/si";

const Footer = () => {
  return (
    <div className="flex w-full bg-gradient-to-l from-[#23232A] to-[#2E2E37]">
      <div className=" container mx-auto">
        <div className="flex lg:flex-row md:flex-col flex-col sm:flex-col  items-center text-white justify-between">
          <div className="my-4">
            <Image src="/logo.svg" width={96} height={25} />
          </div>
          <p className="text-sm  lg:mr-12 text-center my-2">
            © 2021 All Rights Reserved
          </p>
          <div>
            <ul className="flex text-sm my-3">
              <li className="w-10 h-10 mx-2 flex items-center justify-center rounded-md text-lg bg-[#23232A]">
                <a
                  href="https://github.com/salarrezaee"
                  target="_blank"
                  rel="noreferrer"
                >
                  <SiGithub />
                </a>
              </li>
              <li className="w-10 h-10 mx-2 flex items-center justify-center rounded-md text-lg bg-[#23232A]">
                <a href="https://t.me/salipad" target="_blank" rel="noreferrer">
                  <SiTelegram />
                </a>
              </li>
              <li className="w-10 h-10 mx-2 flex items-center justify-center rounded-md text-lg bg-[#23232A]">
                <a
                  href="https://www.linkedin.com/in/salarrezaee"
                  target="_blank"
                  rel="noreferrer"
                >
                  <SiLinkedin />
                </a>
              </li>
              <li className="w-10 h-10 mx-2 flex items-center justify-center rounded-md text-lg bg-[#23232A]">
                <a
                  href="https://www.instagram.com/salidev.ir"
                  target="_blank"
                  rel="noreferrer"
                >
                  <SiInstagram />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
