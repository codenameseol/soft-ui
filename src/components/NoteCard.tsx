import type { ReactNode } from 'react'
import './NoteCard.css'

export interface NoteCardProps {
  /** Short title shown at the top of the card. */
  title: string
  /** Body content of the card. */
  children: ReactNode
  /** Optional slot below the body, e.g. a date or a tag. */
  footer?: ReactNode
  className?: string
}

/**
 * A small card for a title, some body text, and an optional footer slot.
 * Soft shadow, rounded corners — meant for a note, not a dashboard.
 */
export function NoteCard({ title, children, footer, className }: NoteCardProps) {
  const classes = ['soft-ui-note-card', className].filter(Boolean).join(' ')

  return (
    <div className={classes}>
      <h3 className="soft-ui-note-card__title">{title}</h3>
      <div className="soft-ui-note-card__body">{children}</div>
      {footer ? <div className="soft-ui-note-card__footer">{footer}</div> : null}
    </div>
  )
}
