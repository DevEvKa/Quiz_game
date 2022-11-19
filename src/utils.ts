//получить склонение слов в результате
export const getDeclension = (score: number, wordsAarray: string[]) => {
    score = Math.abs(score) % 100;
    var score1 = score % 10;
    if (score > 10 && score < 20) { return wordsAarray[2]; }
    if (score1 > 1 && score1 < 5) { return wordsAarray[1]; }
    if (score1 == 1) { return wordsAarray[0]; }
    return wordsAarray[2];
}