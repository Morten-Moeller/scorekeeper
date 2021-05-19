import { render, screen } from '@testing-library/react'
import HistoryEntry from './HistoryEntry'

describe('HistoryEntry', () => {
  it('has Carcasonne as text and two player with name and score', async () => {
    render(
      <HistoryEntry
        name="Carcasonne"
        players={[
          { name: 'John Doe', score: '0' },
          { name: 'Jane Doe', score: '20' },
        ]}
      />
    )

    expect(screen.getByText('Carcasonne')).toBeInTheDocument()
    expect(await screen.findByText('John Doe')).toBeInTheDocument()
    expect(await screen.findByText('Jane Doe')).toBeInTheDocument()
    expect(await screen.findByText('0')).toBeInTheDocument()
    expect(await screen.findByText('20')).toBeInTheDocument()
  })
})
