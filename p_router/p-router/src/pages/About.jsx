import {Link} from '../Link.jsx'

export default function AboutPage(){
    return(
      <>
      
      <h2>About</h2>
      <div>
      <img src="https://media.licdn.com/dms/image/C5603AQF_RKpldVTl5w/profile-displayphoto-shrink_200_200/0/1661314479011?e=1696464000&v=beta&t=o-SAuIjnEM2ptTrvh_SffYogky-fezRx0AxpBEfaCJc" alt="pp" />
      <p>Hola! Soy Francisco y estoy creando un clon de React Router.</p>
      </div>
      <Link to='/'>Ir al Home</Link>
      </>
    )
  }