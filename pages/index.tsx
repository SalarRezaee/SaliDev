import type { NextPage } from "next";
import Head from "next/head";

// components
import { Navbar, Banner, Services , AboutMain } from "../components/layout";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>SalarRezaee (FrontEnd Developer)</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mx-auto">
        <Navbar />
        <Banner />
        <Services />
        <AboutMain />
      </div>
    </div>
  );
};

export default Home;
