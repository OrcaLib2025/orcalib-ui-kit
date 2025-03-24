export interface Option {
    value: string;
    label: string;
}

export interface SelectProps {
    options: Option[];
    value?: string;
    placeholder?: string;
    size?: 'sm' | 'md' | 'lg' | 'full';
    onChange?: (value: string) => void;
    className?: string;
    disabled?: boolean;
}