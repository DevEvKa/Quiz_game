import styled from "styled-components";
import { btnStyles } from "../../styles/mixins";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.5em 0.5em;
`;

export const Title = styled.h1`
    padding: 0.3em 0;
    font-size: 2.5rem;
    font-weight: 600;
    text-align: center;
`;

export const Text = styled.p`
    padding: 0.5em 0;
    font-size: 1.5rem;
    line-height: 1.5;
    text-align: center;
    margin-bottom: 1em;

`;

export const StartButton = styled.button`
    ${btnStyles};
`;