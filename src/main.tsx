import React from 'react'
import { createRoot } from 'react-dom/client'
import { useState } from 'react'
import './index.css'

function App() {
  const [comment, setComment] = useState("")
  const addInNotion = () => {
    chrome.runtime.sendMessage({ action: "addInNotion", comment: comment }, response => {
      console.log(response)
    })
  }
  return (
    <>
      <input value={comment} onChange={e => setComment(e.target.value)} />
      <button onClick={addInNotion}>Add in Notion</button>
    </>
  )
}

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
