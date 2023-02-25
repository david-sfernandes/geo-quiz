import Head from "next/head";
import CapitalQuestion from "../components/capitalQuestion";
import FlagQuestion from "../components/flagQuestion";
import Layout from "../components/layout";
import config from "../config";
import getQuestionByType from "../util/getQuestionByType";
import getRandomNumber from "../util/getRandomNumber";
import mountAlternatives from "../util/mountAlternatives";

type HomeProps = {
  question: string;
  answer: string;
  questionType: string;
  alternatives: string[];
};

export default function Home({
  question,
  answer,
  questionType,
  alternatives,
}: HomeProps) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Head>
        <title>Geo Quiz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        {questionType === "capital" && (
          <CapitalQuestion
            alternatives={alternatives}
            answer={answer}
            question={question}
          />
        )}
        {questionType === "flag" && (
          <FlagQuestion
            alternatives={alternatives}
            answer={answer}
            question={question}
          />
        )}
      </Layout>
    </div>
  );
}

export async function getServerSideProps() {
  const countries = await fetch(config.getCountryByRegion("europe")).then(
    (res) => res.json()
  );
  const questionType = config.questionTypes[getRandomNumber(0, 1)];
  const { question, answer } = getQuestionByType(countries, questionType);
  const alternatives = mountAlternatives(countries, answer, 4);

  return {
    props: {
      question,
      answer,
      questionType,
      alternatives,
    },
  };
}
