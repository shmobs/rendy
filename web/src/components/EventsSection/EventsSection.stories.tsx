// Pass props to your component by passing an `args` object to your story
//
// ```jsx
// export const Primary: Story = {
//  args: {
//    propName: propValue
//  }
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { Meta, StoryObj } from '@storybook/react'

import EventsSection from './EventsSection'

const meta: Meta<typeof EventsSection> = {
  component: EventsSection,
}

export default meta

type Story = StoryObj<typeof EventsSection>

export const Primary: Story = {}
