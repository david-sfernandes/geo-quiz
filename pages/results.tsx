import Head from "next/head";
import Button from "../components/button";
import Layout from "../components/layout";

export default function Result() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Head>
        <title>Results | Geo Quiz</title>
      </Head>
      <Layout showTopImg={false}>
        <section className="mainSection text-blue text-center pb-10 w-full">
          <div className="flex flex-col mb-16">
            <img className="w-60 m-auto mb-16" src="/assets/undraw_winners_ao2o 2.svg" alt="Trophy" />
            <h1 className="text-xl font-bold">Results</h1>
            <p className="text-xs">You got <span className="text-xl text-green">1</span> correct answers</p>
          </div>
          <Button text="Try again" href="/"/>
        </section>
      </Layout>
    </div>
  );
}
