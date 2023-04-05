import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { motion, useAnimation, Variants } from "framer-motion";

/*

- start in middle, small radius
- move on a rounded path to the destination
- stagger increase in radius to reveal photo

*/

export default function Foo() {
  const [width, setWidth] = useState<number | null>(null);
  const [height, setHeight] = useState<number | null>(null);
  const radius = 1;

  useEffect(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);

    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    });
  }, []);

  console.log("width", width);
  console.log("height", height);

  return (
    <>
      <Head>
        <title>imti / foo</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link rel="icon" href="/photo.jpeg" />
      </Head>
      <main className="h-screen bg-black">
        {width !== null && height !== null ? (
          <>
            <div
              className="w-full h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
              style={{
                clipPath: "url(#clip)",
              }}
            />
            <svg width="100%" height="100%">
              <defs>
                <clipPath id="clip">
                  {new Array(50).fill(1).map((_, index) => {
                    return (
                      <motion.circle
                        key={index}
                        style={
                          {
                            // offsetPath: `M2,2 Q200,2 200,200`,
                            // offsetPath: "M2,2 Q239,2 239,239",
                          }
                        }
                        initial={{
                          // offsetDistance: "0%",
                          cx: (index % 10) * 20,
                          cy: (index % 10) * 20,
                          r: 10,
                        }}
                        animate={
                          {
                            // offsetDistance: "100%",
                            // cx: [null, width * Math.random()],
                            // cy: [null, height * Math.random()],
                            // r: [radius, radius * 10, radius * 100],
                          }
                        }
                        transition={{
                          ease: "easeInOut",
                          duration: 1.5,
                          delayChildren: 0.8,
                          delay: index * 0.1,
                          // times: [null, 100, 200],
                          // repeat: Infinity,
                          // repeatType: "reverse",
                          // delay: 2,
                        }}
                      />
                    );
                  })}
                </clipPath>
              </defs>
            </svg>
          </>
        ) : null}
      </main>
    </>
  );
}
