'use client'

import React, { useContext, useRef, useMemo } from 'react'
import JoditEditor from 'jodit-react'
import { editorConfig } from '@/constants/editor.config'
import { EditorContext } from '@/contexts/Editor'

const Example = () => {
  const editor = useRef(null)
  const { content, changeContent } = useContext(EditorContext)

  const config = useMemo(() => (
    editorConfig
  ), [])

return (
  <JoditEditor
    ref={editor}
    value={content}
    config={config}
    onBlur={newContent => changeContent(newContent)}
    onChange={newContent => changeContent(newContent)}
  />
)
}

export default Example