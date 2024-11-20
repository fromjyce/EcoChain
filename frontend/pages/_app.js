import "../app/globals.css"

export const metadata = {
  title: "EcoChain",
  description: "A smart, AI-driven solution designed  to optimize logistics and waste management for  SMBs, leveraging Amazon's powerful  infrastructure to promote sustainability while  maximizing efficiency.",
};

function MyApp({ Component, pageProps }) {
    return (
        <div className="antialiased">
          <main>
            <Component {...pageProps} />
          </main>
        </div>
      );
}

export default MyApp;