import { useState } from "react";
import Alternative from "./alternative";
import Button from "./button";

export default function CapitalQuestion({
  question,
  alternatives,
  answer,
}: Question) {
  const [showAnswer, setShowAnswer] = useState(false);
  const handleClick = () => {
    setShowAnswer(true);
  };

  return (
    <section className="bg-white p-8 rounded-3xl">
      <h2 className="font-bold text-blue text-md mt-8">
        {question} is the capital of
      </h2>
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
          <Button text="Next" isOrange />
        </div>
      )}
    </section>
  );
}
