import{j as e}from"./jsx-runtime-6eef64cc.js";import{S as B}from"./SvgButton-37b57289.js";import{S as w}from"./left-chevron-svgrepo-com-2a3f0ec5.js";import"./index-c013ead5.js";import"./_commonjsHelpers-725317a4.js";const y=({width:x="24px",height:S="24px",face:i="#FFFBFE",faceshadow:j="#EBE6EA",feature:a="#1C1B1F"})=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",xmlSpace:"preserve",width:x,height:S,viewBox:"0 0 512.001 512.001",children:[e.jsx("circle",{cx:256.005,cy:256.004,r:246.855,fill:i}),e.jsxs("g",{fill:j,children:[e.jsx("path",{d:"M126.308 385.694c-88.802-88.802-95.799-228.426-20.999-325.241a249.063 249.063 0 0 0-23.858 20.999c-96.401 96.401-96.401 252.698 0 349.099s252.698 96.401 349.099 0a249.34 249.34 0 0 0 20.999-23.858c-96.814 74.799-236.44 67.802-325.241-20.999z"}),e.jsx("path",{d:"M277.825 369.891a9.114 9.114 0 0 1-5.841-2.111c-10.904-9.054-21.06-9.056-31.966 0a9.15 9.15 0 0 1-11.691-14.079c17.588-14.605 37.761-14.604 55.347 0 3.888 3.228 4.422 8.997 1.194 12.885a9.127 9.127 0 0 1-7.043 3.305z"})]}),e.jsx("path",{fill:a,d:"M256 0C114.842 0 .001 114.841.001 256.001s114.841 256 255.999 256c141.159 0 256.001-114.841 256.001-256.001S397.159 0 256 0zm0 493.701c-131.068 0-237.7-106.631-237.7-237.7S124.932 18.299 256 18.299c131.069 0 237.702 106.632 237.702 237.702S387.069 493.701 256 493.701z"}),e.jsx("path",{fill:a,d:`M112.923 204.662c8.265-13.834 22.821-22.094 38.937-22.094s30.672 8.26 38.937 22.094a9.144 9.144 0 0 0 12.547 3.161 9.15 9.15 0 0 0 3.162-12.547c-11.6-19.417-32.028-31.007-54.646-31.007s-43.046 11.592-54.646 31.007a9.149 9.149 0 0 0 3.162 12.547 9.147 9.147 0 0 0 12.547-3.161zM360.143 164.268c-22.618 0-43.046 11.592-54.646 31.007a9.149 9.149 0 0 \r
0 3.162 12.547c4.341 2.592 9.957 1.176 12.547-3.162 8.265-13.834 22.821-22.094 38.937-22.094s30.672 8.26 38.937 22.094a9.144 9.144 0 0 0 12.547 3.161 9.15 9.15 0 0 0 3.162-12.547c-11.601-19.414-32.03-31.006-54.646-31.006zM190.337 263.692c0-18.666-15.186-33.852-33.852-33.852h-43.396a9.15 9.15 0 0 0 0 18.3h13.342a33.63 33.63 0 0 0-3.8 15.553c0 18.666 15.186 33.852 33.852 33.852s33.854-15.186 33.854-33.853zM375.036 229.84h-43.394a9.15 9.15 0 0 0 0 18.3h13.342a33.63 33.63 0 0 0-3.8 15.553c0 18.666 15.186 33.852 33.852 33.852s33.852-15.186 33.852-33.852c0-18.667-15.186-33.853-33.852-33.853zM256.001 305.642c-31.507 0-59.964 16.147-76.123 43.194a9.149 9.149 0 0 0 3.162 12.547c4.339 2.591 9.956 1.176 12.547-3.162 12.825-21.466 35.409-34.282 60.414-34.282s47.589 12.815 60.414 34.282a9.143 9.143 0 0 0 12.547 3.161 9.15 9.15 0 0 0 3.162-12.547c-16.159-27.046-44.617-43.193-76.123-43.193z`}),e.jsxs("g",{fill:i,children:[e.jsx("circle",{cx:163.692,cy:257.139,r:9.15}),e.jsx("circle",{cx:382.061,cy:257.139,r:9.15})]})]}),z={title:"Base/Button/Svg Button",component:B,tags:["autodocs"],argTypes:{label:{description:"What the button does. It is also put into the aria-label attribute"},svg:{description:"The svg as React component",control:!1},width:{description:"The width of the svg. Keep in mind that the whole button is 48px x 48px"},height:{description:"The height of the svg. Keep in mind that the whole button is 48px x 48px"},onClick:{description:"The function tied to the click action"},onMouseOver:{description:"What happens when the mouse hovers the button"},onMouseLeave:{description:"What happens when the mouse leaves the button"},type:{description:"The action performed by the button when inside a form"},color:{description:"The setting to assign a color to monochrome svgs"},face:{description:"One of the settings to assign colors to multicolor svgs",control:{type:"color"}},faceshadow:{description:"One of the settings to assign colors to multicolor svgs",control:{type:"color"}},feature:{description:"One of the settings to assign colors to multicolor svgs",control:{type:"color"}},disabled:{description:"Is the button enabled?"},dragControls:{description:"If the button is a handler managed by the Framer Motion library, here goes the reference to the relative method",control:!1},classNameButton:{description:"Additonal Tailwind classes to manage position, behaviour and color of the entire button"},classNameIcon:{description:"Additonal Tailwind classes to manage the behaviour of the icon"}},parameters:{docs:{description:{component:"Icon buttons, containing an ARIA-ready svg."}}}},t={args:{label:"Previous",svg:w,width:36,height:36},parameters:{docs:{description:{story:'A monochrome icon button. To properly set the svg, the only thing required is to change the "fill" property of all the paths the svg is made of with "currentColor". The svg is then transformed with SVGR.'}}}},o={args:{label:"Previous Disabled",svg:w,width:36,height:36,disabled:!0},parameters:{docs:{description:{story:"A disabled, monochrome icon button."}}}},s={args:{label:"Emoji",svg:y,width:36,height:36},parameters:{docs:{description:{story:`A multicolor icon button. In this case, while transforming the svg via SVGR you have to assign to the "fill" properties of the svg's paths the property names listed above ("face", "faceShadow" and "feature"). If your svg is duotone, you need just two of them. IMPORTANT: the file with the svg code MUST be .tsx.`}}}},r={args:{label:"Emoji Disabled",svg:y,width:36,height:36,disabled:!0},parameters:{docs:{description:{story:"A disabled, multicolor icon button."}}}};var n,c,h;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(h=(c=t.parameters)==null?void 0:c.docs)==null?void 0:h.source}}};var l,d,p;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(p=(d=o.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var m,u,g;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: "Emoji",
    svg: BoredEmoji,
    width: 36,
    height: 36
  },
  parameters: {
    docs: {
      description: {
        story: 'A multicolor icon button. In this case, while transforming the svg via SVGR you have to assign to the "fill" properties of the svg\\'s paths the property names listed above ("face", "faceShadow" and "feature"). If your svg is duotone, you need just two of them. IMPORTANT: the file with the svg code MUST be .tsx.'
      }
    }
  }
}`,...(g=(u=s.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var v,b,f;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(f=(b=r.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};const R=["SimpleIconButton","DisabledSimpleIconButton","EmojiButton","DisabledEmojiButton"];export{r as DisabledEmojiButton,o as DisabledSimpleIconButton,s as EmojiButton,t as SimpleIconButton,R as __namedExportsOrder,z as default};
//# sourceMappingURL=SvgButton.stories-79aa455f.js.map
