/* eslint-disable react/prop-types */
import { Square } from "./Square"

export function WinnerModal ( {winner, resetGame}) {
    if (winner == null) return null

    const winnerText = winner == false ? 'You are terrible players, none of you won' : 'The player who won is:'
    return(
        <section className="winner">
        <div className="text">
            <h2>{winnerText}</h2>

            <header className="win"> 
                {winner && <Square>{winner}</Square>}
            </header>
            <footer>
            <button onClick={resetGame}>Restart game</button>
            </footer>

        </div>
        </section>
        )
    
}