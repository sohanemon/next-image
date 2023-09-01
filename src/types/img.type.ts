import { HTMLAttributes } from 'react';

export interface ImgProps extends HTMLAttributes<HTMLDivElement> {
  src: string;
  alt?: string;
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
