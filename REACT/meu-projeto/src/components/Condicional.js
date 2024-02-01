import React, {useState} from 'react'

function Condicional() {
    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState('')

    const enviarEmail = (evento) => {
        evento.preventDefault()
        setUserEmail(email)
    }

    const limparEmail = () => {
        setUserEmail('')
    }

    return(
        <div>
            <h3>Cadastre o seu e-mail:</h3>
            <form>
                <input type='email' placeholder='Digite o seu email...' onChange={(evento) => setEmail(evento.target.value)}></input>
                <button type='submit' onClick={enviarEmail}>Cadastrar e-mail</button>
                {userEmail && (
                    <div>
                        <p>O e-mail do usuário é: {userEmail}</p>
                        <button onClick={limparEmail}>Limpar e-mail</button>
                    </div>
                )}
            </form>
        </div>
    )
}
export default Condicional