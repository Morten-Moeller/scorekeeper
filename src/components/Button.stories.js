import React from 'react'
import Button from './Button'

export default {
  title: 'Button',
  component: Button,
}

const Template = args => <Button {...args} />

export const DefaultButton = Template.bind({})
DefaultButton.args = { children: 'Reset scores', isActive: false }

export const AktiveButton = Template.bind({})
AktiveButton.args = {
  children: 'Reset scores',
  isActive: true,
}
