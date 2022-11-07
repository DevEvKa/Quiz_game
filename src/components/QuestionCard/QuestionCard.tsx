import React, { useState, useEffect } from "react";

//question's data
import Questions from "../../data/questions";
import { images } from '../../data/images';
import { totalQuestionsNumber } from "../../data/questions";


interface QuestionCardProps {
    questionsNumberArr: number[],
    onChange: (count: number, status: string) => void,
}

const QuestionCard: React.FC<QuestionCardProps> = ({ questionsNumberArr, onChange }) => {

    //вспомогательные
    let questionsListLength: number = questionsNumberArr.length;

    const [questionNumber, setQuestionNumber] = useState(1);
    const [userAnswer, setUserAnswer] = useState('');
    const [answerResult, setAnswerResult] = useState('');
    const [rightAnswersCount, setRightAnswersCount] = useState(0);

    //кнопка
    const [continueButtonText, setContinueButtonText] = useState('Продолжить');

    //состояние игры
    let gameStatus = 'in progress';


    //состояния для параметров вопроса
    const [currentQuestion, setCurrentQuestion] = useState<{
        id: number,
        text: string,
        answers: string[],
        correctAnswer: string,
        image?: string,
        fact?: string,
    }>({ id: questionsNumberArr[0], text: '', answers: [], correctAnswer: '', image: '', fact: '', });



    //получаем вопрос
    const getQuestion = (number: number) => {

        let currentQuestionNumber = questionsNumberArr[number];
        setCurrentQuestion(Questions[currentQuestionNumber - 1]);
    }


    useEffect(() => {
        let firstQuestionNumber = questionsNumberArr[0];
        setCurrentQuestion(Questions[firstQuestionNumber - 1]);
    }, []);



    //обрабатываем подтверждение ответа
    const submitAnswer = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault();

        //проверяем правильность ответа
        if (currentQuestion.correctAnswer === userAnswer) {
            setRightAnswersCount(rightAnswersCount + 1);
            setAnswerResult('Верно! :)');
        } else {
            setAnswerResult('Неверно :(');
        }

        //открываем блоки с ответом и доп.информацией по вопросу
        const questionResult = document.querySelector('.question__result');
        const questionInfo = document.querySelector('.question__info');
        questionResult?.classList.remove('hidden');
        questionInfo?.classList.remove('hidden');
    }

    //отображаем следующий вопрос
    const nextQuestion = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault();

        //увеличиваем значение счетчика вопросов
        if (questionNumber < questionsListLength) {
            getQuestion(questionNumber);
            setQuestionNumber(questionNumber + 1);
            if (questionNumber === questionsListLength - 1) {
                setContinueButtonText('Завершить игру');
            }
        } else {
            const questionForm = document.querySelector('.question__form');
            const questionScore = document.querySelector('.question__score');
            questionForm?.classList.add('hidden');
            questionScore?.classList.add('hidden');
            gameStatus = "finished";
        }
        //
        //закрываем блоки с ответом и доп.информацией по вопросу
        const questionResult = document.querySelector('.question__result');
        const questionInfo = document.querySelector('.question__info');
        questionResult?.classList.add('hidden');
        questionInfo?.classList.add('hidden');
    }

    const passCount = () => {
        onChange(rightAnswersCount, gameStatus);
    }


    return (
        <div className="question">
            <div className="question__score score">
                <p className="score__display">Score: {questionNumber}/{totalQuestionsNumber}</p>
            </div>
            <form className="question__form">
                <p className="question__text">{currentQuestion.text}</p>
                <div>
                    <input className="question__answer-radio" onChange={(e: React.ChangeEvent<HTMLInputElement>): void => setUserAnswer(currentQuestion.answers[0])} type="radio" id="questionChoice1"
                        name="answer" value="true" />
                    <label className="question__answer-label" htmlFor="questionChoice1">{currentQuestion.answers[0]}</label>

                    <input className="question__answer-radio" onChange={(e: React.ChangeEvent<HTMLInputElement>): void => setUserAnswer(currentQuestion.answers[1])} type="radio" id="questionChoice2"
                        name="answer" value="false" />
                    <label className="question__answer-label" htmlFor="questionChoice2">{currentQuestion.answers[1]}</label>

                    <input className="question__answer-radio" onChange={(e: React.ChangeEvent<HTMLInputElement>): void => setUserAnswer(currentQuestion.answers[2])} type="radio" id="questionChoice4"
                        name="answer" value="false" />
                    <label className="question__answer-label" htmlFor="questionChoice4">{currentQuestion.answers[2]}</label>

                    <input className="question__answer-radio" onChange={(e: React.ChangeEvent<HTMLInputElement>): void => setUserAnswer(currentQuestion.answers[3])} type="radio" id="questionChoice3"
                        name="answer" value="false" />
                    <label className="question__answer-label" htmlFor="questionChoice3">{currentQuestion.answers[3]}</label>
                </div>
                <div>
                    <button type="submit" className="submitAnswer btn" onClick={submitAnswer}>Ответить</button>
                </div>
            </form>

            <div className="question__result hidden">
                <p>{answerResult}</p>
            </div>

            <div className="question__info hidden">

                {currentQuestion.fact && <p className="question__fact">{currentQuestion.fact}</p>}

                <div className="nextQuestion">
                    <button type="submit" className="nextQuestion btn" onClick={(e) => { nextQuestion(e); passCount(); }} >{continueButtonText}</button>
                </div>
            </div>



        </div>
    );
}
export default QuestionCard;

// {questionImage && <img src={require({ questionImage })} alt={images[0].alt} className="question__image object-cover h-48 w-96" />}
//{currentQuestion.fact && <img src={require({ currentQuestion.fact })} alt={images[0].alt} className="question__image object-cover h-48 w-96" />}
