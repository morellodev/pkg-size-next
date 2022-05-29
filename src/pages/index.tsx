import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Package Size</title>
        <meta
          name="description"
          content="Package Size helps you find the performance impact of npm packages. Find the size of any JavaScript package and its effect on your frontend bundle."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Package Size</h1>
      </main>
    </>
  );
};

export default Home;
