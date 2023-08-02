import { Meta, StoryObj } from '@storybook/react'
import InputArea from '../components/InputArea';
import { ReactComponent as MGlass } from '../assets/svgs/magnifying-glass-svgrepo-com.svg'
import { ReactComponent as Plus } from '../assets/svgs/plus-svgrepo-com.svg'
import { useState } from 'react';

const meta = {
    title: "Base/Input Area",
    component: InputArea,
    tags: ["autodocs"],
    argTypes: {
        className: {
            description: 'Additional classes to add to the component'
        },
        label: {
            description: 'It sets the label and its placeholder of the input/textarea, and the ARIA-label of the svg button'
        },
        inputType: {
            description: 'Is this an input or a textarea?'
        },
        svg : {
            description: 'The svg as React component',
            control: false
        },
        value: {
            description: 'The state that holds the value of the input/teaxtarea',
            control: false
        },
        setValue: {
            description: 'The onChange method to set the input/textarea value',
            control: false
        },
        handleSubmit: {
            description: 'The onSubmit event method called when the user submits the form',
            control: false
        },
        width: {
            description: 'The width of the component'
        },
        maxHeight: {
            description: 'The maximum height of the component'
        }
    },
    parameters: {
        docs: {
          description: {
            component: 'A bar that can be either an input or a textarea, which submits its value when the user clicks on the svg button.'
          }
        }
      }
} satisfies Meta<typeof InputArea>;

export default meta;
type Story = StoryObj<typeof InputArea>;

export const SearchItem : Story = {

    render: (args) => {
        const [value, setValue] = useState("");

        return <InputArea {...args} value={value} setValue={e => setValue(e.target.value)}/>
    },

    args: {
        label: 'Search',
        inputType: 'input',
        svg: MGlass,
        handleSubmit(e) {
            e.preventDefault();
        },
    },
    parameters: {
        docs: {
          description: {
            story: 'A search input bar.'
          }
        }
      }
}

export const AddItem : Story = {

    render: (args) => {
        const [value, setValue] = useState("");

        return <InputArea {...args} value={value} setValue={e => setValue(e.target.value)}/>
    },

    args: {
        label: 'Add',
        inputType: 'textarea',
        svg: Plus,
        handleSubmit(e) {
            e.preventDefault();
        },
    },
    parameters: {
        docs: {
          description: {
            story: 'An area to write stuff.'
          }
        }
      }
}