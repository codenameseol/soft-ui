import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { NoteCard } from './NoteCard'

describe('NoteCard', () => {
  it('renders the title, body, and footer', () => {
    render(
      <NoteCard title="Today's note" footer={<span>2026-09-06</span>}>
        Small attempts and small discoveries, still learning as I go.
      </NoteCard>
    )

    expect(screen.getByText("Today's note")).toBeInTheDocument()
    expect(
      screen.getByText('Small attempts and small discoveries, still learning as I go.')
    ).toBeInTheDocument()
    expect(screen.getByText('2026-09-06')).toBeInTheDocument()
  })

  it('omits the footer element when none is given', () => {
    const { container } = render(<NoteCard title="Title only">Just a body, no footer</NoteCard>)
    expect(container.querySelector('.soft-ui-note-card__footer')).toBeNull()
  })
})
