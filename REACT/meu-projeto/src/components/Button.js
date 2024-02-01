import React from 'react'

function Button(props) {
    const buttonCSS = {
        backgroundColor: '#3b5998',
        color: '#fff',
        padding: '8px 16px',
        border: 'none',
        borderRadius: '5px',
        margin: '0px 5px'
    }
    return(
        <button onClick={props.event} style={buttonCSS}>{props.text}</button>
    )
}
export default Button