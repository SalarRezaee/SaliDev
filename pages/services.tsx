import { servicesData } from "../lib/data";
import { ServiceBox, Freamworks } from "../components/elements";

const services = () => {
  return (
    <div className="w-full container mx-auto">
      <div className="text-center">
        <h1 className="text-lg text-white text-semibold">
          با خدمات من آشنا شوید
        </h1>
        <p className="text-sm text-gray-300 my-3 leading-7 mb-12">
          من میدانم که کیفیت و سرعت انجام پروژه ها یک فاکتور بسیار مهم محسوب
          <br /> سعی میکنم در کمترین زمان ممکن بهترینم را به شما ارائه میشود.
        </p>

        <div className="lg:w-8/12 w-full mx-auto text-white">
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-12">
            {servicesData?.map((service) => (
              <ServiceBox
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="my-12">
        <Freamworks />
      </div>
    </div>
  );
};

export default services;
