import React, { useState } from 'react';
import cl from './Img.module.scss';
import { ImgProps } from '../../utils/models/Img';

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
    fallbackSrc = 'img/img-placeholder.svg'
}) => {
    const containerStyle: React.CSSProperties = {
        width,
        height,
        aspectRatio,
    };

    const [imgSrc, setImgSrc] = useState(src);
    const [errored, setErrored] = useState(false);

    const handleError = () => {
        if (!errored && fallbackSrc) {
            setImgSrc(fallbackSrc);
            setErrored(true);
        }
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
                        onError={handleError}
                    />
                )}
                <img
                    src={imgSrc}
                    alt={alt}
                    title={title}
                    className={cl.img}
                    onError={handleError}
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
                src={imgSrc}
                alt={alt}
                title={title}
                className={cl.img}
                onError={handleError}
            />
            {icon && <div className={cl.iconContainer}>{icon}</div>}
        </div>
    );
};
