import { Meta, StoryObj } from '@storybook/react'
import Button from "../components/Button";

const meta = {
    title: "Base/Button/Text Button",
    component: Button,
    tags: ["autodocs"],
    argTypes: {
        rank : {
            description: 'Is this an important action or a standard one?',
            options: ['main', 'default'],
            control: { type: 'radio' },
        },
        color : {
          description: 'Which key color do you use for this button?',
          options: ['primary', 'secondary', "tertiary"],
          control: { type: 'radio' },
        },
        label : {
            description: 'The text to put inside the button'
        },
        disabled : {
            description: 'Is the button enabled?'
        },
        onClick : {
            description: 'The function tied to the click action',
            control: false
        },
        type : {
          description: 'What does this button do?'
        },
        className: {
          description: "Additional classes to manage the component position inside the page"
      }
    },
    parameters: {
        docs: {
          description: {
            component: 'A classic pill button with text.'
          }
        }
      }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary : Story = {
    args: {
        rank: "main",
        color: "primary",
        label: 'Button',
        disabled: false
    },
    parameters: {
        docs: {
          description: {
            story: 'Primary buttons are meant to highlight the most important actions that the user can take. Should not be abused.'
          }
        }
      }
}

export const Secondary : Story = {
    args: {
        rank: "default",
        color: "primary",
        label: 'Button',
        disabled: false
    },
    parameters: {
        docs: {
          description: {
            story: 'Secondary buttons contain other important actions, though not the most important ones.'
          }
        }
      }
}

export const Disabled : Story = {
    args: {
        rank: "default",
        color: "primary",
        label: 'Button',
        disabled: true
    },
    parameters: {
        docs: {
          description: {
            story: 'A disabled, not clickable, button.'
          }
        }
      }
}