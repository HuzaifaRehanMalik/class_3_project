import Navebar from "./components/Navebar";
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
