 //componente declarado fuera de la app que se reutiliza y renderiza dentro de la app 
export const Square = ({ children, isSelected, updateBoard, index }) => {
const className = `square ${isSelected ? 'is-selected' : ''}`

const handleClick = () =>{
    updateBoard(index)
}
return (
    <div onClick={handleClick} className={className}>
    {children}
    </div>
)
}