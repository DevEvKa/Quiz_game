import React, { useState } from "react";

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
        <div className="header">
            <h1 className="header__title py-10 px-15 text-3xl font-bold">Квиз</h1>
            <button className="header__startBtn btn" onClick={() => { startGame(); hideStartBtn(); }}>Начать игру</button>
        </div>
    );
}
export default Header;
