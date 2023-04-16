import React from 'react'
import './App.css'
import { TwitterFollowCard } from "./TwitterFollowCard";


const users = [
   
    {
        userName: "sudanalytics",
        name: 'Sudanalytics',
        isFollowing: true,
        age: 21
    },
    {
        userName: "pepecai14",
        name: 'pepe',
        isFollowing: true,
        age: 22
    },
    {
        userName: "9zTeam",
        name: '9z Team',
        isFollowing: false,
        age: 24
    },
    {
        userName: "Nicki_Nicole19",
        name: 'naiki',
        isFollowing: true,
        age: 24
    }
]
export function App (){
    // const userName = (userName) => `@${userName}`

    //renderizado de listas (en este ej de users)
    // mapeamos el arreglo de usuarios, de cada user extraemos la info necesaria
    // en este caso, esas 3 props, luego retornamos la card renderizada
    return(
        <section className='App'>
        { 
            users.map(user =>{
                const { userName, name, isFollowing }  = user
                return (
                    <TwitterFollowCard
                        key={userName} //para usar una key debemos establecer un valor que sea unico y no variable.
                        userName = {userName}
                        name = {name}
                        initialIsFollowing = {isFollowing}
                    >
                        {name}
                    </TwitterFollowCard>
                )
            })
        }
        </section>
    )
}

// Cual es la diferencia entre un componente y un elemento?
// Un componente es una factoria de elemento, podria ser una funcion que al ejecutarla
// te devuelva un elemento.
// Entonces, el componente es la factoria del elemento y el elemento es lo que React



//OTRA MANERA MAS FACIL DE RENDERIZAR UNA LSITA DE USERS
// { 
//     users.map(({ userName, name, isFollowing }) => (
//             <TwitterFollowCard
//                 userName = {userName}
//                 name = {name}
//                 initialIsFollowing = {isFollowing}
//             >
//                 {name}
//             </TwitterFollowCard>
//     })
// }