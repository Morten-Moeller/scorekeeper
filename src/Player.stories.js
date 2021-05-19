import React from 'react'
import Player from './Player'

export default {
  title: 'Player',
  component: Player,
}

const Template = args => <Player {...args} />

export const DefaultPlayer = Template.bind({})
DefaultPlayer.args = { name: 'John Doe', score: 0 }

export const AdditionalPlayer = Template.bind({})
AdditionalPlayer.args = { name: 'Jane Doe', score: 30 }
