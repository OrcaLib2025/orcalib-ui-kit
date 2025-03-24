import React from 'react';
import cl from './Img.module.scss';
import { ImgProps } from '@models/Img';

export const Img: React.FC<ImgProps> = ({
    src,
    alt,
    title,
    className,
    icon,
    picture,
    width = '100%',
    height = '100%',
    aspectRatio = '1 / 1',
}) => {
    const containerStyle: React.CSSProperties = {
        width,
        height,
        aspectRatio,
    };

    if (picture) {
        return (
            <picture
                className={`${cl.imgContainer} ${className || ''}`}
                style={containerStyle}
            >
                {picture.srcSet && (
                    <source
                        srcSet={picture.srcSet}
                        media={picture.media}
                        type={picture.type}
                    />
                )}
                <img
                    src={picture.src}
                    alt={alt}
                    title={title}
                    className={cl.img}
                />
                {icon && <div className={cl.iconContainer}>{icon}</div>}
            </picture>
        );
    }

    return (
        <div
            className={`${cl.imgContainer} ${className || ''}`}
            style={containerStyle}
        >
            <img
                src={src}
                alt={alt}
                title={title}
                className={cl.img}
            />
            {icon && <div className={cl.iconContainer}>{icon}</div>}
        </div>
    );
};
