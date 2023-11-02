import { readFile } from 'fs/promises';
import { getPlaiceholder } from 'plaiceholder';
import { ImgProps } from '../types/img.type';
import Img from './img';

export default async function PlaceholderLocal({ src, ...props }: ImgProps) {
  let buffer: ArrayBuffer;

  if (src.startsWith('http')) {
    const res = await fetch(src);
    buffer = await res.arrayBuffer();
  } else {
    buffer = await readFile('.' + src);
  }

  const { base64 } = await getPlaiceholder(Buffer.from(buffer));

  return (
    <Img
      src={src}
      placeholderProps={{ placeholder: 'blur', blurDataURL: base64 }}
      {...props}
    />
  );
}
