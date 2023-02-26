type QuestionProps = {
  question: string;
  alternatives: string[];
  answer: string;
  increasePoints: () => void;
  finishGame: () => void;
};

type AlternativeProps = {
  value: string;
  index: number;
  isCorrect: boolean;
  showRightAnswer: boolean;
  onClick: (index: number) => void;
};
