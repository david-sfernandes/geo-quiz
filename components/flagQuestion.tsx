import Link from "next/link";
import { useState } from "react";
import Alternative from "./alternative";
import Button from "./button";

export default function FlagQuestion({
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
      <div className="mt-8">
        <img className="w-20 mb-7 shadow-xl border-2 border-gray" src={question} alt="Country flag" />
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
            <Button text="Next" isOrange reload/>
        </div>
      )}
    </section>
  );
}
