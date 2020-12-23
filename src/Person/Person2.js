import React from 'react'

const Person2 = (props) => {

    return (
        <div>
            <p>Je m'appelle {props.prenom} {props.nom}. {props.children} </p> 
        </div>
    )

}

export default Person2;