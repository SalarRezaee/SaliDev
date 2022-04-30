import React from "react";
import { FcApproval, FcLike, FcGrid } from "react-icons/fc";
import { ServiceBox } from "../elements";

const servicesData = [
  {
    icon: <FcApproval fontSize={40} />,
    title: "کدنویسی استاندارد",
    description:
      "از مهم ترین اصول کدنویسی، صحیح و تمیز انجام دادن آن است که خوشبختانه من آن را به شما ارائه می‌دهم",
    position: "-right",
  },
  {
    icon: <FcLike fontSize={40} />,
    title: "متدهای محبوب",
    description:
      "من در حین انجام دادن پروژه‌ی شما، از آخرین و محبوب‌ترین متدولوژی‌های موجود در دنیا استفاده می‌کنم",
    position: "-right",
  },
  {
    icon: <FcGrid fontSize={40} />,
    title: "پیاده سازی دقیق",
    description:
      "پس از انجام جادوی کار من، محصولی که تحویل می‌گیرید دقیقا همانی خواهد شد که انتظار داشتید",
    position: "-right",
  },
];

const Services = () => {
  return (
    <div className="lg:w-7/12 mx-auto w-full py-12 pt-2 text-white bg-[#23232A]  rounded-lg my-12 shadow-md">
      <h1 className="text-center text-md mt-3 mb-12">خدماتی که ارائه می‌دهم</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-12">
        {servicesData?.map((service) => (
          <ServiceBox
            key={service.title}
            icon={service.icon}
            title={service.title}
            description={service.description}
            position={service.position}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
