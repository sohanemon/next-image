import { readFile } from 'fs/promises';
import { getPlaiceholder } from 'plaiceholder';
import { ImgProps } from '../types/img.type';
import Img from './img';

export default async function PlaceholderLocal({ src, ...props }: ImgProps) {
  let buffer: ArrayBuffer = await readFile('.' + src);
  const { base64 } = await getPlaiceholder(Buffer.from(buffer));

  return (
    <Img
      src={src}
      placeholderProps={{ placeholder: 'blur', blurDataURL: base64 }}
      {...props}
    />
  );
}
