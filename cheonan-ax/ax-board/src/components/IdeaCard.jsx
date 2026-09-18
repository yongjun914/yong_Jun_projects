function formatDate(iso) {
  return new Date(iso).toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

function IdeaCard({ idea, onDelete }) {
  return (
    <li className="idea-card">
      <div className="idea-card-header">
        <h2>{idea.title}</h2>
        <button
          type="button"
          className="delete-button"
          onClick={() => onDelete(idea.id)}
          aria-label="아이디어 삭제"
        >
          삭제
        </button>
      </div>
      <p className="idea-card-task">대상 업무: {idea.task}</p>
      <p className="idea-card-idea">{idea.aiIdea}</p>
      <p className="idea-card-date">{formatDate(idea.createdAt)} 등록</p>
    </li>
  )
}

export default IdeaCard
