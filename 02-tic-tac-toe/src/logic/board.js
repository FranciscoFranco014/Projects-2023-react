import { WINNER_COMBOS } from "./const"

export const checkWinner = (boardToCheck) =>{
    //revisamos todas las combs ganadoras para ver si X u O gano
    for (const combo of WINNER_COMBOS){
    const [a, b, c] = combo
    if(boardToCheck[a] && boardToCheck[a] == boardToCheck[b] && boardToCheck[a] == boardToCheck[c]){
        return boardToCheck[a]
    }
    }
    //si no hay ganador
    return null
}

