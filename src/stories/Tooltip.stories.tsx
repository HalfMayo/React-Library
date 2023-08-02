import { Meta, StoryObj } from '@storybook/react'
import Tooltip from "../components/Tooltip";
import SvgButton from '../components/SvgButton';
import {ReactComponent as Dots} from '../assets/svgs/dots-3-horizontal-svgrepo-com.svg'

const meta = {
    title: "Base/Tooltip",
    component: Tooltip,
    tags: ["autodocs"],
    argTypes: {
        children: {
          description: 'What is the tooltip referred to?',
          control: false
        },
        title: {
          description: 'The content of the tooltip'
        },
        side: {
          description: 'Where does the tooltip appear?',
          control: {type: 'radio'}
        },
        className: {
          description: 'Additional Tailwind classes to manage the component position'
        }
    },
    parameters: {
        docs: {
          description: {
            component: 'A simple drawer with a SVG button to toggle it.'
          }
        }
      }
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SvgButtonTooltip : Story = {
    args: {
        title: "More options",
        side: "right",
        children: <SvgButton label="More options" svg={Dots} classNameButton='rounded-full shadow-md' />,
        className: "left-2/4 translate-x-[-50%] top-[200px]"
      }
}