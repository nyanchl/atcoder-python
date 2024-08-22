import React from 'react'
import { createRoot } from 'react-dom/client'
// import { useState } from 'react'
import './index.css'

function App() {
  // const [proparties, setProparties] = useState("分からん")
  async function fetchData() {
    try {
      const data = await fetch("https://api.notion.com/v1/databases/007d2155cf5e4a7ab5f8e75f0bc3692e", {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${import.meta.env.VITE_NOTION_TOKEN}`,
          "Content-Type": "application/json",
          "Notion-Version": "2022-06-28"
        }
      })

      const res_data = await data.json();
      for (const key in res_data.properties.Status.status.options) {
        console.log(res_data.properties.Status.status.options[key].name)
      }
    } catch (error) {
      console.error("Error:", error)
    }
  }
  fetchData()
  const addInNotion = () => {
    chrome.runtime.sendMessage({ action: "addInNotion"}, response => {
      console.log(response)
    })
  }
  return (
    <>
      <button onClick={addInNotion}>Add in Notion</button>
    </>
  )
}

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
