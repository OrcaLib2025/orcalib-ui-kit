import { Themes } from "./theme";

export interface DropdownButton {
    text: string;
    onClick: () => void;
}

export interface CustomDropdownProps extends Themes {
    title: string;
    options: DropdownButton[];
}