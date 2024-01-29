import Item from './Item'

function Lista() {
    return(
        <>
        <ul>
            <Item marca = 'Chevrolet' lancamento = {2012} />
            <Item marca = 'Fiat' lancamento = {1998} />
            <Item marca = 'Nissan' lancamento = {10}/>
            <Item marca = 'Ford' lancamento = {1000} />
            <Item />
        </ul>
        </>
    )
}
export default Lista