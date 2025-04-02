import React, { useState, useEffect } from 'react';
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
    fallbackSrc = 'img/img-placeholder.svg',
    showLoader = true
}) => {
    const containerStyle: React.CSSProperties = {
        width,
        height,
        aspectRatio,
    };

    const [imgSrc, setImgSrc] = useState(src);
    const [errored, setErrored] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        setErrored(false);
        setImgSrc(src);
    }, [src]);

    const handleLoad = () => {
        setLoading(false);
    };

    const handleError = () => {
        if (!errored && fallbackSrc) {
            setLoading(true);
            setErrored(true);
            setImgSrc(fallbackSrc);
        } else {
            setLoading(false);
        }
    };

    const renderImage = () => (
        <img
            src={imgSrc}
            alt={alt}
            title={title}
            className={cl.img}
            onLoad={handleLoad}
            onError={handleError}
            loading="lazy"
            style={{ opacity: loading ? 0 : 1 }}
        />
    );

    if (picture) {
        return (
            <picture
                className={`${cl.imgContainer} ${className || ''}`}
                style={containerStyle}
            >
                {showLoader && loading && (
                    <div className={cl.loader}>
                        <div className={cl.loaderSpinner} />
                    </div>
                )}
                {picture.srcSet && (
                    <source
                        srcSet={picture.srcSet}
                        media={picture.media}
                        type={picture.type}
                        onError={handleError}
                    />
                )}
                {renderImage()}
                {icon && <div className={cl.iconContainer}>{icon}</div>}
            </picture>
        );
    }

    return (
        <div
            className={`${cl.imgContainer} ${className || ''}`}
            style={containerStyle}
        >
            {showLoader && loading && (
                <div className={cl.loader}>
                    <div className={cl.loaderSpinner} />
                </div>
            )}
            {renderImage()}
            {icon && <div className={cl.iconContainer}>{icon}</div>}
        </div>
    );
};
