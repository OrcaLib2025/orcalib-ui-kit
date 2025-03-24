export interface InputProps {
    onFocus?: () => void;
    clearable?: boolean;
    type?: 'text' | 'password' | 'email' | 'number';
    label?: string;
    placeholder?: string;
    value: string;
    onChange: (value: string) => void;
    size?: 'default' | 'large';
    theme: 'light' | 'dark';
}