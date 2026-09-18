import { useEffect, useState } from 'react'
import './App.css'
import IdeaForm from './components/IdeaForm.jsx'
import IdeaList from './components/IdeaList.jsx'

const STORAGE_KEY = 'ax-board-ideas'

function loadIdeas() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

function App() {
  const [ideas, setIdeas] = useState(loadIdeas)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(ideas))
  }, [ideas])

  function handleAdd({ title, task, aiIdea }) {
    const newIdea = {
      id: crypto.randomUUID(),
      title,
      task,
      aiIdea,
      createdAt: new Date().toISOString(),
    }
    setIdeas((prev) => [newIdea, ...prev])
  }

  function handleDelete(id) {
    setIdeas((prev) => prev.filter((idea) => idea.id !== id))
  }

  return (
    <>
      <header className="app-header">
        <h1>AX 아이디어 보드</h1>
        <p>업무에 AI를 활용할 아이디어를 기록하고 관리하세요.</p>
      </header>
      <IdeaForm onAdd={handleAdd} />
      <IdeaList ideas={ideas} onDelete={handleDelete} />
    </>
  )
}

export default App
