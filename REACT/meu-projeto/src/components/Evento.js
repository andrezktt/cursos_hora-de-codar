import Button from './Button'

function Evento() {
    const meuEvento = () => {
        console.log('Ativando o PRIMEIRO evento!')
    }

    const segundoEvento = () => {
        console.log('Ativando o SEGUNDO evento')
    }

    return(
        <div>
            <p>Clique para disparar um evento!</p>
            <Button event={meuEvento} text='Primeiro Evento'/>
            <Button event={segundoEvento} text='Segundo Evento'/>
        </div>
    )
}
export default Evento