import { Meta, StoryObj } from '@storybook/react'
import Accordion from '../components/Accordion';

const meta = {
    title: "Complex/Accordion/Simple Accordion",
    component: Accordion,
    tags: ["autodocs"],
    argTypes: {
        infos: {
            description: 'The array with the data to display'
        },
        width: {
            description: 'The width of the component'
        },
        upperState: {
            description: 'The state that holds the value of the currently open toggle',
            control: false
        },
        upperSetState: {
            description: 'The function tied to the click action. In this case, it\'s also tied to the setState method',
            control: false
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
            component: 'A simple accordion to display text data, like FAQs.'
          }
        }
      }
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SimpleAccordion : Story = {
    args: {
        infos: [{
            id: 0,
            title: "Surroundend?",
            propOne: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec molestie neque mauris, at volutpat augue tempor at. Ut id erat ipsum. Sed vel dolor imperdiet, facilisis erat auctor, finibus metus. Curabitur pulvinar vehicula velit eget accumsan. In quis tortor a leo aliquam accumsan. Morbi molestie neque accumsan malesuada venenatis. Suspendisse libero sapien, ornare ac rutrum ac, egestas eu purus. Integer fermentum placerat nibh. Suspendisse potenti. Nullam sit amet erat vehicula, accumsan lorem quis, interdum purus. Integer consectetur tortor vel volutpat lacinia. Duis pulvinar massa vitae arcu posuere fermentum. Nulla facilisi."
        }, {
            id: 1,
            title: "Isolated?",
            propOne: "Curabitur pharetra varius sapien porta commodo. Vivamus ultricies nibh enim, nec ultricies neque dapibus eu. Vestibulum non nibh feugiat, feugiat risus eu, tincidunt tellus. Vestibulum enim nibh, tincidunt ut varius convallis, pharetra dapibus nisl. Proin leo justo, blandit id molestie sed, dignissim a sem. Quisque consectetur ac elit a congue. Cras imperdiet in tellus in aliquam. Proin lacinia neque et egestas sollicitudin. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla viverra dolor at urna euismod, nec pretium est ultrices. Donec eget mi rhoncus, tempus erat nec, bibendum turpis. Quisque purus metus, accumsan vitae magna porta, malesuada molestie magna."
        }, {
            id: 2,
            title: "Alone?",
            propOne: "Ut non rutrum sem, auctor tincidunt sem. Donec volutpat nulla nec arcu hendrerit, in tincidunt velit rhoncus. Pellentesque posuere accumsan massa, malesuada rhoncus nunc mollis eget. Mauris vitae suscipit nisl. Morbi sed sollicitudin lectus. Aliquam mauris mauris, eleifend elementum purus vitae, fringilla ullamcorper mi. Vestibulum in nisl sit amet tortor hendrerit ultrices. Donec egestas aliquet ipsum, in congue eros. Vestibulum vel elit tortor."
        }, {
            id: 3,
            title: "Stuck?",
            propOne: "Aliquam erat volutpat. Suspendisse potenti. Phasellus tempor velit id elit accumsan, sed pellentesque diam vestibulum. Maecenas dignissim orci velit, nec aliquet lorem semper vehicula. Sed finibus ipsum eu nibh dapibus, ac blandit velit vestibulum. Nam vel orci elit. Donec egestas dui quis odio venenatis rhoncus. Vestibulum pharetra tristique erat, sit amet sollicitudin ex blandit non. Morbi vestibulum convallis consectetur. Donec porttitor nec tellus et vulputate."
        }],
        bgText: "bg-surface"
    },
}