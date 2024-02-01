import React from 'react'

function OutraLista({itens}) {
    return(
        <>
        <h3>Lista e coisas boas:</h3>
        {itens.length > 0 ? (
            itens.map((elemento, index) => (
                <p key={index}>{elemento}</p>
            ))) : (
                <p>Não há nenhum elemento listado!</p>
            )
        }
        </>
    )
}
export default OutraLista