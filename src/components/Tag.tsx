import type { HTMLAttributes } from 'react'
import './Tag.css'

export type TagTone = 'wine' | 'muted'

export interface TagProps extends HTMLAttributes<HTMLSpanElement> {
  /** Which soft color variant to use. Defaults to "wine". */
  tone?: TagTone
}

/**
 * A small rounded label / chip, for tagging notes or statuses without
 * shouting about it.
 */
export function Tag({ tone = 'wine', className, children, ...rest }: TagProps) {
  const classes = ['soft-ui-tag', `soft-ui-tag--${tone}`, className].filter(Boolean).join(' ')

  return (
    <span className={classes} {...rest}>
      {children}
    </span>
  )
}
