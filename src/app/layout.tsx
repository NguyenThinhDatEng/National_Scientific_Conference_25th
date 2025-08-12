import React from 'react';
import '../styles/globals.css'; // Import global styles

const Layout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <header>
          <h1 className="text-2xl font-bold">My Next.js App</h1>
        </header>
        <main>{children}</main>
        <footer className="mt-4">
          <p className="text-center">© {new Date().getFullYear()} My Next.js App</p>
        </footer>
      </body>
    </html>
  );
};

export default Layout;