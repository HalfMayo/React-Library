import{j as t}from"./jsx-runtime-6eef64cc.js";import{r as i}from"./index-c013ead5.js";import{C as E}from"./Card-2642d75e.js";import{S as f}from"./SvgButton-37b57289.js";import{S as L}from"./left-chevron-svgrepo-com-2a3f0ec5.js";import{S as R}from"./right-chevron-svgrepo-com-6fc546a3.js";import{p as P}from"./blank-picture-frame-by-houseplant-corner-parquet-floor-bb6fc28f.js";import"./_commonjsHelpers-725317a4.js";function c({url:r,altText:a}){return t.jsx("div",{className:"h-auto w-96 mx-5 rounded-xl",children:t.jsx("img",{className:"rounded-xl w-full",src:r,alt:a})})}try{c.displayName="Image",c.__docgenInfo={description:"",displayName:"Image",props:{url:{defaultValue:null,description:"",name:"url",required:!0,type:{name:"string"}},altText:{defaultValue:null,description:"",name:"altText",required:!0,type:{name:"string"}}}}}catch{}function m({elements:r}){const[a,l]=i.useState(1),[_,d]=i.useState(!0),[p,n]=i.useState(!1),h=i.useRef(null);function q(e){return e.headline!==void 0}const s=r.map((e,g)=>q(e)?t.jsx("li",{children:t.jsx(E,{img:e.img,altText:e.altText,headline:e.headline,subhead:e.subhead,description:e.description})},g):t.jsx("li",{children:t.jsx(c,{url:e.url,altText:e.altText})},g));function w(){p||l(e=>e+1)}function I(){p||l(e=>e-1)}function N(){a===0?(n(!0),d(!1),l(s.length)):a===s.length+1?(n(!0),d(!1),l(1)):n(!1)}return i.useEffect(()=>{h.current.addEventListener("transitionstart",()=>{n(!0)})},[]),i.useEffect(()=>{(a===1||a===s.length)&&(n(!1),setTimeout(()=>{d(!0)},100))},[a]),t.jsxs("div",{className:"flex items-center gap-4",children:[t.jsx(f,{label:"Previous Card",svg:L,onClick:I}),t.jsx("ul",{className:"list-none w-[424px] overflow-hidden p-0",children:t.jsxs("div",{className:`flex items-center m-0 p-0 ${_?"transition duration-1000":""}`,ref:h,onTransitionEnd:N,style:{transform:`translateX(-${100*a}%)`},children:[s[s.length-1],s,s[0]]})}),t.jsx(f,{label:"Next Card",svg:R,onClick:w})]})}try{m.displayName="Carousel",m.__docgenInfo={description:"",displayName:"Carousel",props:{elements:{defaultValue:null,description:"",name:"elements",required:!0,type:{name:"CardProps[] | ImageProps[]"}}}}}catch{}const A=""+new URL("small-cacti-with-white-wall-background-4e1e57a3.jpg",import.meta.url).href,S=""+new URL("pothos-plant-pot-bench-b4c10e72.jpg",import.meta.url).href,j=""+new URL("variety-cacti-succulents-home-decor-63fd644e.jpg",import.meta.url).href,$={title:"Complex/Carousel",component:m,tags:["autodocs"],argTypes:{elements:{description:'The array with the data to display. The CardProps object has 5 properties, described in the Card component. The ImageProps object, on the other hand, has only 2 properties: "url" for the image src and "altText" for the alt attribute'}},parameters:{docs:{description:{component:"A carousel with infinite scroll."}}}},o={args:{elements:[{img:P,altText:"Frame surrounded by green plants",headline:"Surrounded?",subhead:"The Anxiety Podcast, ep.1",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut consectetur tellus, sit amet ultricies dui. Ut molestie suscipit diam id facilisis."},{img:A,altText:"Cacti standing at the opposite sides of a table",headline:"Isolated?",subhead:"The Anxiety Podcast, ep.2",description:"Duis id venenatis urna. Praesent pretium metus hendrerit purus volutpat dapibus. Vivamus ac lacus ut odio posuere lobortis. Donec ornare tincidunt leo eget aliquam."},{img:S,altText:"Plant on a table",headline:"Alone?",subhead:"The Anxiety Podcast, ep.3",description:"Quisque tempus, lectus et eleifend fringilla, tellus nibh convallis ex, vitae hendrerit magna elit quis nisl. Nullam sagittis rutrum lorem hendrerit egestas."},{img:j,altText:"Mixed plants on a shelf",headline:"Stuck?",subhead:"The Anxiety Podcast, ep.4",description:"In vitae volutpat ligula, ac rutrum tellus. Maecenas pretium tristique orci eget tristique. Vestibulum aliquet dolor quis lacus laoreet, a elementum ipsum dictum."}]},parameters:{docs:{description:{story:"A carousel of cards. At the moment, it displays only one element at a time."}}}},u={args:{elements:[{url:P,altText:"Frame surrounded by green plants"},{url:A,altText:"Cacti standing at the opposite sides of a table"},{url:S,altText:"Plant on a table"},{url:j,altText:"Mixed plants on a shelf"}]},parameters:{docs:{description:{story:"A carousel of images. At the moment, it displays only one element at a time."}}}};var x,b,y;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    elements: [{
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
    }]
  },
  parameters: {
    docs: {
      description: {
        story: 'A carousel of cards. At the moment, it displays only one element at a time.'
      }
    }
  }
}`,...(y=(b=o.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var T,v,C;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    elements: [{
      url: plant1,
      altText: "Frame surrounded by green plants"
    }, {
      url: plant2,
      altText: "Cacti standing at the opposite sides of a table"
    }, {
      url: plant3,
      altText: "Plant on a table"
    }, {
      url: plant4,
      altText: "Mixed plants on a shelf"
    }]
  },
  parameters: {
    docs: {
      description: {
        story: 'A carousel of images. At the moment, it displays only one element at a time.'
      }
    }
  }
}`,...(C=(v=u.parameters)==null?void 0:v.docs)==null?void 0:C.source}}};const O=["CardsCarousel","ImagesCarousel"];export{o as CardsCarousel,u as ImagesCarousel,O as __namedExportsOrder,$ as default};
//# sourceMappingURL=Carousel.stories-8b1ff44e.js.map
