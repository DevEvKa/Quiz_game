import React, { useState, useEffect } from "react";

//question's data
import textResultsList from "../../data/textResults";
import { totalQuestionsNumber } from "../../data/questions";

//styles
import { FinalResult, Score, Description } from './styles';


interface resultPageProps {
    count: number,
}

const ResultPage: React.FC<resultPageProps> = ({ count }) => {
    const [resultRightQuestionCount, setResultRightQuestionCount] = useState(0);
    const [textResult, setTextResult] = useState('');
    const [currentWordsDeclension, setCurrentWordsDeclension] = useState('');

    const wordsDeclensionvalues: string[] = ['верный ответ', 'верных ответа', 'верных ответов'];

    const getDeclension = (score: number, wordsAarray: string[]) => {
        score = Math.abs(score) % 100;
        var score1 = score % 10;
        if (score > 10 && score < 20) { return wordsAarray[2]; }
        if (score1 > 1 && score1 < 5) { return wordsAarray[1]; }
        if (score1 == 1) { return wordsAarray[0]; }
        return wordsAarray[2];
    }


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