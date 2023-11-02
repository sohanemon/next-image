'use client';

import { use } from 'react';
import { getBase64 } from '../lib/utils';
import { ImgProps } from '../types/img.type';
import Img from './img';

export default function PlaceholderRemote({ src, ...props }: ImgProps) {
  const base64 = use(getBase64(src));

  return (
    <Img
      src={src}
      placeholderProps={{ placeholder: 'blur', blurDataURL: base64 }}
      {...props}
    />
  );
}
