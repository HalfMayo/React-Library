import {useState, ReactNode} from 'react'
import SvgButton from './SvgButton';
import {ReactComponent as Menu} from '../assets/svgs/bars-svgrepo-com.svg'

interface DrawerProps {
    children?: ReactNode
    customIcons: boolean
}

export default function Drawer({children, customIcons} : DrawerProps) {

    const [isOpen, setIsOpen] = useState<boolean>(false)

    return(
        <>
            <div className={`absolute bg-white transition-[width] duration-500 ${isOpen ? "w-[650px]" : "w-0"}`}>
                {children}
            </div>
            {!customIcons &&
                <div className={`absolute flex flex-col pl-8 h-full pt-8 gap-8 bg-white transition-all duration-500 ${isOpen ? "left-[650px] pr-8 shadow-[10px_3px_20px_-15px_rgba(0,0,0,0.3)] rounded-lg": "left-0"}`}>
                    <SvgButton onClick={() => setIsOpen(p => !p)} label="Drawer" svg={Menu} width="24px" height="24px" classNameButton={isOpen ? "" : "rounded-full shadow-md"}/>
                </div>
            }
        </>
    )
}