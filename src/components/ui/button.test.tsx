import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { Button } from './button'

describe('Button', () => {
  it('should render with default props', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByRole('button', { name: /Click me/i })).toBeDefined()
  })

  it('should render with different variants', () => {
    const { rerender } = render(<Button variant="destructive">Delete</Button>)
    expect(screen.getByRole('button', { name: /Delete/i })).toBeDefined()

    rerender(<Button variant="outline">Outline</Button>)
    expect(screen.getByRole('button', { name: /Outline/i })).toBeDefined()

    rerender(<Button variant="ghost">Ghost</Button>)
    expect(screen.getByRole('button', { name: /Ghost/i })).toBeDefined()
  })

  it('should be disabled when disabled prop is true', () => {
    render(<Button disabled>Disabled</Button>)
    expect(screen.getByRole('button', { name: /Disabled/i })).toBeDisabled()
  })

  it('should render as child when asChild is true', () => {
    render(
      <Button asChild>
        <a href="/test">Link</a>
      </Button>
    )
    expect(screen.getByRole('link', { name: /Link/i })).toBeDefined()
  })
})
