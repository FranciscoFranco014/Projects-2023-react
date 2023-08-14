import { Link } from "../Link";

export default function Page404 () {
    return(
        <>
        <div>
            <h1> Algo no funcionó</h1>
            <img src="https://miro.medium.com/v2/0*ZjYSm_q36J4KChdn" />
        </div>
        <Link to='/'>Volver al Home</Link>
        </>
    )
}