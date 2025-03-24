export interface TooltipProps {
    text?: string;
    content?: string | React.ReactNode;
    size?: 'sm' | 'md' | 'lg';
    children?: React.ReactNode;
    className?: string;
    onClick?: () => void;
    position?: 'top' | 'bottom' | 'left' | 'right';
    theme: 'light' | 'dark';
}