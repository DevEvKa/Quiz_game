//Header
export interface IHeaderProps {
    gameStatus: string,
    startGame: () => void,
}

//QuestionCard
export interface QuestionCardProps {
    questionsNumberArr: number[],
    onChange: (count: number, status: string) => void,
}


//ResultPage
export interface resultPageProps {
    count: number,
}




export interface HeaderProps {
    score: number,
}