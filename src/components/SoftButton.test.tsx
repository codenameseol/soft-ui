import { describe, expect, it, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { SoftButton } from './SoftButton'

describe('SoftButton', () => {
  it('renders its label and calls onClick when clicked', () => {
    const handleClick = vi.fn()
    render(<SoftButton onClick={handleClick}>Click me</SoftButton>)

    const button = screen.getByRole('button', { name: 'Click me' })
    fireEvent.click(button)

    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('defaults to the primary variant', () => {
    render(<SoftButton>Default</SoftButton>)
    expect(screen.getByRole('button', { name: 'Default' }).className).toContain(
      'soft-ui-button--primary'
    )
  })

  it('applies the outline variant class when requested', () => {
    render(<SoftButton variant="outline">Outline</SoftButton>)
    expect(screen.getByRole('button', { name: 'Outline' }).className).toContain(
      'soft-ui-button--outline'
    )
  })

  it('does not fire onClick while disabled', () => {
    const handleClick = vi.fn()
    render(
      <SoftButton disabled onClick={handleClick}>
        Disabled
      </SoftButton>
    )

    fireEvent.click(screen.getByRole('button', { name: 'Disabled' }))
    expect(handleClick).not.toHaveBeenCalled()
  })
})
