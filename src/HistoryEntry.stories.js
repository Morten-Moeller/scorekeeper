import React from 'react'
import HistoryEntry from './HistoryEntry'

export default {
  title: 'HistoryEntry',
  component: HistoryEntry,
}

const Template = args => <HistoryEntry {...args} />

export const DefaultHistoryEntry = Template.bind({})
DefaultHistoryEntry.args = {
  name: 'Carcasonne',
  players: [
    { name: 'John Doe', score: '0' },
    { name: 'Jane Doe', score: '20' },
  ],
}
