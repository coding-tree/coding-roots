import React from 'react'
import { text, withKnobs } from '@storybook/addon-knobs'
import Button from '../atoms/Button'

export const Primary = () => {
  return <Button>{text('Title', 'Click me')}</Button>
}

export default {
  title: 'atoms/Button',
  decorators: [withKnobs]
}
