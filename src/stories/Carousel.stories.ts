import { Meta, StoryObj } from '@storybook/react'
import Carousel from '../components/Carousel'
import plant1 from '../assets/images/blank-picture-frame-by-houseplant-corner-parquet-floor.jpg'
import plant2 from '../assets/images/small-cacti-with-white-wall-background.jpg'
import plant3 from '../assets/images/pothos-plant-pot-bench.jpg'
import plant4 from '../assets/images/variety-cacti-succulents-home-decor.jpg'

const meta = {
    title: "Complex/Carousel",
    component: Carousel,
    tags: ["autodocs"],
    argTypes: {
        elements: {
            description: 'The array with the data to display. The CardProps object has 5 properties, described in the Card component. The ImageProps object, on the other hand, has only 2 properties: "url" for the image src and "altText" for the alt attribute'
        }
    },
    parameters: {
        docs: {
          description: {
            component: 'A carousel with infinite scroll.'
          }
        }
      }
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CardsCarousel : Story = {
    args: {
        elements: [
            {
                img: plant1,
                altText: "Frame surrounded by green plants",
                headline: "Surrounded?",
                subhead: "The Anxiety Podcast, ep.1",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut consectetur tellus, sit amet ultricies dui. Ut molestie suscipit diam id facilisis."
            }, {
                img: plant2,
                altText: "Cacti standing at the opposite sides of a table",
                headline: "Isolated?",
                subhead: "The Anxiety Podcast, ep.2",
                description: "Duis id venenatis urna. Praesent pretium metus hendrerit purus volutpat dapibus. Vivamus ac lacus ut odio posuere lobortis. Donec ornare tincidunt leo eget aliquam."
            }, {
                img: plant3,
                altText: "Plant on a table",
                headline: "Alone?",
                subhead: "The Anxiety Podcast, ep.3",
                description: "Quisque tempus, lectus et eleifend fringilla, tellus nibh convallis ex, vitae hendrerit magna elit quis nisl. Nullam sagittis rutrum lorem hendrerit egestas."
            }, {
                img: plant4,
                altText: "Mixed plants on a shelf",
                headline: "Stuck?",
                subhead: "The Anxiety Podcast, ep.4",
                description: "In vitae volutpat ligula, ac rutrum tellus. Maecenas pretium tristique orci eget tristique. Vestibulum aliquet dolor quis lacus laoreet, a elementum ipsum dictum."
            }
        ]
    },
    parameters: {
        docs: {
          description: {
            story: 'A carousel of cards. At the moment, it displays only one element at a time.'
          }
        }
      }
}

export const ImagesCarousel : Story = {
    args: {
        elements: [
            {
                url: plant1,
                altText: "Frame surrounded by green plants",
            }, {
                url: plant2,
                altText: "Cacti standing at the opposite sides of a table",
            }, {
                url: plant3,
                altText: "Plant on a table",
            }, {
                url: plant4,
                altText: "Mixed plants on a shelf",
            }
        ]
    },
    parameters: {
        docs: {
          description: {
            story: 'A carousel of images. At the moment, it displays only one element at a time.'
          }
        }
      }
}

