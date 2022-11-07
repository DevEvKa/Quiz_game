import React, { useState, useEffect } from "react";

//question's data
import textResultsList from "../../data/textResults";
import { totalQuestionsNumber } from "../../data/questions";

interface resultPageProps {
    count: number,
}

const ResultPage: React.FC<resultPageProps> = ({ count }) => {
    const [resultRightQuestionCount, setResultRightQuestionCount] = useState(0);
    const [textResult, setTextResult] = useState('');


    useEffect(() => {
        setResultRightQuestionCount(count);
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
        <div className="result">
            <p className="result__score">Ваш результат: {resultRightQuestionCount} верных ответов</p>
            <p>{textResult}</p>
        </div>
    );
}
export default ResultPage;