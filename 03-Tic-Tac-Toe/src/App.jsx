import { checkWinner } from './logic/board'
import { useState } from 'react'
import { WinnerModal } from './components/WinnerModal'
import { TURNS } from './logic/const'
import { Square } from './components/Square'
 // eslint-disable-next-line no-unused-vars
import './App.css'
import './index.css'

import conffeti from 'canvas-confetti'


function App() {

  const [board, setBoard] = useState( () => {
    const boardFromStorage = window.localStorage.getItem('board')
    return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null)
  })

  const [turn, setTurn] = useState(TURNS.X)
  // eslint-disable-next-line no-unused-vars
  const [winner, setWinner] = useState(null)
  
  const resetGame = () =>{
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }

  const updateBoard = (index)=> {
    if (board[index] || winner)return
    const newBoard = [... board]
    newBoard[index] = turn
    setBoard(newBoard)

    //PARA CAMBIAR EL TURNO
    const newTurn = turn == TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
    window.localStorage.setItem('board', JSON.stringify(newBoard))
    window.localStorage.setItem('turn', turn)
    //VERIFICAR SI HAY GANADOR O NO
    const newWinner = checkWinner(newBoard)
      if(newWinner){
        conffeti()
      setWinner(newWinner)
      } else if(!newBoard.includes(null)){
      setWinner(false)
    }
  }

  

  return( 
    <main className='board'>
      <h1>Tic tac toe</h1>
      <button onClick={resetGame}>Restart game</button>

      <section className='game'>
        {
          board.map((_, index) =>{
            return(
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {board[index]}
              </Square>
            )
          })
        }

      </section>
      <section className='turn'>
        <Square isSelected={turn == TURNS.X}> {TURNS.X}</Square>
        <Square isSelected={turn == TURNS.O}>{TURNS.O}</Square>
      </section>
      <WinnerModal resetGame={resetGame} winner={winner} />

    </main>
  
        
  )

}
export default App
