import React from 'react';
import { Button } from '../Button';
import { ModalProps } from '../../utils/models/button';
import cl from './Modal.module.scss';
import classnames from 'classnames';

export const Modal: React.FC<ModalProps> = ({
    onClose,
    onBackgroundClick,
    className,
    isVisible,
    isClosable = true,
    title,
    subtitle,
    action,
    children,
    buttonDirection = "row",
    backgroundImg,
    theme,
}) => {
    if (!isVisible) return null;

    const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget && onBackgroundClick) {
            onBackgroundClick();
        }
    };

    return (
        <div
            className={classnames(cl['modal-overlay'], { [cl['visible']]: isVisible })}
            onClick={handleBackgroundClick}
            style={{
                backgroundImage: backgroundImg ? `url(${backgroundImg})` : undefined,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            {backgroundImg && <div className={classnames(cl[`overlay-fade`], cl[`overlay-fade-theme-${theme}`])} onClick={handleBackgroundClick} />}
            <div className={classnames(cl['modal'], cl[`modal-theme-${theme}`], className)}>
                {isClosable && (
                    <button
                        className={cl['modal-close']}
                        onClick={() => onClose(false)}
                    >
                        X
                    </button>
                )}

                <div className={cl['modal-header']}>
                    <h2 className={classnames(cl['modal-title'], cl[`modal-title-theme-${theme}`])}>{title}</h2>
                    {subtitle && <p className={cl['modal-subtitle']}>{subtitle}</p>}
                </div>

                <div className={cl['modal-divider']} />

                <div className={cl['modal-content']}>
                    {children}
                </div>

                {action && (
                    <div className={classnames(
                        cl['modal-actions'],
                        cl[`modal-actions-${buttonDirection}`],
                    )}>
                        {action.map((buttonProps, index) => (
                            <Button
                                theme={theme}
                                key={index}
                                {...buttonProps}                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};
