'use client'

import { useContext } from 'react'
import { EditorContext } from '@/contexts/Editor'

const Form = () => {
  const { content, changeResult } = useContext(EditorContext)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const data = new FormData(event.target as HTMLFormElement)
    const formData = Object.fromEntries(data.entries())
    changeResult(formData)
  }
  
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input type="text" name="nome" />
      <input type="text" name="sobrenome" />
      <input type="text" name="editor" defaultValue={content} style={{ display: 'none' }} />
      <button type="submit">Enviar</button>
    </form>
  )
}

export default Form