import { CSSProperties, ReactNode } from 'react';

export interface GridProps {
    children: ReactNode;
    columns?: number | { sm?: number; md?: number; lg?: number; xl?: number };
    gap?: number | string;
    className?: string;
    style?: CSSProperties;
}