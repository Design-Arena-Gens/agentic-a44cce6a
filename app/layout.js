export const metadata = {
  title: "Gumroad Ideas Generator",
  description: "Generate and validate digital product ideas for Gumroad",
  metadataBase: new URL("https://agentic-a44cce6a.vercel.app"),
  openGraph: {
    title: "Gumroad Ideas Generator",
    description: "Generate and validate digital product ideas for Gumroad",
    url: "https://agentic-a44cce6a.vercel.app",
    siteName: "Gumroad Ideas Generator",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Gumroad Ideas Generator",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="container">
          <header className="header">
            <h1>Gumroad Digital Product Ideas</h1>
            <p className="subtitle">Generate ideas, price them, and ship with confidence.</p>
          </header>
          <main>{children}</main>
          <footer className="footer">
            <span>
              Built for creators. Not affiliated with Gumroad.
            </span>
          </footer>
        </div>
      </body>
    </html>
  );
}
