'use client';

import { ReactSVG } from 'react-svg';
import { ImgProps } from '../types/img.type';
interface SvgProps extends ImgProps {}

export default function Svg({ src, aspectRatio, ...props }: SvgProps) {
  return (
    // @ts-ignore
    <ReactSVG
      src={src}
      style={{ aspectRatio: aspectRatio || '1/1' }}
      {...props}
    />
  );
}
