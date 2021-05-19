import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import PlayerForm from './PlayerForm'

describe('PlayerForm', () => {
  it('returns an input with a label "Add player:"', () => {
    render(<PlayerForm />)
    expect(screen.getByLabelText('Add player:')).toBeInTheDocument()
  })
  it('takes submits an input', () => {
    const handleSubmit = jest.fn()
    render(<PlayerForm onSubmit={handleSubmit} />)

    const input = screen.getByLabelText('Add player:')

    userEvent.type(input, 'Hello{enter}')
    expect(handleSubmit).toHaveBeenCalled()
  })
})
