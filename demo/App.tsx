import { useState } from 'react'
import { SoftButton, Tag, NoteCard } from '../src'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="demo-page">
      <header className="demo-header">
        <h1>soft-ui</h1>
        <p>a little softer, a little kinder than sharp-edged defaults</p>
      </header>

      <section className="demo-section">
        <h2>SoftButton</h2>
        <div className="demo-row">
          <SoftButton variant="primary" onClick={() => setCount((c) => c + 1)}>
            Click me ({count})
          </SoftButton>
          <SoftButton variant="outline" onClick={() => setCount(0)}>
            Reset
          </SoftButton>
        </div>
      </section>

      <section className="demo-section">
        <h2>Tag</h2>
        <div className="demo-row">
          <Tag tone="wine">small attempt</Tag>
          <Tag tone="muted">still learning</Tag>
        </div>
      </section>

      <section className="demo-section">
        <h2>NoteCard</h2>
        <NoteCard title="Today's note" footer={<Tag tone="muted">2026-09-06</Tag>}>
          I'd rather share small attempts and small discoveries than a finished, perfect answer.
        </NoteCard>
      </section>
    </main>
  )
}
