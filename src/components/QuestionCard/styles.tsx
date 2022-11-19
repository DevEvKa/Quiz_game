import styled from "styled-components";
import { btnStyles } from "../../styles/mixins";


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.5em 0.5em;
`;

export const Score = styled.p`
    padding: 1em 0.5em;
    font-size: 1.5rem;
    font-weight: 600;
    align-self: flex-start;
`;

export const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0 0.5em 1em 0.6em;
`;

export const QuestionText = styled.p`
    padding: 0.2em 0;
    font-size: 1.5rem;
    line-height: 1.5;
`;

export const AnswerText = styled.li`
    display: flex;
    position: relative;
    padding: 0.3em 0;
    font-size: 1.4rem;
    line-height: 1.5;
    &:last-child {
        padding-bottom: 1.5em;
      }
`;

export const AnswerLabel = styled.label`
    display: flex;
    position: relative;
    align-items: center;

    &:before {
        content: '';
        width: 1.1em;
        height: 1.1em;
        display: inline-block;
        margin-right: 1em;
        border: 2px solid #FFF;
        border-radius: 100%;
    }
    &:after {
        content: '';
        position: absolute;
        left: 0.37em;
        top: 50%;
        transform: translateY(-50%);
        width: 0.5em;
        height: 0.5em;
        background-color: #FFF;
        border-radius: 100%;
        opacity: 0;
    }
`;

export const AnswerRadio = styled.input<{ checkedMarkOpacity: number }>`
    position: absolute;
    width: 1px;
    height: 1px;
    opacity: 0;

    &:checked {
        & ~ ${AnswerLabel}::after {
            opacity: ${props => props.checkedMarkOpacity};
        }
    }
`;



export const SubmitBtn = styled.button`
    ${btnStyles};
`;

export const Result = styled.p`
    display: flex;
    padding: 1em 0;
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 1.5;
`;

export const QuestionInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.2em 0;
    font-size: 1.5rem;
    line-height: 1.5;
`;

export const InfoImage = styled.img`
    height: auto;
    width: 100%;
    max-width: 800px;

`;
InfoImage.defaultProps = {
    src: '',
    alt: '',
};

export const InfoFact = styled.p`
    padding: 1em 0 1.2em 0;
    font-size: 1.5rem;
    line-height: 1.5;
    text-align: center;
`;

export const NextQuestionBtn = styled.button`
    ${btnStyles};
`;