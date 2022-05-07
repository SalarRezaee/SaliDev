import Image from "next/image";
import Link from "next/link";

interface Props {
  url: string;
  image: string;
  title: string;
  description: string;
}

const PortfolioBox = (props: Props) => {
  return (
    <Link href={props.url}>
      <a target="_blank" className="cursor-pointer" rel="noreferrer">
        <div className="flex flex-col">
          <Image
            src={props.image}
            width={352}
            height={262}
            className="rounded-md object-fit"
          />
          <h2 className="text-white text-lg mt-4 mr-3">{props.title}</h2>
          <p className="text-xs leading-7 mb-4 px-3 text-gray-300 text-justify">
            {props.description}
          </p>
        </div>
      </a>
    </Link>
  );
};

export default PortfolioBox;
