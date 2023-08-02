import{j as s}from"./jsx-runtime-6eef64cc.js";import{r as q}from"./index-c013ead5.js";import{T}from"./Toggle-e190b535.js";import{S as x}from"./SuperToggle-9189b589.js";import"./_commonjsHelpers-725317a4.js";import"./right-chevron-svgrepo-com-6fc546a3.js";import"./Accordion-6ea8e4d5.js";function r({infos:i,width:g="600px",compressed:b=!1,className:f,bgMainTitle:o,bgInnerTitle:u,bgInnerText:h}){const[a,l]=q.useState(null);function c(e){l(a===e?null:e)}function v(e){return typeof e.propOne=="string"}return s.jsx("ul",{className:f,style:{width:`${g}`},children:i.map((e,t)=>v(e)?s.jsx(T,{info:e,i:t,isOpen:a,onClick:c,className:a===t||t===i.length-1?"":"border-b border-surface-low",width:"100%",compressed:b,bgTitle:o,bgText:u},t):s.jsx(x,{info:e,i:t,isOpen:a,onClick:c,className:t===i.length-1?"":"border-b border-surface-low",width:"100%",bgMainTitle:o,bgInnerTitle:u,bgInnerText:h},t))})}try{r.displayName="SuperAccordion",r.__docgenInfo={description:"",displayName:"SuperAccordion",props:{infos:{defaultValue:null,description:"",name:"infos",required:!0,type:{name:"(ToggleProps | AccordionElProps)[]"}},width:{defaultValue:{value:"600px"},description:"",name:"width",required:!1,type:{name:"string"}},compressed:{defaultValue:{value:"false"},description:"",name:"compressed",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},bgMainTitle:{defaultValue:null,description:"",name:"bgMainTitle",required:!1,type:{name:"string"}},bgInnerTitle:{defaultValue:null,description:"",name:"bgInnerTitle",required:!1,type:{name:"string"}},bgInnerText:{defaultValue:null,description:"",name:"bgInnerText",required:!1,type:{name:"string"}}}}}catch{}const C={title:"Complex/Accordion/Nested Accordion",component:r,tags:["autodocs"],argTypes:{infos:{description:"The array with the data to display"},width:{description:"The width of the component"},compressed:{description:"If true, it sets a fixed height with a scrollbar for the extended area"},bgMainTitle:{description:"The background color of the title area. It accepts only Tailwind classes"},bgInnerTitle:{description:"The background color of the extended areas of ToggleProps elements and of the title area of the nested accordion. It accepts only Tailwind classes"},bgInnerText:{description:"The background color of the extended area of the nested accordion. It accepts only Tailwind classes"},className:{description:"Additional classes to manage the component position inside the page"}},parameters:{docs:{description:{component:"A complex accordion to display both simple and complex toggle elements."}}}},n={args:{infos:[{id:0,title:"Surroundend?",propOne:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec molestie neque mauris, at volutpat augue tempor at. Ut id erat ipsum. Sed vel dolor imperdiet, facilisis erat auctor, finibus metus. Curabitur pulvinar vehicula velit eget accumsan. In quis tortor a leo aliquam accumsan. Morbi molestie neque accumsan malesuada venenatis. Suspendisse libero sapien, ornare ac rutrum ac, egestas eu purus. Integer fermentum placerat nibh. Suspendisse potenti. Nullam sit amet erat vehicula, accumsan lorem quis, interdum purus. Integer consectetur tortor vel volutpat lacinia. Duis pulvinar massa vitae arcu posuere fermentum. Nulla facilisi."},{id:1,title:"Isolated?",propOne:"Curabitur pharetra varius sapien porta commodo. Vivamus ultricies nibh enim, nec ultricies neque dapibus eu. Vestibulum non nibh feugiat, feugiat risus eu, tincidunt tellus. Vestibulum enim nibh, tincidunt ut varius convallis, pharetra dapibus nisl. Proin leo justo, blandit id molestie sed, dignissim a sem. Quisque consectetur ac elit a congue. Cras imperdiet in tellus in aliquam. Proin lacinia neque et egestas sollicitudin. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla viverra dolor at urna euismod, nec pretium est ultrices. Donec eget mi rhoncus, tempus erat nec, bibendum turpis. Quisque purus metus, accumsan vitae magna porta, malesuada molestie magna."},{id:45728935,title:"Henlo?",propOne:[{id:865,title:"Quaso",propOne:""},{id:845,title:"Very Quaso",propOne:""},{id:825,title:"Mucho Quaso",propOne:""}]}],bgMainTitle:"bg-white",bgInnerTitle:"bg-surface",bgInnerText:"bg-surface-container"}};var p,d,m;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
      propOne: [{
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
  }
}`,...(m=(d=n.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const A=["NestedAccordion"];export{n as NestedAccordion,A as __namedExportsOrder,C as default};
//# sourceMappingURL=SuperAccordion.stories-c7098d66.js.map
