import React, {useState} from 'react'
import styles from '../projects/ProjectForm.module.css'

import Input from '../form/Input'
import Submit from '../form/Submit'

function ServiceForm({handleSubmit, btnText, projectData}) {
  const [service, setService] = useState({})

  function submit(event) {
    event.preventDefault()
    projectData.services.push(service)
    handleSubmit(projectData)
  } 

  function handleChange(event) {
    setService({...service, [event.target.name]: event.target.value})
  }

  return (
    <form onSubmit={submit} className={styles.form}>
    <Input 
    type='text' 
    text='Nome do Serviço'
    name='name'
    placeholder='Insira o nome do serviço'
    handleOnChange={handleChange} />

    <Input 
    type='number' 
    text='Custo do Serviço'
    name='cost'
    placeholder='Insira o Valor Total'
    handleOnChange={handleChange} />

    <Input 
    type='text' 
    text='Descrição do Serviço'
    name='description'
    placeholder='Descreva o Serviço'
    handleOnChange={handleChange} />
    <Submit text={btnText} />
    </form>
  )
}
export default ServiceForm