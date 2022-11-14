import React, { useState } from "react";

//styles
import { Container, Title, Text, StartButton } from './styles';


interface IHeaderProps {
    gameStatus: string,
    startGame: () => void,
}



const Header: React.FC<IHeaderProps> = ({ gameStatus, startGame }: IHeaderProps) => {

    //скрываем кнопку по клику на нее
    const hideStartBtn = () => {
        const startBtn = document.querySelector('.header__startBtn');
        startBtn?.classList.add('hidden');
        console.log('dsfghj')
    }

    return (
        <Container>
            <Title>Вы киноман или любитель?</Title>
            <Text>Пройдите наш тест, и вы сможете не только проверить собственные знания, но и узнать занимательные факты о кино.</Text>
            <StartButton onClick={() => { startGame(); hideStartBtn(); }}>Начать игру</StartButton>
        </Container>

    );
}
export default Header;
