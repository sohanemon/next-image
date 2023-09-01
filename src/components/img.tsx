import { cleanSrc, cn } from '@sohanemon/utils';
import Image from 'next/image';
import { ImgProps } from '../types/img.type';
import Svg from './svg';
export default function Img({
  className,
  imageClassName,
  src,
  placeholderProps,
  children,
  aspectRatio = '1/1',
  ...props
}: ImgProps) {
  if (src.endsWith('.svg') && props.inject)
    return (
      <Svg
        src={cleanSrc(src!)}
        aspectRatio={aspectRatio}
        className={className}
        {...props}
      />
    );
  return (
    <div
      style={{ aspectRatio: aspectRatio }}
      className={cn('relative w-full overflow-hidden', className)}
      {...props}
    >
      <Image
        src={cleanSrc(src!)}
        className={cn(
          'object-contain',
          { 'object-cover': aspectRatio },
          imageClassName
        )}
        alt={props.alt || ''}
        fill
        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
        {...placeholderProps}
      />
    </div>
  );
}
