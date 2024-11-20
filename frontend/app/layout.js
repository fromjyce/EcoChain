import "./globals.css";

export const metadata = {
  title: "EcoChain",
  description: "A smart, AI-driven solution designed  to optimize logistics and waste management for  SMBs, leveraging Amazon's powerful  infrastructure to promote sustainability while  maximizing efficiency.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="antialiased"
      >
        {children}
      </body>
    </html>
  );
}
