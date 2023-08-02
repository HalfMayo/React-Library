import { ChildrenProps } from "../interfaces/ChildrenProps"

interface TooltipProps extends ChildrenProps {
    title: string,
    side: "top" | "bottom" | "left" | "right",
    className?: string
}

export default function Tooltip({children, title, side, className} : TooltipProps) {
    return(
        <div className={`${className} relative group w-fit h-fit`}>
            {children}
            <span className={`
            ${side === "right"
                ? "top-[50%] translate-y-[-50%] left-14"
                : side === "bottom"
                    ? "left-[50%] translate-x-[-50%] top-14"
                    : side === "top"
                        ? "left-[50%] translate-x-[-50%] bottom-14"
                        : "top-[50%] translate-y-[-50%] right-14"
            }
            absolute invisible text-center bg-surface-container px-2 py-1.5 rounded-md group-hover:visible`}>{title}</span>
        </div>
    )
}