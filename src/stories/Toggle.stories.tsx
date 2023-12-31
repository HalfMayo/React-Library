import { Meta, StoryObj } from '@storybook/react'
import Toggle from '../components/Toggle';
import { useState } from 'react';
import cover from '../assets/images/country-fantasy.jpg'

const meta = {
    title: "Base/Toggle/Simple Toggle",
    component: Toggle,
    tags: ["autodocs"],
    argTypes: {
        info: {
            description: 'The data to display'
        },
        isOpen: {
            description: 'The state that holds the value of the currently open toggle',
            control: false
        },
        width: {
            description: 'The width of the component'
        },
        compressed: {
            description: 'If true, it sets a fixed height with a scrollbar for the extended area'
        },
        bgTitle: {
            description: 'The background color of the title area. It accepts only Tailwind classes'
        },
        bgText: {
            description: 'The background color of the extended area. It accepts only Tailwind classes'
        },
        className: {
            description: "Additional classes to manage the component position inside the page"
        }
    },
    parameters: {
        docs: {
          description: {
            component: 'A simple toggle to display information.'
          }
        }
      }
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof Toggle>;

export const Faq : Story = {
    render: (args) => {
        const [isOpen, setIsOpen] = useState<number|null>(null);

        function toggleText(i:number) {
            isOpen === i ? setIsOpen(null) : setIsOpen(i);
        }

        return <Toggle {...args} isOpen={isOpen} onClick={toggleText}/>
    },
    args: {
        info: {
            id: 0,
            title: "Surroundend?",
            propOne: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec molestie neque mauris, at volutpat augue tempor at. Ut id erat ipsum. Sed vel dolor imperdiet, facilisis erat auctor, finibus metus. Curabitur pulvinar vehicula velit eget accumsan. In quis tortor a leo aliquam accumsan. Morbi molestie neque accumsan malesuada venenatis. Suspendisse libero sapien, ornare ac rutrum ac, egestas eu purus. Integer fermentum placerat nibh. Suspendisse potenti. Nullam sit amet erat vehicula, accumsan lorem quis, interdum purus. Integer consectetur tortor vel volutpat lacinia. Duis pulvinar massa vitae arcu posuere fermentum. Nulla facilisi."
        },
        compressed: true,
        bgText: "bg-surface"
    },
    parameters: {
        docs: {
          description: {
            story: 'A toggle with only a bunch of the properties available filled. Since the "compressed" property is set to true, its height is fixed.'
          }
        }
      }
}

export const SearchResult : Story = {
    render: (args) => {
        const [isOpen, setIsOpen] = useState<number|null>(0);

        function toggleText(i:number) {
            isOpen === i ? setIsOpen(null) : setIsOpen(i);
        }

        return <Toggle {...args} isOpen={isOpen} onClick={toggleText}/>
    },
    args: {
        info: {
            id: 0,
            img: cover,
            title: "The Lord of the Rings",
            subtitle: "J.R.R. Tolkien",
            propOne: "Title: The Lord of the Rings",
            propTwo: "Author: J.R.R. Tolkien",
            propThree: "Year: 1954-1955",
            propFour: "Description: From homely beginnings in the Shire, a hobbit land reminiscent of the English countryside, the story ranges across Middle-earth, following the quest to destroy the One Ring, seen mainly through the eyes of the hobbits Frodo, Sam, Merry and Pippin. Aiding Frodo are the Wizard Gandalf, the Man Aragorn, the Elf Legolas and the Dwarf Gimli, who unite in order to rally the Free Peoples of Middle-earth against Sauron's armies and give Frodo a chance to destroy the One Ring in the fire of Mount Doom."
        },
        bgText: "bg-surface"
    },
    parameters: {
        docs: {
          description: {
            story: 'A more complex toggle with more properties used.'
          }
        }
      }
}