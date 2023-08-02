import {AccordionElProps} from "../interfaces/InfoProps"
import Accordion from "./Accordion";
import { ReactComponent as Arrow } from '../assets/svgs/right-chevron-svgrepo-com.svg'

interface SuperToggleElProps {
    info: AccordionElProps;
    isOpen: number | null,
    i: number;
    onClick: (i:number) => void,
    className?: string,
    width?: string,
    bgMainTitle?: string,
    bgInnerTitle?: string,
    bgInnerText?: string
}

export default function SuperToggle({info, isOpen, i, onClick, className, width = "500px", bgInnerTitle, bgInnerText, bgMainTitle} : SuperToggleElProps) {

    return(
        <li className="list-none" style={{width: `${width}`}}>
            <div aria-label={isOpen === i ? "Hide" : "Show"} onClick={() => onClick(i)} className={`p-4 text-base m-0 flex items-center justify-between gap-4 w-full ${className} ${bgMainTitle}`}>
                <div className="w-full flex gap-4" key="title">
                        <img className={`object-cover w-14 h-14 ${info.img ? "" : "hidden"}`} src={info.img}/>
                        <div  className="flex flex-col items-start justify-center" style={{width: `${parseInt(width)-144}px`}}>
                            <h3 className="overflow-hidden text-left brief-title">{info.title}</h3>
                            <p className={`text-sm overflow-hidden text-left brief-subtitle ${info.subtitle ? "" : "hidden"}`}>{info.subtitle}</p>
                        </div>
                </div>
                <Arrow width="24px" height="24px" className={`${isOpen === i ? "rotate-90 origin-[50%_50%] transition-all duration-700" : "rotate-0 origin-[50%_50%] transition-all duration-500"}`}/>
            </div>
            <div className={`${bgInnerTitle} max-h-0 overflow-hidden transition-[max-height] ease-linear duration-700 ${isOpen === i ? " max-h-96 transition-[max-height] ease-linear duration-700" : ""}`}>
                <div className="flex justify-center max-h-96 overflow-y-auto scrollbar pb-4">
                    <Accordion infos={info.propOne} width="95%" bgTitle={bgInnerTitle} bgText={bgInnerText}/>
                </div>
            </div>
        </li>
    )
}