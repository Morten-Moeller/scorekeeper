import { render, screen } from '@testing-library/react'
import Header from './Header'

describe('Header', () => {
  it('has af Carcasonne as text', () => {
    render(<Header>Carcasonne</Header>)

    expect(screen.getByText('Carcasonne')).toBeInTheDocument()
  })
})
