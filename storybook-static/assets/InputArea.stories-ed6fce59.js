import{j as h}from"./jsx-runtime-6eef64cc.js";import{I as i,S as g}from"./plus-svgrepo-com-947c4fbb.js";import{r as t}from"./index-c013ead5.js";import"./SvgButton-37b57289.js";import"./_commonjsHelpers-725317a4.js";const v=e=>t.createElement("svg",{"aria-hidden":"true",height:"24px",width:"24px",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 50 50",enableBackground:"new 0 0 50 50",xmlSpace:"preserve",fill:"#000000",stroke:"#000000",strokeWidth:.7000000000000001,...e},t.createElement("g",{id:"SVGRepo_bgCarrier",strokeWidth:0}),t.createElement("g",{id:"SVGRepo_tracerCarrier",strokeLinecap:"round",strokeLinejoin:"round"}),t.createElement("g",{id:"SVGRepo_iconCarrier"},t.createElement("path",{className:"icon",fill:"currentColor",d:"M20.745,32.62c2.883,0,5.606-1.022,7.773-2.881L39.052,40.3c0.195,0.196,0.452,0.294,0.708,0.294 c0.255,0,0.511-0.097,0.706-0.292c0.391-0.39,0.392-1.023,0.002-1.414L29.925,28.319c3.947-4.714,3.717-11.773-0.705-16.205 c-2.264-2.27-5.274-3.52-8.476-3.52s-6.212,1.25-8.476,3.52c-4.671,4.683-4.671,12.304,0,16.987 C14.533,31.37,17.543,32.62,20.745,32.62z M13.685,13.526c1.886-1.891,4.393-2.932,7.06-2.932s5.174,1.041,7.06,2.932 c3.895,3.905,3.895,10.258,0,14.163c-1.886,1.891-4.393,2.932-7.06,2.932s-5.174-1.041-7.06-2.932 C9.791,23.784,9.791,17.431,13.685,13.526z"}))),A={title:"Base/Input Area",component:i,tags:["autodocs"],argTypes:{className:{description:"Additional classes to add to the component"},label:{description:"It sets the label and its placeholder of the input/textarea, and the ARIA-label of the svg button"},inputType:{description:"Is this an input or a textarea?"},svg:{description:"The svg as React component",control:!1},value:{description:"The state that holds the value of the input/teaxtarea",control:!1},setValue:{description:"The onChange method to set the input/textarea value",control:!1},handleSubmit:{description:"The onSubmit event method called when the user submits the form",control:!1},width:{description:"The width of the component"},maxHeight:{description:"The maximum height of the component"}},parameters:{docs:{description:{component:"A bar that can be either an input or a textarea, which submits its value when the user clicks on the svg button."}}}},a={render:e=>{const[s,o]=t.useState("");return h.jsx(i,{...e,value:s,setValue:n=>o(n.target.value)})},args:{label:"Search",inputType:"input",svg:v,handleSubmit(e){e.preventDefault()}},parameters:{docs:{description:{story:"A search input bar."}}}},r={render:e=>{const[s,o]=t.useState("");return h.jsx(i,{...e,value:s,setValue:n=>o(n.target.value)})},args:{label:"Add",inputType:"textarea",svg:g,handleSubmit(e){e.preventDefault()}},parameters:{docs:{description:{story:"An area to write stuff."}}}};var l,c,u;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState("");
    return <InputArea {...args} value={value} setValue={e => setValue(e.target.value)} />;
  },
  args: {
    label: 'Search',
    inputType: 'input',
    svg: MGlass,
    handleSubmit(e) {
      e.preventDefault();
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'A search input bar.'
      }
    }
  }
}`,...(u=(c=a.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var p,d,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState("");
    return <InputArea {...args} value={value} setValue={e => setValue(e.target.value)} />;
  },
  args: {
    label: 'Add',
    inputType: 'textarea',
    svg: Plus,
    handleSubmit(e) {
      e.preventDefault();
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'An area to write stuff.'
      }
    }
  }
}`,...(m=(d=r.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const V=["SearchItem","AddItem"];export{r as AddItem,a as SearchItem,V as __namedExportsOrder,A as default};
//# sourceMappingURL=InputArea.stories-ed6fce59.js.map
