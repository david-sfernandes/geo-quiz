import getRandomNumber from "./getRandomNumber";

export default function getCapitalQuestion(countries: any[]) {
  const randomCountry = countries[getRandomNumber(0, countries.length)];

  return {
    question: randomCountry.capital[0],
    answer: randomCountry.name.common,
  };
}
