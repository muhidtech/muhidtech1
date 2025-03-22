This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Installation

1. Clone this repository to your local machine.

2. Install the required dependencies:

```bash
npm install
```

3. Install Tailwind CSS v4 and its dependencies:

```bash
npm install -D tailwindcss @tailwindcss/postcss postcss
```

## Tailwind CSS v4 Configuration

This project uses Tailwind CSS v4, which has significantly simplified the configuration process:

1. The project includes a `postcss.config.mjs` file with the following configuration:

```javascript
/** @type {import('postcss').Config} */
export default {
  plugins: {
    '@tailwindcss/postcss': {},
  },
}
```

2. The global CSS file includes the Tailwind CSS directives:

```css
@import 'tailwindcss';
```

### Important Notes:

- **Tailwind CSS v4 integrates Lightning CSS directly**, which handles vendor prefixing automatically.
- **Autoprefixer is no longer required or recommended** with Tailwind CSS v4.
- If you're migrating from Tailwind CSS v3, make sure to remove autoprefixer from your dependencies and configuration files (package.json and postcss.config.mjs).
- Any build errors related to autoprefixer can be resolved by removing it from your project.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Using Tailwind CSS

You can use Tailwind CSS utility classes directly in your components:

```jsx
export default function Home() {
  return <h1 className="text-3xl font-bold underline">Hello, Next.js!</h1>
}
```

### Key Features of Tailwind CSS v4

- **Zero configuration required by default**
- **Simplified installation process**
- **CSS-first configuration**
- **Automatic content detection**
- **Built-in import support**
- **Integrated vendor prefixing via Lightning CSS** (replaces the need for autoprefixer)

If you need to customize Tailwind beyond the defaults, you can use the `@theme` directive in your CSS file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
