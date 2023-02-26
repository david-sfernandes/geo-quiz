import Link from "next/link";
import Router from "next/router";
import { useState } from "react";
import Alternative from "./alternative";
import Button from "./button";

export default function FlagQuestion({
  question,
  alternatives,
  answer,
  increasePoints,
  finishGame,
}: QuestionProps) {
  const [showAnswer, setShowAnswer] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const handleClick = (index: number) => {
    setShowAnswer(true);
    if (alternatives[index] == answer) {
      setIsCorrect(true);
      increasePoints();
    } else {
      finishGame();
    }
  };
  const router = Router;

  return (
    <>
      <div className="mt-8">
        <img
          className="w-20 mb-7 shadow-xl border-2 border-gray"
          src={question}
          alt="Country flag"
        />
        <h2 className="font-bold text-blue text-md">
          Which country does this flag belong to?
        </h2>
      </div>
      <div className="flex flex-col gap-8 mt-8 mb-6">
        {alternatives.map((alt, index) => (
          <Alternative
            value={alt}
            index={index}
            key={alt}
            isCorrect={alt === answer && showAnswer}
            showRightAnswer={showAnswer}
            onClick={handleClick}
          />
        ))}
      </div>
      {showAnswer && (
        <div className="flex justify-end">
          {isCorrect && <Button text="Next" isOrange onClick={router.reload} />}
          {!isCorrect && <Button text="Next" isOrange href="/results" />}
        </div>
      )}
    </>
  );
}
