import { jsx as _jsx } from "react/jsx-runtime";
import Image from 'next/image';
import { cn, cleanSrc } from '@sohanemon/utils';
export default function Img({ className, imageClassName, src, placeholderProps, children, aspectRatio = '1/1', ...props }) {
    return (_jsx("div", { style: { aspectRatio: aspectRatio }, className: cn('relative w-full overflow-hidden', className), ...props, children: _jsx(Image, { src: cleanSrc(src), className: cn('object-contain', { 'object-cover': aspectRatio }, imageClassName), alt: props.alt || '', fill: true, sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw', ...placeholderProps }) }));
}
