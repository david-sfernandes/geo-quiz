import getCapitalQuestion from "./getCapitalQuestion";
import getFlagQuestion from "./getFlagQuestion";

export default function getQuestionByType(countries: any[], type: string) {
  let question = {question: "", answer: ""};
  if (type === "capital") question = getCapitalQuestion(countries);
  if (type === "flag") question = getFlagQuestion(countries);
  return question;
}
