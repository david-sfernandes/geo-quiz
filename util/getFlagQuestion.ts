import getRandomNumber from "./getRandomNumber";

export default function getFlagQuestion(countries:any[]) {
  const randomCountry = countries[getRandomNumber(0, countries.length - 1)];

  return {
    question: randomCountry.flags.svg,
    answer: randomCountry.name.common,
  };
}