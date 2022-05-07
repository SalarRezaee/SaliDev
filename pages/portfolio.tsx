import { PortfolioBox } from "../components/elements/";
import { fakeData } from "../lib/data";

const portfolio = () => {
  return (
    <div className="container mx-auto">
      <div className="text-center">
        <h1 className="text-lg text-white text-semibold">
          نمونه کار های من خود گویا همه چیز هستند
        </h1>
        <p className="text-sm text-gray-300 my-3 leading-7 mb-12">
          نمونه کار های من را میتوانید در کادر زیر مشاهده کنید
        </p>
      </div>
      <div className="my-8">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-8">
          {fakeData.map((item) => (
            <PortfolioBox
              image={item.image}
              url={item.url}
              key={item.id}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default portfolio;
