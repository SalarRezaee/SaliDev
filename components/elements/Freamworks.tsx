import { freamworks } from "../../lib/data";
import { ServiceBox } from "./";

const Freamworks = () => {
  return (
    <div className="text-center">
      <h1 className="text-white text-lg text-semibold my-12">
        فریمورک ها و زبان های که من کار میکنم!
      </h1>
      <div className="lg:w-8/12 w-full mx-auto text-white">
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-12">
          {freamworks?.map((freamwork) => (
            <ServiceBox
              key={freamwork.id}
              icon={freamwork.icon}
              title={freamwork.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Freamworks;
