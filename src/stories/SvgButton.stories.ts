import { Meta, StoryObj } from '@storybook/react';
import BoredEmoji from '../assets/svgs/Bored';
import SvgButton from '../components/SvgButton';
import { ReactComponent as PreviousElement } from '../assets/svgs/left-chevron-svgrepo-com.svg';

const meta = {
    title: "Base/Button/Svg Button",
    component: SvgButton,
    tags: ["autodocs"],
    argTypes : {
        label : {
            description: 'What the button does. It is also put into the aria-label attribute'
        },
        svg : {
            description: 'The svg as React component',
            control: false
        },
        width: {
            description: 'The width of the svg. Keep in mind that the whole button is 48px x 48px'
        },
        height: {
            description: 'The height of the svg. Keep in mind that the whole button is 48px x 48px'
        },
        onClick : {
            description: 'The function tied to the click action'
        },
        onMouseOver : {
            description: 'What happens when the mouse hovers the button'
        },
        onMouseLeave : {
            description: 'What happens when the mouse leaves the button'
        },
        type : {
            description: 'The action performed by the button when inside a form'
        },
        color : {
            description: 'The setting to assign a color to monochrome svgs'
        },
        face : {
            description: 'One of the settings to assign colors to multicolor svgs',
            control: {type: 'color'}
        },
        faceshadow : {
            description: 'One of the settings to assign colors to multicolor svgs',
            control: {type: 'color'}
        }, 
        feature : {
            description: 'One of the settings to assign colors to multicolor svgs',
            control: {type: 'color'}
        },    
        disabled : {
            description: 'Is the button enabled?'
        },
        dragControls: {
            description: 'If the button is a handler managed by the Framer Motion library, here goes the reference to the relative method',
              control: false
        },
        classNameButton: {
          description: 'Additonal Tailwind classes to manage position, behaviour and color of the entire button'
        },
        classNameIcon: {
          description: 'Additonal Tailwind classes to manage the behaviour of the icon'
        }        
    },
    parameters: {
        docs: {
          description: {
            component: 'Icon buttons, containing an ARIA-ready svg.'
          }
        }
      }
} satisfies Meta<typeof SvgButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SimpleIconButton : Story = {
    args: {
        label: "Previous",
        svg: PreviousElement,
        width: 36,
        height: 36
    },
    parameters: {
        docs: {
          description: {
            story: 'A monochrome icon button. To properly set the svg, the only thing required is to change the "fill" property of all the paths the svg is made of with "currentColor". The svg is then transformed with SVGR.'
          }
        }
      }
}

export const DisabledSimpleIconButton : Story = {
    args: {
        label: "Previous Disabled",
        svg: PreviousElement,
        width: 36,
        height: 36,
        disabled: true
    },
    parameters: {
        docs: {
          description: {
            story: 'A disabled, monochrome icon button.'
          }
        }
      }
}

export const EmojiButton : Story = {
    args: {
        label: "Emoji",
        svg: BoredEmoji,
        width: 36,
        height: 36
    },
    parameters: {
        docs: {
          description: {
            story: 'A multicolor icon button. In this case, while transforming the svg via SVGR you have to assign to the "fill" properties of the svg\'s paths the property names listed above ("face", "faceShadow" and "feature"). If your svg is duotone, you need just two of them. IMPORTANT: the file with the svg code MUST be .tsx.'
          }
        }
      }
}

export const DisabledEmojiButton : Story = {
    args: {
        label: "Emoji Disabled",
        svg: BoredEmoji,
        width: 36,
        height: 36,
        disabled: true
    },
    parameters: {
        docs: {
          description: {
            story: 'A disabled, multicolor icon button.'
          }
        }
      }
}