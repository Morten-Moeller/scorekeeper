import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Navigation from './Navigation'

describe('Navigation', () => {
  it('has 2 buttons to navigate', () => {
    render(<Navigation />)
    const buttons = screen.getAllByRole('button')
    expect(buttons.length).toBe(2)
  })
  it('has a button named Play and another one named History', () => {
    render(<Navigation nameA={'Play'} nameB={'History'} />)
    expect(screen.getByText('Play')).toBeInTheDocument()
    expect(screen.getByText('History')).toBeInTheDocument()
  })

  it('has 2 buttons that can be clicked', () => {
    const onClickA = jest.fn()
    const onClickB = jest.fn()
    render(
      <Navigation
        nameA={'Play'}
        nameB={'History'}
        onClickA={onClickA}
        onClickB={onClickB}
      />
    )
    const buttonA = screen.getByText('Play')
    const buttonB = screen.getByText('History')
    userEvent.click(buttonA)
    userEvent.click(buttonB)

    expect(onClickA).toHaveBeenCalled()
    expect(onClickB).toHaveBeenCalled()
  })
  it('has an aria label navigation', () => {
    render(<Navigation nameA={'Play'} nameB={'History'} />)
    expect(screen.getByRole('navigation')).toBeInTheDocument()
  })
})
