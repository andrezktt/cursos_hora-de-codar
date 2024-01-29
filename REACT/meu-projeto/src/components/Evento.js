function Evento({numero}) {
    const meuEvento = () => {
        console.log(`${numero} - Opa, fui ativado!`)

    }

    return(
        <div>
            <p>Clique para disparar um evento!</p>
            <button onClick={meuEvento}>Ativar</button>
        </div>
    )
}
export default Evento