import localFont from "next/font/local";
import "./globals.css";


//neko


/* const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
}); */
const hw  = localFont({
  src: "./fonts/hw.woff2",
  variable: "--font-hw",
  weight: "100 900",
});
const hwbold  = localFont({
  src: "./fonts/hwbold.woff2",
  variable: "--font-hwbold",
  weight: "100 900",
});
const chopin  = localFont({
  src: "./fonts/ChopinScript.woff2",
  variable: "--font-chopin",
  weight: "100 900",
});
const brs  = localFont({
  src: "./fonts/BinggraeSamanco.woff2",
  variable: "--font-brs",
  weight: "100 900",
});

const london  = localFont({
  src: "./fonts/OldLondon.woff2",
  variable: "--font-brs",
  weight: "100 900",
});



export const metadata = {
  title: "The Eternal Ballroom",
  description: "caretaker's Portfolio",
}; 

export default function RootLayout({ children }) {
  return (
    <html lang="en"> 
      <body>  {/* className={`${geistSans.variable} ${geistMono.variable}`} */}
        {children}


        <link rel="stylesheet" href="https://use.typekit.net/mws5fgn.css"></link>
      </body>
    </html>
  );
}


