import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";

const COLORS = [
  "#0052FF",
  "#DC28A8",
  "rgba(153, 128, 255, 1)",
  "rgba(255, 0, 31, 1)",
  "rgba(255, 229, 0, 1)",
  "rgba(254, 116, 1, 1)",
  "rgba(40, 220, 134, 1)",
];

export default function CoinbaseBaseLogoCSS() {
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (colorIndex === COLORS.length - 1) {
        setColorIndex(0);
      } else {
        setColorIndex(colorIndex + 1);
      }
    }, 2500);
    return () => clearInterval(interval);
  }, [colorIndex]);

  return (
    <>
      <Head>
        <title>imti / coinbase base logo in css</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link rel="icon" href="/photo.jpeg" />
      </Head>
      <main className="relative h-screen">
        <Link
          href="/"
          className="fixed top-0 left-0 w-full bg-black text-white text-center z-50 text-sm py-1 hover:underline"
        >
          who built this?
        </Link>
        {COLORS.map((c, i) => (
          <div
            key={c}
            className="absolute w-full h-full transition-opacity duration-500"
            style={{
              opacity: colorIndex === i ? 100 : 0,
              transform: "matrix(-1, 0, 0, 1, 0, 0)",
              backgroundImage: `conic-gradient(from 90.001deg at 20% 50%, #0052FF 0deg, ${c} 178.12deg, rgba(255, 255, 255, 0) 360deg)`,
            }}
          ></div>
        ))}
        <div
          className="relative w-full h-full -z-10"
          style={{
            transform: "matrix(-1, 0, 0, 1, 0, 0)",
            backgroundImage: `conic-gradient(from 90.001deg at 20% 50%, rgba(0, 82, 255, 1) 0deg, ${COLORS[0]} 0deg, rgba(255, 255, 255, 1) 360deg)`,
          }}
        ></div>
        {COLORS.map((c, i) => (
          <span
            key={c}
            className="absolute transition-opacity duration-500 top-1/2 -translate-y-[72px] sm:-translate-y-[144px] left-[14px] sm:left-[30px] text-[48px] sm:text-[96px] text-[transparent] bg-clip-text pointer-events-none"
            style={{
              opacity: colorIndex === i ? 100 : 0,
              backgroundImage: `linear-gradient(to right, ${c}, rgb(0, 82, 255))`,
            }}
          >
            BASED
          </span>
        ))}
        <span className="absolute top-1/2 left-[14px] sm:left-[30px] text-[48px] sm:text-[96px] text-[transparent] bg-clip-text bg-gradient-to-b from-blue-600 via-white to-white z-50 pointer-events-none">
          STYLING
        </span>
      </main>
    </>
  );
}
