import { useState } from "react"
import confetti from 'canvas-confetti'

import { Square } from "./components/Square.jsx"
import { TURNS} from "./logic/const"
import { checkWinner } from "./logic/board.js"
import { WinnerModal } from "./components/WinnerModal.jsx"



function App() {
  // necesistamos crear un hook con UseState para almacenar y cambiar los valores del turno
  // const [board, setBoard] = useState(Array(9).fill(['x', 'x', 'x', 'o', 'o', 'o', 'x', 'x', 'o']))

  // La forma correcta de [leer el localStorage] es pasandole una funcion y recuperar el 'boardFromStorage'
  // y entonces devolveme si tengo el 'boardFromStorage' un json.parse de el mismo, sino utiliza el valor por defecto
  const [board, setBoard] = useState( () => {
    const boardFromStorage = window.localStorage.getItem('board')
    return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null)
  })
  
  const [turn, setTurn] = useState(TURNS.X)
  const [winner, setWinner] = useState(null)

  
  
  const resetGame = () =>{
    // lo que hay que hacer en esta func es 'SETTEAR los valores del estado 
    // en sus valores iniciales'
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }

  const updateBoard = (index) =>{
    //no actualizamos la pos si ya tiene algo
    if(board[index] || winner) return 
    // actualizar el tablero
    const newBoard = [... board]
    newBoard[index] = turn
    setBoard(newBoard)
    // cambiar el turno
    const newTurn = turn == TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
    //guardar una partida, ((el ultimo movimiento))
    window.localStorage.setItem('board', JSON.stringify(newBoard))
    window.localStorage.setItem('turn', turn)

    //revisar si hay un ganador
    const newWinner = checkWinner(newBoard)
    if(newWinner){
      confetti()
      // alert(`Hay un ganador! El ganador es... ${newWinner} !!!` )
      setWinner(newWinner)
    } else if (!newBoard.includes(null)){
      // en lugar de hacer (!newBoard.includes(null))
      // se puede hacer un (checkEndGame(newBoard)),
      // entonces, se checkea el 'newBoard' si hay ganador o no mediante:
      // return newBoard.every((square) => square != null)
      setWinner(false) // empate
    }
  }

    // const newBoard = [... board]
    // newBoard[0] = turn
    // setBoard(newBoard)
    // setTurn(turn == TURNS.X ? TURNS.O : TURNS.X)
  
  return (

    <main className="board"> 
      <h1>Tic Tac Toe</h1>
      <button onClick={resetGame}>Restart game</button>
      
      <section className="game">
        {
          board.map((_, index) =>{
            return(
              <Square key={index} index={index} updateBoard={updateBoard}>
                {board[index]} 
                {/* aca se van a mostrar por pantalla lo que renderice */}
              </Square>
              // <div className="cell" key={index}>
              //   <span className="cell_content">
              //     {index}
              //   </span>
              // </div>
            )
          })
        }
      </section>
      {/* lo que hacemos aca abajo es cambiar el estado de un componente a traves de un estado padre
      por que? pq cuando el componente padre app tiene estado X/O el componente HIJO se vea de una forma 
      u otra   */}
      <section className="turn">
        <Square isSelected={turn == TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn == TURNS.O}>{TURNS.O}</Square>
      </section>
      
      <WinnerModal resetGame={resetGame} winner={winner} />
      
    </main>
)}

export default App
