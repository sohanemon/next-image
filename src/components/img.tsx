import Image from 'next/image';
import { ImgProps } from '../types/img.type';
import { cn, cleanSrc } from '@sohanemon/utils';
export default function Img({
  className,
  imageClassName,
  src,
  placeholderProps,
  children,
  aspectRatio = '1/1',
  ...props
}: ImgProps) {
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
