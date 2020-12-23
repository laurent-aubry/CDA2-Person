import React from 'react'

const Person3 = (props) => {

    return (
        <div>
            <p onClick={props.clickMe} >Je m'appelle {props.prenom} {props.nom}. {props.children} </p> 
        </div>
    )
}

export default Person3