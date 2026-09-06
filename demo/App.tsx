import { useState } from 'react'
import { SoftButton, Tag, NoteCard } from '../src'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="demo-page">
      <header className="demo-header">
        <div className="demo-topline">
          <span className="demo-kicker">SOFT UI · 04 / INTERFACE · 인터페이스</span>
        </div>
        <h1>조금 더 부드러운 기본값 · Softer defaults</h1>
        <p>차분한 색과 분명한 상태를 공유하는 세 가지 React 컴포넌트입니다. / Three React components sharing calm color and explicit state.</p>
      </header>

      <section className="demo-section">
        <h2>SoftButton · 부드러운 버튼</h2>
        <div className="demo-row">
          <SoftButton variant="primary" onClick={() => setCount((current) => current + 1)}>클릭 {count} · Click {count}</SoftButton>
          <SoftButton variant="outline" onClick={() => setCount(0)}>초기화 · Reset</SoftButton>
        </div>
      </section>

      <section className="demo-section">
        <h2>Tag · 작은 상태 라벨</h2>
        <div className="demo-row">
          <Tag tone="wine">작은 시도 · small attempt</Tag>
          <Tag tone="muted">계속 배우는 중 · still learning</Tag>
        </div>
      </section>

      <section className="demo-section">
        <h2>NoteCard · 메모 카드</h2>
        <NoteCard title="오늘의 메모 · Today's note" footer={<Tag tone="muted">2026-09-06</Tag>}>완벽한 답보다 작은 시도와 발견을 나눕니다. / Share small attempts and small discoveries over perfect answers.</NoteCard>
      </section>
    </main>
  )
}
