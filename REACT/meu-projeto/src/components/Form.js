import React, {useState} from 'react'

function Form() {
    const cadastrarUsuario = (e) => {
        e.preventDefault()
        console.log(`Usuário: ${name}`)
        console.log(`Senha: ${password}`)
    } 
    const [name, setName] = useState()
    const [password, setPassword] = useState()

    return(
        <div>
            <h3>Meu Cadastro</h3>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor='name'>Nome:</label>
                    <input 
                    id='name' 
                    name='name' 
                    type = 'text' 
                    placeholder = 'Digite o seu nome' 
                    onChange={(e) => setName(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor='password'>Senha:</label>
                    <input 
                    id='password' 
                    name='password' 
                    type = 'password' 
                    placeholder = 'Digite sua senha' 
                    onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div>
                    <input type = 'submit' value = 'Cadastrar' />
                </div>
            </form>
        </div>
    )
}
export default Form