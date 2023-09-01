import { ImgProps } from '../types/img.type';
interface SvgProps extends ImgProps {
}
export default function Svg({ src, aspectRatio, ...props }: SvgProps): import("react/jsx-runtime").JSX.Element;
export {};
