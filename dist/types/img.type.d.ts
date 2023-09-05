import { ElementType, HTMLAttributes } from 'react';
export interface ImgProps extends HTMLAttributes<HTMLDivElement> {
    src: string;
    alt?: string;
    height?: number;
    width?: number;
    wrapper?: ElementType;
    inject?: boolean;
    aspectRatio?: `${number}/${number}`;
    imageClassName?: string;
    fetchPriority?: 'high' | 'low' | 'auto';
    placeholderProps?: {};
    loading?: 'lazy' | 'eager';
}
export interface IconProps extends HTMLAttributes<HTMLImageElement> {
    aspectRatio?: `${number}/${number}`;
    imageClassName?: string;
}
