/* eslint-disable react/prop-types */
import { Link } from "../Link"
import { useEffect } from "react"

export default function SearchPage ({ routesParams }){

    useEffect(() =>{
        document.title = `Has buscado ${routesParams.query}`
    }, [])
    
    return(
        <>
        <div>
         <h1>Has buscado: {routesParams.query} </h1>
    
        </div>
        <Link to='/'>Volver al home</Link>
        </>
    )
}