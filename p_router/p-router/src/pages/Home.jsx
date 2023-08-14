import {Link} from '../Link.jsx'

export default function HomePage(){

    return(
      <>
      
      <h2>Home</h2>
      <p>Esta es una pagina de muestra para crear un React Router</p>
      <Link  to='/about'>Ir a Sobre nosotros</Link>
      <br></br>
      <Link to='/search/:query'>Ir al buscador</Link>
      </>
    )
  }