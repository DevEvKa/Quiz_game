import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px 10px;
`;

export const Title = styled.h1`
    padding: 30px 0;
    font-size: 2.5rem;
`;

export const Text = styled.p`
    padding: 20px 0;
    font-size: 1.5rem;
    line-height: 1.5;
    text-align: center;
    margin-bottom: 25px;

`;

export const StartButton = styled.button`
    margin-bottom: 10px;
    padding: 20px 35px;
    font-size: 1.5rem;
    color: #000426;
    line-height: 20px;
    background-color: #FFFFFF;
    border: 1px solid #CCCCCC;
    border-radius: 4px;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset;
    transition: border 0.2s linear 0s, box-shadow 0.2s linear 0s;
    cursor:pointer;
    
    &:hover {
        border-color: rgba(82, 168, 236, 0.8);
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(82, 168, 236, 0.6);
        outline: 0 none;
    }
`;