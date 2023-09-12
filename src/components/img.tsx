import { cleanSrc, cn } from '@sohanemon/utils';
import Image from 'next/image';
import { Fragment } from 'react';
import { ImgProps } from '../types/img.type';
import Svg from './svg';
export default function Img({
  className,
  imageClassName,
  src,
  width,
  height,
  placeholderProps,
  inject,
  wrapper = 'div',
  children,
  aspectRatio = '1/1',
  ...props
}: ImgProps) {
  if (src.endsWith('.svg') && inject)
    return (
      <Svg
        src={cleanSrc(src!)}
        aspectRatio={aspectRatio}
        className={className}
        {...props}
      />
    );
  const Wrapper = !!width ? Fragment : wrapper;
  const wrapperProps = !!width
    ? undefined
    : {
        style: { aspectRatio },
        className: cn('relative w-full overflow-hidden', className),
        ...props,
      };
  return (
    <Wrapper {...wrapperProps}>
      <Image
        src={cleanSrc(src!)}
        className={cn(
          'object-contain',
          { 'object-cover': aspectRatio },
          !!width ? className : imageClassName
        )}
        alt={props.alt || 'Picture Element'}
        fill={!width}
        width={width || undefined}
        height={height || width || undefined}
        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
        {...placeholderProps}
      />
    </Wrapper>
  );
}
