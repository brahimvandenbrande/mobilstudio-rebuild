import './public.css'

export default function PublicLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/djp0ftq.css" />
      </head>
      <body>
        <div className="public-layout">
          <header>
            <h1>My Website</h1>
          </header>
          <main>{children}</main>
          <footer>
            <p> 2024 My Website</p>
          </footer>
        </div>
      </body>
    </html>
  );
}