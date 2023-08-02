import { Meta, StoryObj } from '@storybook/react'
import Checkbox from '../components/Checkbox';
import plant1 from '../assets/images/blank-picture-frame-by-houseplant-corner-parquet-floor.jpg'

const meta = {
    title: "Base/Checkbox",
    component: Checkbox,
    tags: ["autodocs"],
    argTypes: {
        className: {
            description: 'Additional classes to add to the checkbox'
        },
        value: {
            description: 'If the checkbox is relative to a text, it sets the text. Otherwise, it sets the alt attribute of the image'
        },
        src: {
            description: 'If the checkbox is relative to an image, it sets the src attribute. Otherwise, it does nothing',
            control: false
        },
        img: {
            description: 'Is the checkbox relative to an image?'
        },
        onClick: {
            description: 'The function tied to the click action',
            control: false
        },
        checked: {
            description: 'The checked attribute of the checkbox. Assign a value to this property only if you need to change the standard behaviour of the HTML element'
        },
        readonly: {
            description: 'The readonly attribute of the checkbox. Assign a value to this property only if you need to change the standard behaviour of the HTML element'
        },
        labelActive: {
            description: 'If true, the entire label is clickable to tick the box. Otherwise, only clicking the box ticks it'
        }
    },
    parameters: {
        docs: {
          description: {
            component: 'A checkbox input element.'
          }
        }
      }
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TextCheck : Story = {
    args: {
        value: "Henlo",
        labelActive: true
    },
    parameters: {
        docs: {
          description: {
            story: 'A checkbox associated to some text. The entire label is clickable.'
          }
        }
      }
}

export const ImageCheck : Story = {
    args: {
        value: "Frame surrounded by plants in vase",
        img: true,
        src: plant1
    },
    parameters: {
        docs: {
          description: {
            story: 'A checkbox associated to an image. Only the box is clickable.'
          }
        }
      }
}