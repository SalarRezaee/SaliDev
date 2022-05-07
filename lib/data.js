import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiBootstrap,
  SiNextdotjs,
  SiRedux,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";

import {
  FcApproval,
  FcLike,
  FcGrid,
  FcFlashOn,
  FcHeadset,
  FcDatabase,
} from "react-icons/fc";

export const freamworks = [
  {
    id: "1",
    title: "HTML",
    icon: <SiHtml5 color="#e34c26" fontSize={30} />,
  },
  {
    id: "2",
    title: "CSS",
    icon: <SiCss3 color="#546e7a" fontSize={30} />,
  },
  {
    id: "3",
    title: "JavaScript",
    icon: <SiJavascript color="#F0DB4F" fontSize={30} />,
  },
  {
    id: "4",
    title: "Bootsrap",
    icon: <SiBootstrap color="#563d7c" fontSize={30} />,
  },
  {
    id: "5",
    title: "Next JS",
    icon: <SiNextdotjs fontSize={30} />,
  },
  {
    id: "6",
    title: "Redux",
    icon: <SiRedux color="#563d7c" fontSize={30} />,
  },
  {
    id: "7",
    title: "React js",
    icon: <SiReact color="#61dafb" fontSize={30} />,
  },
  {
    id: "8",
    title: "Tailwind css",
    icon: <SiTailwindcss color="#61dafb" fontSize={30} />,
  },
];

export const servicesData = [
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
  {
    icon: <FcFlashOn fontSize={40} />,
    title: "تحویل سریع",
    description: "پروژه شما در در بهترین زمان انجام داده و به دست شما میرسانم",
    position: "-right",
  },
  {
    icon: <FcHeadset fontSize={40} />,
    title: "پشتیبانی همه روزه",
    description: "من بعد از انجام پروژه های شما نیز پشتیبانی را انجام میدهم",
    position: "-right",
  },
  {
    icon: <FcDatabase fontSize={40} />,
    title: "معماری استوار و قوی",
    description:
      "پس از انجام جادوی کار من، محصولی که تحویل می‌گیرید دقیقا همانی خواهد شد که انتظار داشتید",
    position: "-right",
  },
];

export const fakeData = [
  {
    id: 1,
    title: "Weather App",
    image: "/images/weather.png",
    url: "http://weather-eight-phi.vercel.app/",
    description: "اپ هواشناسی با استقاده از ری اکت",
  },
  {
    id: 2,
    title: "Hulu Clone",
    image: "/images/hulu.png",
    url: "https://hulu-clone-iota-peach.vercel.app/",
    description: "کلون سایت hulu با نکست جی اس و استفاده از tmdb api",
  },
  {
    id: 3,
    title: "Shopping Cart",
    image: "/images/shopping card.png",
    url: "https://react-shopping-cart-hazel.vercel.app/",
    description: "سبد خرید با استفاده از react و context Api",
  },
];
