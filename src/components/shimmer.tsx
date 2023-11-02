'use client';

import { use } from 'react';
import { getBase64, toBase64 } from '../lib/getBase64';
import { ImgProps } from '../types/img.type';
import Img from './img';

export default function PlaceholderShimmer({
  src,
  width,
  height,
  ...props
}: ImgProps) {
  const base64 = use(getBase64(src));

  return (
    <Img
      src={src}
      placeholderProps={{
        placeholder: `data:image/svg+xml;base64,${toBase64(
          shimmer(width, height || width)
        )}`,
      }}
      {...props}
    />
  );
}

const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;
