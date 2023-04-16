import { useState } from "react"

// los hooks permiten añadir funcionalidad a los componentes sde react
// o poder ejecutar codigo arbitrario cuando se ejecutan ciertas cosas en los componentes

export function TwitterFollowCard( { userName, children }) {
    const [isFollowing, setIsFollowing] = useState(false)
    // =
    // en este caso usamos el USESTATE para guardar una variable que nos diga si estamos siguiendo o no a la persona
    // const state = useState(false) // false es el valor por defecto que le damos en este caso
    // const isFollowing = state[0]
    // const setIsFollowing = state[1]
    
    
    
    const text = isFollowing ? 'Siguiendo' : 'Seguir'

    const buttonClassName = isFollowing 
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button' 

    // const addAt = (userName) => `@${userName}`
    const imageSrc =  `https://unavatar.io/twitter/${userName}`

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return(
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img
                    alt="El avatar" 
                    src={imageSrc}
                    className="tw-followCard-avatar"/>
                <div className="tw-followCard-info">
                    <strong>{children}</strong>
                    <span className="tw-followCard-user">@{userName}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className="tw-followCard-text">{text}</span>
                    <span className="tw-followCard-stopFollow">Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}


//si yo quisiera traer el user pero sin agg yo mismo el "@"
//puedo usar la sig función:
// const addAt = (userName) => `@${userName}`

// QUE ES UN ESTADO?
// En React, un estado es