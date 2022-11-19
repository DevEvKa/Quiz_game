import React, { useState, useEffect } from "react";

//question's data
import textResultsList from "../../data/textResults";
import { totalQuestionsNumber } from "../../data/questions";
import { getDeclension } from "../../utils";

//styles
import { FinalResult, Score, Description } from './styles';

//types
import { resultPageProps } from "../../types";


const ResultPage: React.FC<resultPageProps> = ({ count }) => {
    const [resultRightQuestionCount, setResultRightQuestionCount] = useState(0);
    const [textResult, setTextResult] = useState('');
    const [currentWordsDeclension, setCurrentWordsDeclension] = useState('');

    const wordsDeclensionvalues: string[] = ['верный ответ', 'верных ответа', 'верных ответов'];

    useEffect(() => {
        setResultRightQuestionCount(count);
        setCurrentWordsDeclension(getDeclension(count, wordsDeclensionvalues));
        getResult();
    }, [count]);

    const getResult = () => {
        let correctAnswerPercentage: number = count / totalQuestionsNumber * 100;
        for (let resultObj of textResultsList) {
            if (correctAnswerPercentage >= resultObj.minValue && correctAnswerPercentage <= resultObj.maxValue) {
                setTextResult(resultObj.text);
            }
        }
    }

    return (
        <FinalResult>
            <Score>Ваш результат: {resultRightQuestionCount} {currentWordsDeclension}</Score>
            <Description>{textResult}</Description>
        </FinalResult>
    );
}
export default ResultPage;