import { Meta, StoryObj } from '@storybook/react'
import List from '../components/List';
import { useState } from 'react';


const meta = {
    title: "Complex/List",
    component: List,
    tags: ["autodocs"],
    argTypes: {
        items: {
            description: 'The state that hold the value of the array of data',
            control: false
        },
        setItems: {
            description: 'The setState method',
            control: false
        },
        onClick : {
            description: 'The function tied to the click action',
            control: false
        },
        changeItem: {
            table: {
                disable: true
            }
        },
        checked: {
            description: 'The checked attribute of the checkbox. Assign a value to this property only if you need to change the standard behaviour of the HTML element'
        },
        readonly: {
            description: 'The readonly attribute of the checkbox. Assign a value to this property only if you need to change the standard behaviour of the HTML element'
        },
        editInterface: {
            description: 'Are the list items editable?'
        }
    },
    parameters: {
        docs: {
          description: {
            component: 'A list of movable items.'
          }
        }
      }
} satisfies Meta<typeof List>;

export default meta;
type Story = StoryObj<typeof List>;

export const SimpleList : Story = {
    render: (args) => {
        const[items, setItems] = useState<string[]>(["Cake", "Candies", "Catastrophy upon us all"]);

        return <List {...args} items={items} setItems={setItems} />
    },

    args: {},
    parameters: {
        docs: {
          description: {
            story: 'A simple list. The items aren\'t editable, so they can be dragged and moved up and down by clicking anywhere on the item.'
          }
        }
      }
}

export const EditableList : Story = {
    render: (args) => {
        const[items, setItems] = useState<string[]>(["Sausage", "Sandwich", "Sadness in the heart"]);

        return <List {...args} items={items} setItems={setItems} />
    },

    args: {
        editInterface: true
    },
    parameters: {
        docs: {
          description: {
            story: 'An editable list. Edit options are shown by clicking on the three dots. Items can dragged up and down holding the handler on the left.'
          }
        }
      }
}
