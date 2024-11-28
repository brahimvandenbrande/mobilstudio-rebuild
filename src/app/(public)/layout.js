// app/(public)/layout.js
export default function PublicLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <h1>My Website</h1>
        </header>
        <main>{children}</main>
        <footer>
          <p> 2024 My Website</p>
        </footer>
      </body>
    </html>
  );
}