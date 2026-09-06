import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Tag } from './Tag'

describe('Tag', () => {
  it('renders its label text', () => {
    render(<Tag>small attempt</Tag>)
    expect(screen.getByText('small attempt')).toBeInTheDocument()
  })

  it('defaults to the wine tone', () => {
    render(<Tag>Default</Tag>)
    expect(screen.getByText('Default').className).toContain('soft-ui-tag--wine')
  })

  it('applies the muted tone class when requested', () => {
    render(<Tag tone="muted">quietly</Tag>)
    expect(screen.getByText('quietly').className).toContain('soft-ui-tag--muted')
  })
})
