import{j as l}from"./jsx-runtime-6eef64cc.js";import{S as c}from"./right-chevron-svgrepo-com-6fc546a3.js";function t({info:e,isOpen:r,i:a,onClick:i,className:d,width:s="500px",compressed:n=!1,bgTitle:p,bgText:o}){return l.jsxs("li",{className:"list-none",style:{width:`${s}`},children:[l.jsxs("div",{"aria-label":r===a?"Hide":"Show",onClick:()=>i(a),className:`p-4 text-base m-0 flex items-center justify-between gap-4 w-full ${d} ${p}`,children:[l.jsxs("div",{className:"w-full flex gap-4",children:[l.jsx("img",{className:`object-cover w-14 h-14 ${e.img?"":"hidden"}`,src:e.img}),l.jsxs("div",{className:"flex flex-col items-start justify-center",style:{width:`${parseInt(s)-144}px`},children:[l.jsx("h3",{className:"overflow-hidden text-left brief-title",children:e.title}),l.jsx("p",{className:`text-sm overflow-hidden text-left brief-subtitle ${e.subtitle?"":"hidden"}`,children:e.subtitle})]})]},"title"),l.jsx(c,{width:"24px",height:"24px",className:`${r===a?"rotate-90 origin-[50%_50%] transition-all duration-700":"rotate-0 origin-[50%_50%] transition-all duration-500"}`})]}),l.jsx("div",{className:`${o} overflow-hidden transition-[max-height] ease-linear ${r===a?"max-h-[1000px] duration-[1500ms]":"max-h-0 duration-1000"}`,children:l.jsx("div",{className:"p-4",children:l.jsxs("div",{className:n?"pr-2 max-h-40 overflow-y-auto scrollbar":"",children:[l.jsx("p",{className:`${e.propOne?"":"hidden"}`,children:e.propOne}),l.jsx("p",{className:`${e.propTwo?"":"hidden"}`,children:e.propTwo}),l.jsx("p",{className:`${e.propThree?"":"hidden"}`,children:e.propThree}),l.jsx("p",{className:`${e.propFour?"":"hidden"}`,children:e.propFour}),l.jsx("p",{className:`${e.propFive?"":"hidden"}`,children:e.propFive}),l.jsx("p",{className:`${e.propSix?"":"hidden"}`,children:e.propSix})]})})})]})}try{t.displayName="Toggle",t.__docgenInfo={description:"",displayName:"Toggle",props:{info:{defaultValue:null,description:"",name:"info",required:!0,type:{name:"ToggleProps"}},isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"number | null"}},i:{defaultValue:null,description:"",name:"i",required:!0,type:{name:"number"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"(i: number) => void"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},width:{defaultValue:{value:"500px"},description:"",name:"width",required:!1,type:{name:"string"}},compressed:{defaultValue:{value:"false"},description:"",name:"compressed",required:!1,type:{name:"boolean"}},bgTitle:{defaultValue:null,description:"",name:"bgTitle",required:!1,type:{name:"string"}},bgText:{defaultValue:null,description:"",name:"bgText",required:!1,type:{name:"string"}}}}}catch{}export{t as T};
//# sourceMappingURL=Toggle-e190b535.js.map