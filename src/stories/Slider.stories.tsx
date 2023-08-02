import { Meta, StoryObj } from '@storybook/react'
import Slider from '../components/Slider';
import { useState } from 'react'

const meta = {
    title: "Base/Slider",
    component: Slider,
    tags: ["autodocs"],
    argTypes: {
        value: {
            description: 'The value of the slider',
            control: false
        },
        onChange: {
            description: 'The onChange method to set the slider value',
            control: false
        },
        label: {
            description: 'The name of the slider'
        },
        min: {
            description: 'The minimum value of the sliders'
        }, 
        max: {
            description: 'The maximum value of the sliders'
        },
        lockable: {
            description: 'Can the slider be disabled?'
        },
    },
    parameters: {
        docs: {
          description: {
            component: 'A slider that displays its value.'
          }
        }
      }
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof Slider>;

export const ActiveUnlockableSlider : Story = {
    render: (args) => {
        const [rangeValue, setRangeValue] = useState("50");

        return <Slider {...args} value={rangeValue} onChange={e=>setRangeValue(e.target.value)}/>
    },

    args: {
        label: "Expenses",
        min: 0,
        max: 100,
        lockable: false
    },
    parameters: {
        docs: {
          description: {
            story: 'An unlockable slider.'
          }
        }
      }
}

export const ActiveLockableSlider : Story = {
    render: (args) => {
        const [rangeValue, setRangeValue] = useState("50");

        return <Slider {...args} value={rangeValue} onChange={e=>setRangeValue(e.target.value)}/>
    },

    args: {
        label: "Budget",
        min: 0,
        max: 100,
        lockable: true
    },
    parameters: {
        docs: {
          description: {
            story: 'A lockable slider.'
          }
        }
      }
}