import "./globals.css";
import Cursor from "../Components/Cursor";

export const metadata = {
  title: "Videocc",
  description: "Brand & Web studio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo_new.png" type="image/png" />
      </head>
      <body className={`overflow-x-hidden antialiased`}>
        <Cursor />
        {children}
      </body>
    </html>
  );
}
