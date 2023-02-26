import Head from "next/head";
import CapitalQuestion from "../components/capitalQuestion";
import FlagQuestion from "../components/flagQuestion";
import Layout from "../components/layout";
import config from "../config";
import getQuestionByType from "../util/getQuestionByType";
import getRandomNumber from "../util/getRandomNumber";
import mountAlternatives from "../util/mountAlternatives";
import useResultsStore from "../store/store";
import Router, { useRouter } from "next/router";
import { useEffect } from "react";

type HomeProps = {
  question: string;
  answer: string;
  questionType: string;
  alternatives: string[];
};

export default function Question({
  question,
  answer,
  questionType,
  alternatives,
}: HomeProps) {
  const endGame = useResultsStore((state) => state.endGame);
  const increasePoints = useResultsStore((state) => state.increasePoints);
  const finishGame = useResultsStore((state) => state.finishGame);

  useEffect(() => {
    if (endGame) Router.push("results");
  }, []);

  return (
    <Layout pageTitle="Question | Geo Quiz">
      {questionType === "capital" && (
        <CapitalQuestion
          alternatives={alternatives}
          answer={answer}
          question={question}
          increasePoints={increasePoints}
          finishGame={finishGame}
        />
      )}
      {questionType === "flag" && (
        <FlagQuestion
          alternatives={alternatives}
          answer={answer}
          question={question}
          increasePoints={increasePoints}
          finishGame={finishGame}
        />
      )}
    </Layout>
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
