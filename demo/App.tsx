import { useEffect, useRef, useState } from 'react'
import { SoftButton, Tag, NoteCard } from '../src'

export default function App() {
  const [count, setCount] = useState(0)
  const [language, setLanguage] = useState<'ko' | 'en'>('ko')
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const copy = language === 'ko'
    ? {
        eyebrow: '작은 컴포넌트, 같은 언어',
        title: '조금 더 부드러운 기본값',
        intro: '차분한 색과 분명한 상태를 공유하는 세 가지 React 컴포넌트입니다.',
        button: 'SoftButton',
        tag: 'Tag',
        card: 'NoteCard',
        click: `클릭 ${count}`,
        reset: '초기화',
        attempt: '작은 시도',
        learning: '계속 배우는 중',
        noteTitle: '오늘의 메모',
        noteBody: '완벽한 답보다 작은 시도와 발견을 나눕니다.',
        language: 'English로 전환',
      }
    : {
        eyebrow: 'SMALL COMPONENTS, ONE LANGUAGE',
        title: 'Softer defaults',
        intro: 'Three React components sharing calm color and explicit state.',
        button: 'SoftButton',
        tag: 'Tag',
        card: 'NoteCard',
        click: `Click ${count}`,
        reset: 'Reset',
        attempt: 'small attempt',
        learning: 'still learning',
        noteTitle: "Today's note",
        noteBody: 'Share small attempts and small discoveries over perfect answers.',
        language: '한국어로 전환',
      }

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas?.getContext('2d')
    if (!canvas || !context) return
    const ratio = window.devicePixelRatio || 1
    canvas.width = 68 * ratio
    canvas.height = 28 * ratio
    context.scale(ratio, ratio)
    context.clearRect(0, 0, 68, 28)
    context.fillStyle = '#ead6d9'
    context.roundRect(0, 0, 68, 28, 14)
    context.fill()
    context.fillStyle = '#722f3e'
    context.beginPath()
    context.arc(language === 'ko' ? 15 : 53, 14, 9, 0, Math.PI * 2)
    context.fill()
    context.fillStyle = '#f7f5f0'
    context.font = '600 8px system-ui'
    context.textAlign = 'center'
    context.textBaseline = 'middle'
    context.fillText(language === 'ko' ? 'KO' : 'EN', language === 'ko' ? 15 : 53, 14)
  }, [language])

  return (
    <main className="demo-page">
      <header className="demo-header">
        <div className="demo-topline"><span className="demo-kicker">SOFT UI · 04 / INTERFACE</span><button className="language-switch" type="button" onClick={() => setLanguage(language === 'ko' ? 'en' : 'ko')} aria-label={copy.language} aria-pressed={language === 'en'}><canvas ref={canvasRef} aria-hidden="true" /><span>{language === 'ko' ? 'EN' : 'KO'}</span></button></div>
        <h1>{copy.title}</h1>
        <p>{copy.intro}</p>
      </header>

      <section className="demo-section">
        <h2>{copy.button}</h2>
        <div className="demo-row">
          <SoftButton variant="primary" onClick={() => setCount((c) => c + 1)}>{copy.click}</SoftButton>
          <SoftButton variant="outline" onClick={() => setCount(0)}>{copy.reset}</SoftButton>
        </div>
      </section>

      <section className="demo-section">
        <h2>{copy.tag}</h2>
        <div className="demo-row">
          <Tag tone="wine">{copy.attempt}</Tag>
          <Tag tone="muted">{copy.learning}</Tag>
        </div>
      </section>

      <section className="demo-section">
        <h2>{copy.card}</h2>
        <NoteCard title={copy.noteTitle} footer={<Tag tone="muted">2026-09-06</Tag>}>{copy.noteBody}</NoteCard>
      </section>
    </main>
  )
}
