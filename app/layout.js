import "./globals.css";

export const metadata = {
  title: "Videocc",
  description: "Brand & Web studio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`overflow-x-hidden antialiased`}>{children}</body>
    </html>
  );
}
