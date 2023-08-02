import{j as x}from"./jsx-runtime-6eef64cc.js";import"./index-c013ead5.js";import"./_commonjsHelpers-725317a4.js";function o({color:e="primary",rank:h="default",label:n,onClick:f,disabled:s=!1,type:g,className:k}){return x.jsx("button",{type:g,className:`${k} py-2 px-3 w-fit text-sm font-medium border rounded-full
                            ${s?"text-disabled bg-transparent border-disabled":h==="main"?`${e==="primary"?"text-white bg-primary border-primary":e==="secondary"?"bg-secondary-container border-secondary-container text-on-secondary-container":"bg-tertiary-container border-tertiary-container text-on-tertiary-container"}`:`bg-transparent ${e==="primary"?"text-primary border-primary":e==="secondary"?"text-secondary border-secondary":"text-tertiary border-tertiary"}`}`,onClick:f,disabled:s,value:n,children:n})}try{o.displayName="Button",o.__docgenInfo={description:"",displayName:"Button",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},color:{defaultValue:{value:"primary"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}},rank:{defaultValue:{value:"default"},description:"",name:"rank",required:!1,type:{name:"enum",value:[{value:'"main"'},{value:'"default"'}]}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"submit"'},{value:'"reset"'}]}}}}}catch{}const S={title:"Base/Button/Text Button",component:o,tags:["autodocs"],argTypes:{rank:{description:"Is this an important action or a standard one?",options:["main","default"],control:{type:"radio"}},color:{description:"Which key color do you use for this button?",options:["primary","secondary","tertiary"],control:{type:"radio"}},label:{description:"The text to put inside the button"},disabled:{description:"Is the button enabled?"},onClick:{description:"The function tied to the click action",control:!1},type:{description:"What does this button do?"},className:{description:"Additional classes to manage the component position inside the page"}},parameters:{docs:{description:{component:"A classic pill button with text."}}}},t={args:{rank:"main",color:"primary",label:"Button",disabled:!1},parameters:{docs:{description:{story:"Primary buttons are meant to highlight the most important actions that the user can take. Should not be abused."}}}},a={args:{rank:"default",color:"primary",label:"Button",disabled:!1},parameters:{docs:{description:{story:"Secondary buttons contain other important actions, though not the most important ones."}}}},r={args:{rank:"default",color:"primary",label:"Button",disabled:!0},parameters:{docs:{description:{story:"A disabled, not clickable, button."}}}};var i,d,l;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    rank: "main",
    color: "primary",
    label: 'Button',
    disabled: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Primary buttons are meant to highlight the most important actions that the user can take. Should not be abused.'
      }
    }
  }
}`,...(l=(d=t.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var c,u,p;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    rank: "default",
    color: "primary",
    label: 'Button',
    disabled: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Secondary buttons contain other important actions, though not the most important ones.'
      }
    }
  }
}`,...(p=(u=a.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var m,y,b;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    rank: "default",
    color: "primary",
    label: 'Button',
    disabled: true
  },
  parameters: {
    docs: {
      description: {
        story: 'A disabled, not clickable, button.'
      }
    }
  }
}`,...(b=(y=r.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};const q=["Primary","Secondary","Disabled"];export{r as Disabled,t as Primary,a as Secondary,q as __namedExportsOrder,S as default};
//# sourceMappingURL=Button.stories-f0652c66.js.map
