'use client'

import React, { createContext, useState } from 'react'

export const EditorContext = createContext({} as any)

const EditorProvider = ({ children }: { children: React.ReactNode }) => {
  const [content, setContent] = useState('')
  const [result, setResult] = useState()

  const changeContent = (content: string) => {
    setContent(content)
  }

  const changeResult = (result: any) => {
    setResult(result)
  }

  return (
    <EditorContext.Provider value={{ content, changeContent, result, changeResult }}>
      {children}
    </EditorContext.Provider>
  )
}

export default EditorProvider
