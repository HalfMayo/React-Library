import { Meta, StoryObj } from '@storybook/react'
import SuperToggle from '../components/SuperToggle';
import { useState } from 'react';

const meta = {
    title: "Base/Toggle/Accordion Toggle",
    component: SuperToggle,
    tags: ["autodocs"],
    argTypes: {
        info: {
            description: 'The array of data to display'
        },
        isOpen: {
            description: 'The state that holds the value of the currently open toggle',
            control: false
        },
        width: {
            description: 'The width of the component'
        },
        bgMainTitle: {
            description: 'The background color of the title area. It accepts only Tailwind classes'
        },
        bgInnerTitle: {
            description: 'The background color of the title area of the nested accordion. It accepts only Tailwind classes'
        },
        bgInnerText: {
            description: 'The background color of the extended area of the nested accordion. It accepts only Tailwind classes'
        },
        className: {
            description: "Additional classes to manage the component position inside the page"
        }
    },
    parameters: {
        docs: {
          description: {
            component: 'A complex toggle to display a nested accordion.'
          }
        }
      }
} satisfies Meta<typeof SuperToggle>;

export default meta;
type Story = StoryObj<typeof SuperToggle>;

export const Faq : Story = {
    render: (args) => {
        const [isOpen, setIsOpen] = useState<number|null>(null);

        function toggleText(i:number) {
            isOpen === i ? setIsOpen(null) : setIsOpen(i);
        }

        return <SuperToggle {...args} isOpen={isOpen} onClick={toggleText}/>
    },
    args: {
       info: {
        id: 45728935,
        title: "Henlo?",
        propOne: [
                {
                id: 865,
                title: "Quaso",
                propOne: ""
            }, {
                id: 845,
                title: "Very Quaso",
                propOne: ""
            }, {
                id: 825,
                title: "Mucho Quaso",
                propOne: ""
            }]
        },
        bgMainTitle: "bg-white",
        bgInnerTitle: "bg-surface",
        bgInnerText: "bg-surface-container"
    }
}