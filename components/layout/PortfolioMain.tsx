import { Button } from "../elements";
import PortfolioBox from "../elements/PortfolioBox";
const fakeData = [
  {
    id: 1,
    title: "formik",
    image: "/images/portfolio.png",
    url: "/",
    description:
      "احتمالا این اتفاق برایتان افتاده است که در حساب و کتاب‌هایی که داشته اید، اشتباهی انجام دهید و همه چیز به هم بریزد. برای مشکل شما محصولی طراحی و ارائه کردیم که می‌تواند تمام ...حساب هایتان را",
  },
  {
    id: 2,
    title: "formik",
    image: "/images/portfolio.png",
    url: "/",
    description:
      "احتمالا این اتفاق برایتان افتاده است که در حساب و کتاب‌هایی که داشته اید، اشتباهی انجام دهید و همه چیز به هم بریزد. برای مشکل شما محصولی طراحی و ارائه کردیم که می‌تواند تمام ...حساب هایتان را",
  },
  {
    id: 3,
    title: "formik",
    image: "/images/portfolio.png",
    url: "/",
    description:
      "احتمالا این اتفاق برایتان افتاده است که در حساب و کتاب‌هایی که داشته اید، اشتباهی انجام دهید و همه چیز به هم بریزد. برای مشکل شما محصولی طراحی و ارائه کردیم که می‌تواند تمام ...حساب هایتان را",
  },
];

const PortfolioMain = () => {
  return (
    <div className="my-8">
      <div className="flex lg:flex-row flex-col items-center justify-between text-white">
        <p className="text-white mt-8 lg:my-0 my-3">
          سطح تخصص من از کارهایی که انجام داده‌ام مشخص می‌شود
        </p>
        <Button title="نمایش همه" url="/portfolio" />
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

export default PortfolioMain;
