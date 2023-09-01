# @sohanemon/next-image 🌟

Enhance your Next.js image handling with ease using the `@sohanemon/next-image` npm package. This package provides two powerful components, `Placeholder` and `Img`, designed to simplify and optimize image loading and rendering within your Next.js applications. 🚀

## Installation 🛠️

You can install the package using npm:

```bash
npm install @sohanemon/next-image
```

Or with Yarn:

```bash
yarn add @sohanemon/next-image
```

## Components 🖼️

### Placeholder 🌈

The `Img` component from `'@sohanemon/next-image/dist/placeholder'` directory takes care of loading and displaying images with placeholder support. It provides a smooth visual experience by showing a blurred placeholder image while the main image is loading. ⏳

```jsx
import { Img } from '@sohanemon/next-image/dist/placeholder';

<Img src='/path/to/your/image.png' />;
```

Key features:

- Automatic generation of a base64-encoded blurred placeholder image.
- Seamless loading of remote (HTTP) and local images.
- Supports additional props from the `Img` component.

### Img 📷

The `Img` component simplifies the integration of Next.js's `Image` component while allowing for easy customization. 🎨

```jsx
import { Img } from '@sohanemon/next-image';

<Img src='/path/to/your/image.png' />;
```

Key features:

- Intuitive handling of image rendering and aspect ratio.
- Automatic optimization for various screen sizes using the `sizes` attribute.
- Use `src` prop as `'/public/img.png'`, `'/img.png'` or `'https://hello.world/img.png'`
- Customization of `className`, `imageClassName`, `placeholderProps`, and more.

## Usage 🚀

Here's a quick guide on how to utilize the components in your Next.js project:

1. Import the desired component:

```jsx
import Img from '@sohanemon/next-image';
import Placeholder from '@sohanemon/next-image/dist/placeholder';
```

2. Use the components within your JSX:

```jsx
<Placeholder src="/path/to/your/image.png" alt="Description of the image" />

<Img src="/path/to/your/image.png" alt="Description of the image" />
```

## Example 🌟

```jsx
import Img from '@sohanemon/next-image';
import Placeholder from '@sohanemon/next-image/dist/placeholder';

// ...

<Placeholder src="/path/to/your/image.png" alt="Description of the image" />

// ...

<Img src="/path/to/your/image.png" alt="Description of the image" />
```

## Contribution 🤝

Contributions to the `@sohanemon/next-image` package are welcome! If you encounter any issues or have suggestions for improvements, feel free to open an issue or pull request on the [GitHub repository](https://github.com/sohanemon/next-image).

## License 📜

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

---

Elevate your Next.js image handling to the next level with the `@sohanemon/next-image` package. Simplify your code and improve user experience by effortlessly integrating optimized images with placeholders. Happy coding! 🎉
