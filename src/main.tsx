import React from 'react'
import { createRoot } from 'react-dom/client'
import { useState } from 'react'
import './index.css'

function App() {
  const [comment, setComment] = useState("")
  const res_data =
    fetch("https://api.notion.com/v1/databases/007d2155cf5e4a7ab5f8e75f0bc3692e", {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${import.meta.env.VITE_NOTION_TOKEN}`,
        "Content-Type": "application/json",
        "Notion-Version": "2022-06-28"
      }
    })
    .then(data => data.json())
    .catch(error => console.error("Error:", error));
  console.log("data",res_data)
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
