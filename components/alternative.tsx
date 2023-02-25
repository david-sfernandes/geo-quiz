import { useState } from "react";

export default function Alternative({ value, index, isCorrect, showRightAnswer ,onClick }: AlternativeProps) {
  const letters = ["A", "B", "C", "D", "E"];
  const [clicked, setClicked] = useState(false);
  
  return (
    <div 
      onClick={() => {
        if(!showRightAnswer) {
          onClick()
          setClicked(true)
        }
      }}
    className={`flex border-2 border-gray text-gray px-3 py-2 rounded-xl w-full 
    defaultTrasition items-center
    ${!showRightAnswer && "hover:text-white hover:bg-orange hover:border-orange"}
    ${isCorrect ? "bg-green border-green text-white" : ""}
    ${(clicked && !isCorrect) ? "bg-red border-red text-white" : ""}`}>
      <p className="text-md">{letters[index]}</p>
      <p className="pl-12 text-sm">{value}</p>
    </div>
  );
}
