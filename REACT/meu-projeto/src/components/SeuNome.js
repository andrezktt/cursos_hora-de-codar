import React from 'react'

function SeuNome({nome, setNome}) {
    return(
        <div>
            <h2>Qual é o seu nome?</h2>
            <input type='text' placeholder='Digite o seu nome...' onChange={(elemento) => setNome(elemento.target.value)}></input>
        </div>
    )
}

export default SeuNome