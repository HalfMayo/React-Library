import { Meta, StoryObj } from '@storybook/react'
import Card from "../components/Card";
import plant1 from '../assets/images/blank-picture-frame-by-houseplant-corner-parquet-floor.jpg'

const meta = {
    title: "Base/Card",
    component: Card,
    tags: ["autodocs"],
    argTypes: {
        img: {
            description: 'The src attribute of the image',
            control: false
        },
        altText: {
            description: 'The alt attribute of the image',
            control: false
        },
        headline: {
            description: 'The title of the card'
        },
        subhead: {
            description: 'The subtitle of the card'
        },
        description: {
            description: 'The description of content of the card'
        }
    },
    parameters: {
        docs: {
          description: {
            component: 'A card containing brief information, it comes with different configurations depending on the amount of data needed.'
          }
        }
      }
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ImageFree : Story = {
    args: {
        headline: "Lonely?",
        subhead: "The Anxiety Podcast, ep. 1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elementum, arcu nec maximus pretium, sem nisl pulvinar nulla, in commodo velit neque fringilla massa."
    },
    parameters: {
        docs: {
          description: {
            story: 'A card with all the text properties filled but without a cover image.'
          }
        }
      }
}

export const ImageDescriptionFree : Story = {
    args: {
        headline: "Isolated?",
        subhead: "The Anxiety Podcast, ep. 2",
    },
    parameters: {
        docs: {
          description: {
            story: 'A card with a minimum amount of information. Leaving empty both the subtitle and the description properties is not recommended.'
          }
        }
      }
}

export const WithImage : Story = {
    args: {
        img: plant1,
        altText: "Empty frame surrounded by plants in vase",
        headline: "Surrounded?",
        subhead: "The Anxiety Podcast, ep. 3",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elementum, arcu nec maximus pretium, sem nisl pulvinar nulla, in commodo velit neque fringilla massa."
    },
    parameters: {
        docs: {
          description: {
            story: 'A card with all the properties filled.'
          }
        }
      }
}