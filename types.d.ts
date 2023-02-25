type Question = {
  question: string;
  alternatives: string[];
  answer: string;
};

type AlternativeProps = {
  value: string;
  index: number;
  isCorrect: boolean;
  showRightAnswer: boolean;
  onClick: () => void;
};
