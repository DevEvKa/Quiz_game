import React, { useState, useEffect } from "react";

//question's data
import Questions from "../../data/questions";
import { images } from '../../data/images';
import { totalQuestionsNumber } from "../../data/questions";

//styles
import { Container, Score, Form, QuestionText, AnswerText, AnswerRadio, AnswerLabel, SubmitBtn, Result, QuestionInfo, InfoImage, InfoFact, NextQuestionBtn } from './styles';

//types
import { QuestionCardProps } from "../../types";

const QuestionCard: React.FC<QuestionCardProps> = ({ questionsNumberArr, onChange }) => {

    //вспомогательные
    let questionsListLength: number = questionsNumberArr.length;

    const [questionNumber, setQuestionNumber] = useState(1);
    const [userAnswer, setUserAnswer] = useState('');
    const [answerResult, setAnswerResult] = useState('');
    const [rightAnswersCount, setRightAnswersCount] = useState(0);
    const [checkedMarkOpacity1, setCheckedMarkOpacity] = useState(1);

    //элементы интерфейса
    const [answerCheckboxAccessibility, setAnswerCheckboxAccessibility] = useState(false);
    const [submitButtonState, setSubmitButtonState] = useState(true);
    const [resultVisibility, setResultVisibility] = useState(false);
    const [questionInfoVisibility, setQuestionInfoVisibility] = useState(false);
    const [nextBtnVisibility, setNextBtnVisibility] = useState(false);

    //QuestionInfo, InfoImage, InfoFact, NextQuestionBtn

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


    //обрабатываем выбор ответа
    const chooseAnswer = (event: any) => {
        setUserAnswer(event.target.value);
        const submitButton = document.querySelector('.submitAnswer');
        if (submitButton) {
            setSubmitButtonState(false);
        }
        setCheckedMarkOpacity(1);
    }


    //обрабатываем подтверждение ответа
    const submitAnswer = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault();

        setAnswerCheckboxAccessibility(true);

        //проверяем правильность ответа
        if (currentQuestion.correctAnswer === userAnswer) {
            setRightAnswersCount(rightAnswersCount + 1);
            setAnswerResult('Верно! :)');
        } else {
            setAnswerResult('Неверно :(');
        }

        //открываем блоки с ответом и доп.информацией по вопросу
        setResultVisibility(true);
        setQuestionInfoVisibility(true);
        setNextBtnVisibility(true);
    }

    //отображаем следующий вопрос
    const nextQuestion = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault();

        //увеличиваем значение счетчика вопросов
        if (questionNumber < questionsListLength) {
            getQuestion(questionNumber);
            setQuestionNumber(questionNumber + 1);

            setCheckedMarkOpacity(0);

            if (questionNumber === questionsListLength - 1) {
                setContinueButtonText('Завершить игру');
            }
        } else {
            gameStatus = "finished";
        }

        setAnswerCheckboxAccessibility(false);

        //закрываем блоки с ответом и доп.информацией по вопросу
        setResultVisibility(false);
        setQuestionInfoVisibility(false);
        setNextBtnVisibility(false);

        setCheckedMarkOpacity(0);
    }

    const passCount = () => {
        onChange(rightAnswersCount, gameStatus);
    }

    return (
        <Container>
            <Score>Score: {questionNumber}/{totalQuestionsNumber}</Score>
            <Form>
                <QuestionText>{currentQuestion.text}</QuestionText>
                <ul>
                    <AnswerText>
                        <AnswerRadio checkedMarkOpacity={checkedMarkOpacity1} onClick={(event) => chooseAnswer(event)} type="radio" id="questionChoice1"
                            value={currentQuestion.answers[0]} name="answer" disabled={answerCheckboxAccessibility} />
                        <AnswerLabel htmlFor="questionChoice1">{currentQuestion.answers[0]}</AnswerLabel>
                    </AnswerText>
                    <AnswerText>
                        <AnswerRadio checkedMarkOpacity={checkedMarkOpacity1} onClick={(event) => chooseAnswer(event)} type="radio" id="questionChoice2"
                            value={currentQuestion.answers[1]} name="answer" disabled={answerCheckboxAccessibility} />
                        <AnswerLabel htmlFor="questionChoice2">{currentQuestion.answers[1]}</AnswerLabel>
                    </AnswerText>
                    <AnswerText>
                        <AnswerRadio checkedMarkOpacity={checkedMarkOpacity1} onClick={(event) => chooseAnswer(event)} type="radio" id="questionChoice4"
                            value={currentQuestion.answers[2]} name="answer" disabled={answerCheckboxAccessibility} />
                        <AnswerLabel htmlFor="questionChoice4">{currentQuestion.answers[2]}</AnswerLabel>
                    </AnswerText>
                    <AnswerText>
                        <AnswerRadio checkedMarkOpacity={checkedMarkOpacity1} onClick={(event) => chooseAnswer(event)} type="radio" id="questionChoice3"
                            value={currentQuestion.answers[3]} name="answer" disabled={answerCheckboxAccessibility} />
                        <AnswerLabel htmlFor="questionChoice3">{currentQuestion.answers[3]}</AnswerLabel>
                    </AnswerText>

                </ul>
                <SubmitBtn type="submit" className="submitAnswer btn" onClick={submitAnswer} disabled={submitButtonState} >Ответить</SubmitBtn>
            </Form>
            {resultVisibility && <Result>{answerResult}</Result>}
            {questionInfoVisibility &&
                <QuestionInfo>
                    {currentQuestion.image && <InfoImage src={require(`../../images/question_images/${currentQuestion.id}.jpg`)} alt={images[0].alt} />}
                    {currentQuestion.fact && <InfoFact>{currentQuestion.fact}</InfoFact>}
                </QuestionInfo>
            }
            {nextBtnVisibility && <NextQuestionBtn type="submit" onClick={(e) => { nextQuestion(e); passCount(); }} >{continueButtonText}</NextQuestionBtn>}
        </Container>
    );
}

export default QuestionCard;
