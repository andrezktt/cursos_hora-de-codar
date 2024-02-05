import React, {useState, useEffect} from 'react'
import styles from './ProjectForm.module.css'
import Input from '../form/Input'
import Select from '../form/Select'
import Submit from '../form/Submit'

function ProjectForm({btnText, handleSubmit, projectData}) {
  const [categories, setCategories] = useState([])
  const [project, setProject] = useState(projectData || {})

  useEffect(() => {
    fetch("http://localhost:5000/categories", {
      method: 'GET',
      headers: {
        'Content-type': 'application/json'
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setCategories(data)
      })
      .catch((err) => console.log(err))
  }, [])

  const submit = (element) => {
    element.preventDefault()
    // console.log(project)
    handleSubmit(project)
  }

  const handleChange = (element) => {
    setProject({...project, [element.target.name]: element.target.value})
  }

  const handleCategory = (element) => {
    setProject({...project, category: {
      id: element.target.value,
      name: element.target.options[element.target.selectedIndex].text,
    },})
  }

  return(
    <form onSubmit={submit} className={styles.form}>
      <Input 
      required
      type='text' 
      text='Nome do Projeto' 
      name='name' 
      placeholder='Insira o nome do projeto'
      handleOnChange={handleChange}
      value={project.name ? project.name : ''} />

      <Input 
      required
      type='number' 
      text='Orçamento do Projeto' 
      name='budget' 
      placeholder='Insira o orçamento do projeto'
      handleOnChange={handleChange}
      value={project.budget ? project.budget : ''} />
      
      <Select 
      name='category_id' 
      text='Selecione a categoria'
      options = {categories}
      handleOnChange={handleCategory}
      value={project.category ? project.category.id : ''} />
      
      <Submit text={btnText}/>
    </form>
  )
}
export default ProjectForm