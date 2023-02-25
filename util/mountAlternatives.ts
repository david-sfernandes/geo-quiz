import getRandomNumber from "./getRandomNumber";

export default function mountAlternatives(
  countries: any[],
  answer: string,
  totalAlternatives: number
) {
  const alternatives: string[] = [answer];

  for (let i = 0; i < totalAlternatives - 1; i++) {
    let alt = countries[getRandomNumber(0, countries.length)].name.common;
    while (alt == answer || alternatives.includes(alt))
      alt = countries[getRandomNumber(0, countries.length)].name.common;
    alternatives.push(alt);
  }

  alternatives.sort((a, b) => 0.5 - Math.random());
  return alternatives;
}
