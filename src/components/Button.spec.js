import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Button from './Button'

describe('Button', () => {
  it('returns a button component', () => {
    const handleOnClick = jest.fn()
    render(
      <Button onClick={handleOnClick} isActive={false}>
        Click
      </Button>
    )
    const button = screen.getByRole('button', { name: 'Click' })
    expect(button).toBeInTheDocument()

    userEvent.click(button)
    expect(handleOnClick).toHaveBeenCalled()
  })

  it('changes color on isActive', () => {
    const { rerender } = render(<Button onClick={jest.fn()}>Click Me</Button>)

    const button = screen.getByRole('button')

    const defaultStyle = getComputedStyle(button)

    rerender(
      <Button isActive onClick={jest.fn()}>
        Click Me
      </Button>
    )

    const activeStyle = getComputedStyle(button)
    expect(activeStyle).not.toBe(defaultStyle)
  })
})
