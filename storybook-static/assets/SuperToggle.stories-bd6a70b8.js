import{j as l}from"./jsx-runtime-6eef64cc.js";import{S as a}from"./SuperToggle-9189b589.js";import{r as d}from"./index-c013ead5.js";import"./Accordion-6ea8e4d5.js";import"./Toggle-e190b535.js";import"./right-chevron-svgrepo-com-6fc546a3.js";import"./_commonjsHelpers-725317a4.js";const O={title:"Base/Toggle/Accordion Toggle",component:a,tags:["autodocs"],argTypes:{info:{description:"The array of data to display"},isOpen:{description:"The state that holds the value of the currently open toggle",control:!1},width:{description:"The width of the component"},bgMainTitle:{description:"The background color of the title area. It accepts only Tailwind classes"},bgInnerTitle:{description:"The background color of the title area of the nested accordion. It accepts only Tailwind classes"},bgInnerText:{description:"The background color of the extended area of the nested accordion. It accepts only Tailwind classes"},className:{description:"Additional classes to manage the component position inside the page"}},parameters:{docs:{description:{component:"A complex toggle to display a nested accordion."}}}},e={render:c=>{const[n,t]=d.useState(null);function p(o){t(n===o?null:o)}return l.jsx(a,{...c,isOpen:n,onClick:p})},args:{info:{id:45728935,title:"Henlo?",propOne:[{id:865,title:"Quaso",propOne:""},{id:845,title:"Very Quaso",propOne:""},{id:825,title:"Mucho Quaso",propOne:""}]},bgMainTitle:"bg-white",bgInnerTitle:"bg-surface",bgInnerText:"bg-surface-container"}};var r,s,i;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: args => {
    const [isOpen, setIsOpen] = useState<number | null>(null);
    function toggleText(i: number) {
      isOpen === i ? setIsOpen(null) : setIsOpen(i);
    }
    return <SuperToggle {...args} isOpen={isOpen} onClick={toggleText} />;
  },
  args: {
    info: {
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
    },
    bgMainTitle: "bg-white",
    bgInnerTitle: "bg-surface",
    bgInnerText: "bg-surface-container"
  }
}`,...(i=(s=e.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const x=["Faq"];export{e as Faq,x as __namedExportsOrder,O as default};
//# sourceMappingURL=SuperToggle.stories-bd6a70b8.js.map
