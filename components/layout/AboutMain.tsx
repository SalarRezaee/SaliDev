import Image from "next/image";
import { HiPhone, HiOutlineMail, HiLocationMarker } from "react-icons/hi";

const AboutMain = () => {
  return (
    <div className="w-full py-1 text-white  rounded-lg  shadow-md">
      <div className="grid lg:grid-cols-2 grid-cols-1 justify-between px-8">
        <div className="lg:text-left text-center my-4">
          <Image
            src="/images/about.svg"
            width={444}
            height={305}
            className="rounded-md"
          />
        </div>
        <div className="my-12 lg:pl-12 mr-2">
          <h1 className="font-semibold mb-8"> درباره‌ی من بیشتر بدانید ...</h1>
          <p className="text-sm text-gray-300 text-justify leading-7">
            از زمان کودکی ام، به تکنولوژی و مکانیزم کاری آن علاقه داشتم. به همین
            دلیل هنگامی که به پیشنهاد یکی از دوستانم با برنامه نویسی آشنا شدم،
            از شدت کنجکاوی طاقت نیاوردم و پس از مدتی کوتاه در دنیای بزرگ برنامه
            نویسی وب غرق شدم و چندی بعد از آن تصمیم .گرفتم تا به صورت حرفه ای در
            این حوزه فعالیت و کسب درآمد کنم
          </p>
          <div className="flex flex-col lg:space-y-0 space-y-8 lg:flex-row items-center justify-between text-sm my-4">
            <span dir="ltr" className="flex items-center justify-center">
              <a href="tel:+989915436114">+98 991 543 6114</a>{" "}
              <HiPhone fontSize={14} className="ml-1 -mt-1" />
            </span>
            <span dir="ltr" className="flex items-center justify-center">
              <a href="mailto:qsalar905@gmail.com">qsalar905@gmail.com</a>{" "}
              <HiOutlineMail fontSize={14} className="ml-1 -mt-1" />
            </span>
            <span dir="ltr" className="flex items-center justify-between">
              ایران تهران
              <HiLocationMarker fontSize={14} className="ml-1 -mt-1" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMain;
