import React, { useState } from "react";

//styles
import { Container, Title, Text, StartButton } from './styles';

//types
interface IHeaderProps {
    gameStatus: string,
    startGame: () => void,
}


const Header: React.FC<IHeaderProps> = ({ gameStatus, startGame }: IHeaderProps) => {

    const [TextVisibility, setTextVisibility] = useState(true);
    const [StartButtonVisibility, setStartButtonVisibility] = useState(true);


    //скрываем кнопку и текст по клику на кнопку
    const hideStartBtn = () => {
        setTextVisibility(false);
        setStartButtonVisibility(false);
    }

    return (
        <Container>
            <Title>Вы киноман или любитель?</Title>
            {TextVisibility && <Text>Пройдите наш тест, и вы сможете не только проверить собственные знания, но и узнать занимательные факты о кино.</Text>}
            {StartButtonVisibility && <StartButton onClick={() => { startGame(); hideStartBtn(); }}>Начать игру</StartButton>}
        </Container>

    );
}
export default Header;
