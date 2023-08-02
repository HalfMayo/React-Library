import{j as o}from"./jsx-runtime-6eef64cc.js";import{S as d}from"./SvgButton-37b57289.js";import{S as c}from"./dots-3-horizontal-svgrepo-com-16e2b5c1.js";import"./index-c013ead5.js";import"./_commonjsHelpers-725317a4.js";function a({children:r,title:n,side:e,className:p}){return o.jsxs("div",{className:`${p} relative group w-fit h-fit`,children:[r,o.jsx("span",{className:`
            ${e==="right"?"top-[50%] translate-y-[-50%] left-14":e==="bottom"?"left-[50%] translate-x-[-50%] top-14":e==="top"?"left-[50%] translate-x-[-50%] bottom-14":"top-[50%] translate-y-[-50%] right-14"}
            absolute invisible text-center bg-surface-container px-2 py-1.5 rounded-md group-hover:visible`,children:n})]})}try{a.displayName="Tooltip",a.__docgenInfo={description:"",displayName:"Tooltip",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},side:{defaultValue:null,description:"",name:"side",required:!0,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'},{value:'"left"'},{value:'"right"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const v={title:"Base/Tooltip",component:a,tags:["autodocs"],argTypes:{children:{description:"What is the tooltip referred to?",control:!1},title:{description:"The content of the tooltip"},side:{description:"Where does the tooltip appear?",control:{type:"radio"}},className:{description:"Additional Tailwind classes to manage the component position"}},parameters:{docs:{description:{component:"A simple drawer with a SVG button to toggle it."}}}},t={args:{title:"More options",side:"right",children:o.jsx(d,{label:"More options",svg:c,classNameButton:"rounded-full shadow-md"}),className:"left-2/4 translate-x-[-50%] top-[200px]"}};var s,i,l;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    title: "More options",
    side: "right",
    children: <SvgButton label="More options" svg={Dots} classNameButton='rounded-full shadow-md' />,
    className: "left-2/4 translate-x-[-50%] top-[200px]"
  }
}`,...(l=(i=t.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const x=["SvgButtonTooltip"];export{t as SvgButtonTooltip,x as __namedExportsOrder,v as default};
//# sourceMappingURL=Tooltip.stories-89bd8a12.js.map