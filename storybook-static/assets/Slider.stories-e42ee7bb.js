import{j as e}from"./jsx-runtime-6eef64cc.js";import{r as a}from"./index-c013ead5.js";import"./_commonjsHelpers-725317a4.js";const k=t=>a.createElement("svg",{fill:"currentColor",width:"24px",height:"24px",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",...t},a.createElement("path",{d:"M25 12h-1v-3.816c0-4.589-3.32-8.184-8.037-8.184-4.736 0-7.963 3.671-7.963 8.184v3.816h-1c-2.206 0-4 1.794-4 4v12c0 2.206 1.794 4 4 4h18c2.206 0 4-1.794 4-4v-12c0-2.206-1.794-4-4-4zM10 8.184c0-3.409 2.33-6.184 5.963-6.184 3.596 0 6.037 2.716 6.037 6.184v3.816h-12v-3.816zM27 28c0 1.102-0.898 2-2 2h-18c-1.103 0-2-0.898-2-2v-12c0-1.102 0.897-2 2-2h18c1.102 0 2 0.898 2 2v12zM16 18c-1.104 0-2 0.895-2 2 0 0.738 0.405 1.376 1 1.723v3.277c0 0.552 0.448 1 1 1s1-0.448 1-1v-3.277c0.595-0.346 1-0.985 1-1.723 0-1.105-0.895-2-2-2z"})),V=t=>a.createElement("svg",{fill:"currentColor",width:"24px",height:"24px",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",...t},a.createElement("path",{d:"M25 12.034l-14.28 0-0.518-2.321c-0.883-3.293 0.65-6.576 4.159-7.516 3.473-0.93 6.534 1.061 7.432 4.41l0.425 1.686c0.143 0.534 0.691 0.85 1.225 0.707s0.85-0.691 0.707-1.225l-0.425-1.687c-1.187-4.433-5.325-7.045-9.881-5.824-4.574 1.226-6.741 5.607-5.573 9.966l0.402 1.803h-1.673c-2.206 0-4 1.794-4 4v12c0 2.206 1.794 4 4 4h18c2.206 0 4-1.794 4-4v-12c0-2.206-1.794-4-4-4zM27 28.035c0 1.102-0.898 2-2 2h-18c-1.103 0-2-0.898-2-2v-12c0-1.102 0.897-2 2-2h18c1.102 0 2 0.898 2 2v12zM16 18.035c-1.104 0-2 0.895-2 2 0 0.738 0.405 1.376 1 1.723v3.277c0 0.552 0.448 1 1 1s1-0.448 1-1v-3.277c0.595-0.346 1-0.985 1-1.723 0-1.105-0.895-2-2-2z"}));function i({min:t,max:o,lockable:l=!1,label:s,value:p,onChange:y}){const[c,S]=a.useState(!1),n=a.useRef(null),u=a.useRef(null);return a.useEffect(()=>{const r=(n.current.value-n.current.min)/(n.current.max-n.current.min)*100;n.current.style.background="linear-gradient(to right, #006973 "+r+"%, #F5F0F4 "+r+"%)",u.current.style.left=`calc(${r}% + (${8-r*.15}px))`,u.current.style.transform=`translateX(${-40-r*.2}%)`,c?n.current.style.background="linear-gradient(to right, #D0C9D4 "+r+"%, #F5F0F4 "+r+"%)":n.current.style.background="linear-gradient(to right, #006973 "+r+"%, #F5F0F4 "+r+"%)"},[p,n,u,c]),e.jsxs("div",{className:"flex items-center justify-center",children:[e.jsxs("div",{className:"flex items-center justify-center m-8 gap-4",children:[e.jsxs("label",{htmlFor:s,children:[s,":"]}),e.jsxs("div",{className:"relative",children:[e.jsx("input",{className:"thumb-web thumb-moz appearance-none bg-gradient-to-r from-primary-teal to-surface-high to-50% cursor-pointer w-52 h-1.5 rounded-lg",ref:n,type:"range",min:t.toString(),max:o.toString(),value:p.toString(),onChange:y,id:s,name:s,disabled:!!(l&&c)}),e.jsx("output",{ref:u,className:`absolute -top-full left-2/4 px-2 py-px rounded-full
                    ${l&&c?"bubble-disabled text-on-surface bg-surface-low":"bubble text-on-primary bg-primary-teal"}`,children:e.jsx("span",{children:p})})]})]}),l?e.jsx("button",{onClick:()=>S(r=>!r),children:c?e.jsx(V,{}):e.jsx(k,{})}):e.jsx(e.Fragment,{})]})}try{i.displayName="Slider",i.__docgenInfo={description:"",displayName:"Slider",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(e: ChangeEvent<HTMLInputElement>) => void"}},min:{defaultValue:null,description:"",name:"min",required:!0,type:{name:"string | number"}},max:{defaultValue:null,description:"",name:"max",required:!0,type:{name:"string | number"}},lockable:{defaultValue:{value:"false"},description:"",name:"lockable",required:!1,type:{name:"boolean"}}}}}catch{}const E={title:"Base/Slider",component:i,tags:["autodocs"],argTypes:{value:{description:"The value of the slider",control:!1},onChange:{description:"The onChange method to set the slider value",control:!1},label:{description:"The name of the slider"},min:{description:"The minimum value of the sliders"},max:{description:"The maximum value of the sliders"},lockable:{description:"Can the slider be disabled?"}},parameters:{docs:{description:{component:"A slider that displays its value."}}}},d={render:t=>{const[o,l]=a.useState("50");return e.jsx(i,{...t,value:o,onChange:s=>l(s.target.value)})},args:{label:"Expenses",min:0,max:100,lockable:!1},parameters:{docs:{description:{story:"An unlockable slider."}}}},m={render:t=>{const[o,l]=a.useState("50");return e.jsx(i,{...t,value:o,onChange:s=>l(s.target.value)})},args:{label:"Budget",min:0,max:100,lockable:!0},parameters:{docs:{description:{story:"A lockable slider."}}}};var g,h,v;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => {
    const [rangeValue, setRangeValue] = useState("50");
    return <Slider {...args} value={rangeValue} onChange={e => setRangeValue(e.target.value)} />;
  },
  args: {
    label: "Expenses",
    min: 0,
    max: 100,
    lockable: false
  },
  parameters: {
    docs: {
      description: {
        story: 'An unlockable slider.'
      }
    }
  }
}`,...(v=(h=d.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var f,x,b;m.parameters={...m.parameters,docs:{...(f=m.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => {
    const [rangeValue, setRangeValue] = useState("50");
    return <Slider {...args} value={rangeValue} onChange={e => setRangeValue(e.target.value)} />;
  },
  args: {
    label: "Budget",
    min: 0,
    max: 100,
    lockable: true
  },
  parameters: {
    docs: {
      description: {
        story: 'A lockable slider.'
      }
    }
  }
}`,...(b=(x=m.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};const F=["ActiveUnlockableSlider","ActiveLockableSlider"];export{m as ActiveLockableSlider,d as ActiveUnlockableSlider,F as __namedExportsOrder,E as default};
//# sourceMappingURL=Slider.stories-e42ee7bb.js.map
