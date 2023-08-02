import { Meta, StoryObj } from '@storybook/react'
import SuperAccordion from '../components/SuperAccordion';

const meta = {
    title: "Complex/Accordion/Nested Accordion",
    component: SuperAccordion,
    tags: ["autodocs"],
    argTypes: {
        infos: {
            description: 'The array with the data to display'
        },
        width: {
            description: 'The width of the component'
        },
        compressed: {
            description: 'If true, it sets a fixed height with a scrollbar for the extended area'
        },
        bgMainTitle: {
            description: 'The background color of the title area. It accepts only Tailwind classes'
        },
        bgInnerTitle: {
            description: 'The background color of the extended areas of ToggleProps elements and of the title area of the nested accordion. It accepts only Tailwind classes'
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
            component: 'A complex accordion to display both simple and complex toggle elements.'
          }
        }
      }
} satisfies Meta<typeof SuperAccordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NestedAccordion : Story = {
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
            }],
            bgMainTitle: "bg-white",
            bgInnerTitle: "bg-surface",
            bgInnerText: "bg-surface-container"
    },
}