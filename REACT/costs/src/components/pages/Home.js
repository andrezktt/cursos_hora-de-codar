import React from 'react'
import styles from './Home.module.css'
import savings from '../../img/savings.svg'
import LinkButton from '../layout/LinkButton'

function Home() {
    return(
        <section className={styles.home_container}>
            <h1>Bem-Vindo(a) ao <span>Costs!</span></h1>
            <p>Comece a gerenciar os seus projetos agora mesmo!</p>
            <LinkButton to='/newproject' text='Criar Projeto' />
            <img src={savings} alt='Imagem de uma pessoa montada em um cofre de dinheiro em formato de porquinho' />
        </section>
    )
}
export default Home