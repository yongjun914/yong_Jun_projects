import { useState } from 'react'

const EMPTY_FORM = { title: '', task: '', aiIdea: '' }

function IdeaForm({ onAdd }) {
  const [form, setForm] = useState(EMPTY_FORM)

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    const title = form.title.trim()
    const task = form.task.trim()
    const aiIdea = form.aiIdea.trim()
    if (!title || !task || !aiIdea) return

    onAdd({ title, task, aiIdea })
    setForm(EMPTY_FORM)
  }

  return (
    <form className="idea-form" onSubmit={handleSubmit}>
      <div className="form-field">
        <label htmlFor="title">제목</label>
        <input
          id="title"
          name="title"
          type="text"
          placeholder="예: 회의록 자동 요약"
          value={form.title}
          onChange={handleChange}
        />
      </div>
      <div className="form-field">
        <label htmlFor="task">대상 업무</label>
        <input
          id="task"
          name="task"
          type="text"
          placeholder="예: 주간 회의 진행"
          value={form.task}
          onChange={handleChange}
        />
      </div>
      <div className="form-field">
        <label htmlFor="aiIdea">AI 활용 아이디어</label>
        <textarea
          id="aiIdea"
          name="aiIdea"
          rows={3}
          placeholder="예: 회의 녹음을 STT로 변환한 뒤 LLM으로 핵심 요약과 액션 아이템을 추출"
          value={form.aiIdea}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="submit-button">
        아이디어 추가
      </button>
    </form>
  )
}

export default IdeaForm
