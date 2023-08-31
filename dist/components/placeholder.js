import { jsx as _jsx } from "react/jsx-runtime";
import { readFile } from 'fs/promises';
import { getPlaiceholder } from 'plaiceholder';
import Img from './img';
export default async function Placeholder({ src, ...props }) {
    let buffer;
    if (src.startsWith('http')) {
        const res = await fetch(src);
        buffer = await res.arrayBuffer();
    }
    else {
        buffer = await readFile('.' + src);
    }
    const { base64 } = await getPlaiceholder(Buffer.from(buffer));
    return (_jsx(Img, { src: src, placeholderProps: { placeholder: 'blur', blurDataURL: base64 }, ...props }));
}
