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

type SignInProps = {
  providers: Record<
    LiteralUnion<BuiltInProviderType, string>,
    ClientSafeProvider
  >;
};

type QuestionPageProps = {
  question: string;
  answer: string;
  questionType: string;
  alternatives: string[];
};

type LayoutProps = {
  children: ReactNode;
  showTopImg?: boolean;
  pageTitle?: string
};