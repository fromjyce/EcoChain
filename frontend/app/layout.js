import "./globals.css";
import {Poppins, Urbanist, Kumbh_Sans, Kanit} from "next/font/google";

const poppins_init = Poppins({
  subsets: ['latin'],
  weight: ['100','200','300','400','500','600','700','800','900'],
  variable: '--font-poppins',
});

const urbanist_init = Urbanist({
  subsets: ['latin'],
  weight: ['100','200','300','400','500','600','700','800','900'],
  variable: '--font-urbanist',
});

const kumbh_sans_init = Kumbh_Sans({
  subsets: ['latin'],
  weight: ['100','200','300','400','500','600','700','800','900'],
  variable: '--font-kumbh_sans',
});

const kanit_init = Kanit({
  subsets: ['latin'],
  weight: ['100','200','300','400','500','600','700','800','900'],
  variable: '--font-kanit',
});

export const metadata = {
  title: "EcoChain",
  description: "Empowering SMBs with sustainable logistics solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${urbanist_init.variable} ${kumbh_sans_init.variable} ${poppins_init.variable} ${kanit_init.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
