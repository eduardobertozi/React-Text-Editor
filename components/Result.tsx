'use client'
import { useContext } from 'react'
import { EditorContext } from '@/contexts/Editor'

const Result = () => {
  const { result } = useContext(EditorContext)

  return (
    <div>
      <span>Este é o conteúdo: <br />{JSON.stringify(result)}</span>
    </div>
  )
}

export default Result