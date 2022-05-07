import Image from "next/image";
import { Button } from "../elements";

const Banner = () => {
  return (
    <div className="w-full py-1 text-white bg-gradient-to-r from-[#23232A] to-[#2E2E37] rounded-lg  shadow-md">
      <div className="grid lg:grid-cols-2 grid-cols-1 justify-between px-8">
        <div className="my-1">
          <h1 className="text-xl leading-8 my-8">
            سالار رضایی؛ توسعه دهنده و<br />
            برنامه نویس وب، گرایش فرانت اند
          </h1>
          <p className="text-sm leading-9 text-justify text-gray-300">
            اگر فکر می‌کنید به یک توسعه دهنده‌ی وب برای پروژه هایتان احتیاج
            دارید، من از آشنایی با شما خوشحال خواهم شد. طی تمام سال‌هایی که به
            برنامه نویسی مشغول بودم، علاقه‌ام به این رشته روز به روز بیشتر
            می‌شده است و همچنین از کشف راه‌های .جدید برای انجام بهتر و سریع تر
            کارها لذت می بردم !حالا اینجا هستم و برای انجام پروژه‌های شما
            آماده‌ام
          </p>
          <div className="w-full flex items-center mb-3 mt-8">
            <Button title="ارتباط با من" url="/contact-me" fill="regular" size="full" />
            <Button title="دانلود رزومه" url="/SalarRezaee-Resume.pdf" fill="none" size="full" />
          </div>
        </div>
        <div className="lg:text-left text-center my-4">
          <Image src="/images/banner.svg" width={512} height={418} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
