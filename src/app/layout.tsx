import "./globals.css";
import Navebar from "./components/Navbar";
import Footer from "./components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navebar/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
