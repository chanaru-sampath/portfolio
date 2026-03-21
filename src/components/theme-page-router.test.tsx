import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import { ThemePageRouter } from './theme-page-router'

vi.mock('@/themes/theme-context', () => ({
  useTheme: () => 'newspaper',
}))

describe('ThemePageRouter', () => {
  it('should render without crashing', () => {
    render(<ThemePageRouter page="home" theme="newspaper" />)
    expect(screen.getByText(/Loading/i)).toBeDefined()
  })
})
