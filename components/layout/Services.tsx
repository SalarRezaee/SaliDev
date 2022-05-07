import React from "react";
import { ServiceBox } from "../elements";

import { servicesData } from "../../lib/data";

const Services = () => {
  return (
    <div className="lg:w-7/12 mx-auto w-full py-12 pt-2 text-white bg-[#23232A]  rounded-lg my-12 shadow-md">
      <h1 className="text-center text-md mt-3 mb-12">خدماتی که ارائه می‌دهم</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-12">
        {servicesData?.slice(0, 3).map((service) => (
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
