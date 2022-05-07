import type { NextPage } from "next";
import Head from "next/head";

// components
import {
  Banner,
  Services,
  AboutMain,
  PortfolioMain,
} from "../components/layout";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>SalarRezaee (FrontEnd Developer)</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mx-auto">
        <Banner />
        <Services />
        <AboutMain />
        <PortfolioMain />
      </div>
    </div>
  );
};

export default Home;
