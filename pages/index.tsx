import type { NextPage } from "next";
import Head from "next/head";

// components
import { Navbar } from "../components";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>SalarRezaee (FrontEnd Developer)</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mx-auto">
        <Navbar />
      </div>
    </div>
  );
};

export default Home;
