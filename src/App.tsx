import React, { useState, useEffect } from "react";

//component imports
import Header from "./components/Header/Header";
import QuestionCard from "./components/QuestionCard/QuestionCard";
import ResultPage from "./components/ResultPage/ResultPage";

//question's data
import Questions from "./data/questions";
import { totalQuestionsNumber } from './data/questions'

//types
import { QuestionProps } from "./data/questions";



export default function App() {

  const [gameStatus, setGameStatus] = useState("on start");
  const [resultValue, setResultValue] = useState(0);

  //начинаем игру, изменяя состояние игры на "in progress", по клику на кнопку "StartGame" компонента Header
  const startGame = () => {
    setGameStatus("in progress");
  }


  //вопросы
  let questionsListLength: number = Questions.length;
  const [questionsNumberArr, setQestionsNumberArr] = useState<number[]>([]);
  let randomQuestionNumber: number = 1;

  //генерируем рандомный номер вопроса для выдачи
  function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }

  //генерируем рандомные числа
  function getRandomQuestionNumber() {
    randomQuestionNumber = getRandomInt(questionsListLength) + 1;
  }

  //получаем массив рандомных чисел
  function getRandomQuestionsNumberArr() {
    let i = 0;
    let tempArr: number[] = [];
    while (i < totalQuestionsNumber) {
      getRandomQuestionNumber();
      if (!tempArr.includes(randomQuestionNumber)) {
        tempArr.push(randomQuestionNumber);
        i++;
      } else {
        getRandomQuestionNumber();
      }
      setQestionsNumberArr(tempArr);
    }
  }


  useEffect(() => {
    getRandomQuestionsNumberArr();
  }, []);


  const passCount = (count: number, status: string) => {
    setResultValue(count);
    setGameStatus(status);
  }

  return (
    <div className="App">
      <div className="container mx-auto max-w-2xl pt-5">
        <Header gameStatus={gameStatus} startGame={startGame} />
        {gameStatus === "in progress" && <QuestionCard onChange={passCount} questionsNumberArr={questionsNumberArr} />}
        {gameStatus === "finished" && <ResultPage count={resultValue} />}
      </div>
    </div>
  );
}

