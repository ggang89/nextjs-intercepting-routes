import Link from "next/link";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <nav>
          <Link href="/" className="p-4">Home</Link>
          <Link href="/about" className="p-4">About</Link>
          <Link href="/board" className="p-4">Board</Link>
          <Link href="/login" className="p-4">Login</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
