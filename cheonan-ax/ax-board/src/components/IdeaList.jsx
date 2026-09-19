import IdeaCard from './IdeaCard.jsx'

function IdeaList({ ideas, onDelete, onUpdate }) {
  if (ideas.length === 0) {
    return <p className="empty-state">등록된 아이디어가 없습니다. 첫 아이디어를 추가해보세요.</p>
  }

  return (
    <ul className="idea-list">
      {ideas.map((idea) => (
        <IdeaCard key={idea.id} idea={idea} onDelete={onDelete} onUpdate={onUpdate} />
      ))}
    </ul>
  )
}

export default IdeaList
