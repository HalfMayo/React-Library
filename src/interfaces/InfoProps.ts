interface HeaderProps {
    id: number;
    img?: string;
    title: string;
    subtitle?: string;
}

export interface ToggleProps extends HeaderProps{
    propOne: string;
    propTwo?: string;
    propThree?: string;
    propFour?: string;
    propFive?: string;
    propSix?: string;
}

export interface AccordionElProps extends HeaderProps {
    propOne: ToggleProps[]
}