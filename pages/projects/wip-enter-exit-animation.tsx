import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, useAnimation, Variants } from "framer-motion";

/*

numCircles

radius of 10
spacing between each circle is 10

o - o - o - o
|   |   |   |
o - o - o - o


numCirclesPerRow = width / (radius * 2 + spacing / 2)
numCirclesPerColumn = height / (radius * 2 + spacing / 2)
*/

function* getRandomColor() {
  var letters = "0123456789ABCDEF";
  while (true) {
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    yield color;
  }
}

const randomColorGenerator = getRandomColor();

export default function Foo() {
  const [hoverCoords, setHoverCoords] = useState<(number | null)[]>([
    null,
    null,
  ]);
  const [numCirclesPerRow, setNumCirclesPerRow] = useState<number>(0);
  const [numCirclesPerCol, setNumCirclesPerCol] = useState<number>(0);
  const spacing = 0;
  const size = 50;

  const calculateNumCirclesPerRow = (
    width: number,
    size: number,
    spacing: number
  ) => Math.floor(width / (size + spacing / 2) - spacing / 2);
  const calculateNumCirclesPerCol = (
    height: number,
    size: number,
    spacing: number
  ) => Math.floor(height / (size + spacing / 2) - spacing / 2);

  useEffect(() => {
    setNumCirclesPerRow(
      calculateNumCirclesPerRow(window.innerWidth, size, spacing)
    );
    setNumCirclesPerCol(
      calculateNumCirclesPerCol(window.innerHeight, size, spacing)
    );

    window.addEventListener("resize", () => {
      setNumCirclesPerRow(
        calculateNumCirclesPerRow(window.innerWidth, size, spacing)
      );
      setNumCirclesPerCol(
        calculateNumCirclesPerCol(window.innerHeight, size, spacing)
      );
    });
  }, []);

  const isHover = (r: number, c: number) =>
    r === hoverCoords[0] && c === hoverCoords[1];

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
        <div className="flex items-center justify-center relative">
          {new Array(numCirclesPerRow).fill(null).map((_, rowIndex) => {
            const nothingHovered =
              hoverCoords[0] === null && hoverCoords[1] === null;
            return (
              <>
                {new Array(numCirclesPerCol).fill(null).map((_, colIndex) => {
                  const isHovered = isHover(rowIndex, colIndex);
                  return (
                    <motion.span
                      onHoverStart={() => setHoverCoords([rowIndex, colIndex])}
                      key={`${rowIndex},${colIndex}`}
                      style={{
                        width: size,
                        height: size,
                        top: colIndex * size,
                        left: rowIndex * size,
                        backgroundColor: "#3cf",
                        // border: "1px solid white",
                        zIndex: isHovered ? 1 : 0,
                        scale: isHovered ? 2 : 1,
                        opacity: nothingHovered ? 1 : isHovered ? 1 : 0.2,
                        transition: "all 0.2s ease-in-out",
                      }}
                      className="absolute cursor-pointer rounded-full"
                    />
                  );
                })}
              </>
            );
          })}
        </div>
      </main>
    </>
  );
}
