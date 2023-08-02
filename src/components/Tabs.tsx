interface TabsProps {
    className?: string,
    width?: string,
    tabs: string[],
    state: number,
    onClick: (i:number) => void
}

export default function Tabs({className, tabs, state, onClick, width = "96"}: TabsProps) {

    return(
        <>
        <ul className={`relative flex gap-4 ${className}`}>
            <div className="absolute h-8 border-solid border-b-[3px] border-primary transition duration-300" style={{width: `${width}px`, transform: `translateX(${state*(Number(width)+16)}px)`}}></div>
            {tabs.map((tab, i) => 
                <li className="w-24 flex items-center justify-center" key={i}>
                    <button className={state === i ? "font-bold" : "font-normal"} onClick={()=>onClick(i)}>{tab}</button>
                </li>
            )}
        </ul>
        </>
    )
}