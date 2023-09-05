import { jsx as _jsx } from "react/jsx-runtime";
import { cleanSrc, cn } from '@sohanemon/utils';
import Image from 'next/image';
import Svg from './svg';
export default function Img({ className, imageClassName, src, width, placeholderProps, children, aspectRatio = '1/1', ...props }) {
    if (src.endsWith('.svg') && props.inject)
        return (_jsx(Svg, { src: cleanSrc(src), aspectRatio: aspectRatio, className: className, ...props }));
    return (_jsx("div", { style: { aspectRatio: width ? undefined : aspectRatio }, className: cn('relative w-full overflow-hidden', className), ...props, children: _jsx(Image, { src: cleanSrc(src), className: cn('object-contain', { 'object-cover': aspectRatio }, imageClassName), alt: props.alt || '', fill: !width, width: width || undefined, height: width || undefined, sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw', ...placeholderProps }) }));
}
