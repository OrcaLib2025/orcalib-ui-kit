export interface Picture {
    src: string;
    srcSet?: string;
    media?: string;
    type?: string;
};

export interface ImgProps {
    src: string;
    alt: string;
    title?: string;
    className?: string;
    icon?: React.ReactElement;
    picture?: Picture;
    width?: number | string;
    height?: number | string;
    aspectRatio?: string;
    fallbackSrc?: string;
}