import React, { CSSProperties } from 'react';
import cl from './Grid.module.scss';
import { GridProps } from '@models/grid';

export const Grid: React.FC<GridProps> = ({
    children,
    columns = 1,
    gap = '16px',
    className,
    style,
}) => {
    const getColumns = () => {
        if (typeof columns === 'number') {
            return {
                sm: columns,
                md: columns,
                lg: columns,
                xl: columns,
            };
        }
        return {
            sm: columns.sm || 1,
            md: columns.md || columns.sm || 1,
            lg: columns.lg || columns.md || columns.sm || 1,
            xl: columns.xl || columns.lg || columns.md || columns.sm || 1,
        };
    };

    const { sm, md, lg, xl } = getColumns();

    const gridStyle: CSSProperties & Record<string, string | number> = {
        '--columns': sm,
        '--md-columns': md,
        '--lg-columns': lg,
        '--xl-columns': xl,
        '--gap': typeof gap === 'number' ? `${gap}px` : gap,
        ...style,
    };

    return (
        <div
            className={`${cl.grid} ${className || ''}`}
            style={gridStyle}
        >
            {children}
        </div>
    );
};