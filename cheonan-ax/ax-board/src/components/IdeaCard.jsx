import { useState } from 'react'

function formatDate(iso) {
  return new Date(iso).toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

function IdeaCard({ idea, onDelete, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false)
  const [draft, setDraft] = useState({ title: idea.title, task: idea.task, aiIdea: idea.aiIdea })

  function handleChange(e) {
    const { name, value } = e.target
    setDraft((prev) => ({ ...prev, [name]: value }))
  }

  function startEditing() {
    setDraft({ title: idea.title, task: idea.task, aiIdea: idea.aiIdea })
    setIsEditing(true)
  }

  function cancelEditing() {
    setIsEditing(false)
  }

  function handleSave(e) {
    e.preventDefault()
    const title = draft.title.trim()
    const task = draft.task.trim()
    const aiIdea = draft.aiIdea.trim()
    if (!title || !task || !aiIdea) return

    onUpdate(idea.id, { title, task, aiIdea })
    setIsEditing(false)
  }

  if (isEditing) {
    return (
      <li className="idea-card">
        <form className="idea-edit-form" onSubmit={handleSave}>
          <input
            name="title"
            type="text"
            value={draft.title}
            onChange={handleChange}
            aria-label="제목"
          />
          <input
            name="task"
            type="text"
            value={draft.task}
            onChange={handleChange}
            aria-label="대상 업무"
          />
          <textarea
            name="aiIdea"
            rows={3}
            value={draft.aiIdea}
            onChange={handleChange}
            aria-label="AI 활용 아이디어"
          />
          <div className="idea-edit-actions">
            <button type="submit" className="save-button">
              저장
            </button>
            <button type="button" className="cancel-button" onClick={cancelEditing}>
              취소
            </button>
          </div>
        </form>
      </li>
    )
  }

  return (
    <li className="idea-card">
      <div className="idea-card-header">
        <h2>{idea.title}</h2>
        <div className="idea-card-actions">
          <button type="button" className="edit-button" onClick={startEditing}>
            수정
          </button>
          <button
            type="button"
            className="delete-button"
            onClick={() => onDelete(idea.id)}
            aria-label="아이디어 삭제"
          >
            삭제
          </button>
        </div>
      </div>
      <p className="idea-card-task">대상 업무: {idea.task}</p>
      <p className="idea-card-idea">{idea.aiIdea}</p>
      <p className="idea-card-date">{formatDate(idea.createdAt)} 등록</p>
    </li>
  )
}

export default IdeaCard
