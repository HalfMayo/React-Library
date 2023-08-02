import{j as e}from"./jsx-runtime-6eef64cc.js";import{r as p}from"./index-c013ead5.js";import"./_commonjsHelpers-725317a4.js";function n({className:t,tabs:o,state:s,onClick:i,width:a="96"}){return e.jsx(e.Fragment,{children:e.jsxs("ul",{className:`relative flex gap-4 ${t}`,children:[e.jsx("div",{className:"absolute h-8 border-solid border-b-[3px] border-primary transition duration-300",style:{width:`${a}px`,transform:`translateX(${s*(Number(a)+16)}px)`}}),o.map((m,l)=>e.jsx("li",{className:"w-24 flex items-center justify-center",children:e.jsx("button",{className:s===l?"font-bold":"font-normal",onClick:()=>i(l),children:m})},l))]})})}try{n.displayName="Tabs",n.__docgenInfo={description:"",displayName:"Tabs",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},width:{defaultValue:{value:"96"},description:"",name:"width",required:!1,type:{name:"string"}},tabs:{defaultValue:null,description:"",name:"tabs",required:!0,type:{name:"string[]"}},state:{defaultValue:null,description:"",name:"state",required:!0,type:{name:"number"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"(i: number) => void"}}}}}catch{}const g={title:"Base/Tabs",component:n,tags:["autodocs"],argTypes:{className:{description:"Additional Tailwind classes to add to the component"},width:{description:"A width different from the default one. Use only if the tab title is very long"},tabs:{description:"An array of strings that holds the names of the tabs"},state:{description:"The state that holds the value of the currently open tab",control:!1},onClick:{description:"The function tied to the click action. In this case, it's also tied to the setState method",control:!1}},parameters:{docs:{description:{component:"A series of clickable tabs."}}}},r={render:t=>{const[o,s]=p.useState(0);function i(a){s(a)}return e.jsx(n,{...t,state:o,onClick:i})},args:{tabs:["Audio","Video","Pictures","Downloads"]}};var c,d,u;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => {
    const [isActive, setIsActive] = useState<number>(0);
    function toggleTab(i: number) {
      setIsActive(i);
    }
    return <Tabs {...args} state={isActive} onClick={toggleTab} />;
  },
  args: {
    tabs: ["Audio", "Video", "Pictures", "Downloads"]
  }
}`,...(u=(d=r.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const x=["TextTabs"];export{r as TextTabs,x as __namedExportsOrder,g as default};
//# sourceMappingURL=Tabs.stories-2a085bc1.js.map
