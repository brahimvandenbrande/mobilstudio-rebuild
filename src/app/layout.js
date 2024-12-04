import './globals.css'

export const metadata = {
  title: 'My Website',
  description: 'My Website Description',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href={`https://use.typekit.net/${process.env.NEXT_PUBLIC_ADOBE_FONTS_KIT_ID}.css`} />
      </head>
      <body>{children}</body>
    </html>
  );
}