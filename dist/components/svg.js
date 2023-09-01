'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { ReactSVG } from 'react-svg';
export default function Svg({ src, aspectRatio, ...props }) {
    return (
    // @ts-ignore
    _jsx(ReactSVG, { src: src, style: { aspectRatio: aspectRatio || '1/1' }, ...props }));
}
