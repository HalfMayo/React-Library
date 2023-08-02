import { Meta, StoryObj } from '@storybook/react'
import Tabs from '../components/Tabs';
import { useState } from 'react';

const meta = {
    title: "Base/Tabs",
    component: Tabs,
    tags: ["autodocs"],
    argTypes: {
        className: {
            description: 'Additional Tailwind classes to add to the component'
        },
        width: {
            description: 'A width different from the default one. Use only if the tab title is very long'
        },
        tabs: {
            description: 'An array of strings that holds the names of the tabs'
        },
        state: {
            description: 'The state that holds the value of the currently open tab',
            control: false
        },
        onClick: {
            description:'The function tied to the click action. In this case, it\'s also tied to the setState method',
            control: false
        }
    },
    parameters: {
        docs: {
          description: {
            component: 'A series of clickable tabs.'
          }
        }
      }
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof Tabs>;

export const TextTabs : Story = {

    render: (args) => {
        const[isActive, setIsActive] = useState<number>(0);

        function toggleTab(i:number) {
            setIsActive(i);
        }

        return <Tabs {...args} state={isActive} onClick={toggleTab}/>
    },

    args: {
        tabs: [ "Audio", "Video", "Pictures", "Downloads" ]
    }
}