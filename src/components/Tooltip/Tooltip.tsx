import React from "react";
import { TooltipProps } from "../../utils/models/tooltip";
import { Button } from "../Button";
import cl from './Tooltip.module.scss';
import classnames from 'classnames';
import { useTheme } from '../../context/ThemeContext';

export const Tooltip: React.FC<TooltipProps> = ({
    text,
    content,
    children,
    className,
    size = 'md',
    position = 'top',
    onClick,
}) => {
    const { theme } = useTheme();
    return (
        <div
            className={classnames(className)}
        >
            <div
                className={classnames(
                    cl["tooltip-container"],
                    cl[`tooltip-container--${size}`],
                    cl[`tooltip-container--${position}`]
                )}
            >
                {children ? (
                    children
                ) : (
                    <Button
                        text={text}
                        className={classnames(cl["help-button"], cl[`help-button--${size}`])}
                        onClick={onClick}
                    />
                )}
                <div
                    role="tooltip"
                    id="help-tooltip"
                    className={classnames(
                        cl["tooltip"],
                        cl[`tooltip-theme-${theme}`],
                        cl[`tooltip--${size}`],
                        cl[`tooltip--${position}`]
                    )}
                >
                    <strong>
                        {size !== 'sm' ? '💡' : ''}
                        {" "}
                        {content}
                    </strong>
                </div>
            </div>
        </div>
    );
};