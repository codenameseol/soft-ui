import type { ButtonHTMLAttributes } from 'react'
import './SoftButton.css'

export type SoftButtonVariant = 'primary' | 'outline'

export interface SoftButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style of the button. Defaults to "primary". */
  variant?: SoftButtonVariant
}

/**
 * A rounded pill button. Two variants: a filled "primary" for the main
 * action, and a quieter "outline" for everything else.
 */
export function SoftButton({
  variant = 'primary',
  className,
  children,
  type = 'button',
  ...rest
}: SoftButtonProps) {
  const classes = ['soft-ui-button', `soft-ui-button--${variant}`, className]
    .filter(Boolean)
    .join(' ')

  return (
    <button type={type} className={classes} {...rest}>
      {children}
    </button>
  )
}
