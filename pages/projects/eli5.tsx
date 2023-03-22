import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

enum Operation {
  plus = "+",
  minus = "-",
}

// from simple to complex
const texts = [
  "Cross-chain technology allows different blockchain networks to communicate with each other: It is a way to connect different blockchain networks, so they can transfer data and value between each other.",
  "Cross-chain technology is like a bridge between different blockchain networks: Just like a bridge connects two separate pieces of land, cross chain technology connects different blockchain networks, enabling them to share information and assets.",
  "Cross-chain technology is a way to facilitate interoperability between different blockchain networks: Interoperability means the ability of different systems to work together seamlessly. Cross chain technology enables blockchain networks to interact with each other, making it easier for users to transfer data and assets between different networks.",
  "Cross-chain technology uses smart contracts to enable communication between different blockchain networks: Smart contracts are self-executing programs that automatically perform actions based on pre-defined rules. Cross chain technology uses smart contracts to enable communication between different blockchain networks, making it possible to transfer assets and data securely.",
  "Cross-chain technology uses complex cryptographic algorithms to ensure secure communication between different blockchain networks: Cross chain technology relies on advanced cryptographic algorithms to enable secure communication and transfer of assets between different blockchain networks. These algorithms ensure that data and assets are transferred securely and without the risk of fraud or theft.",
];

export default function Foo() {
  const [complexity, setComplexity] = useState(4); // start with most complex

  const handleClick = (operation: Operation) => () => {
    switch (operation) {
      case Operation.plus:
        setComplexity(Math.min(complexity + 1, 4));
        return;
      case Operation.minus:
        setComplexity(Math.max(complexity - 1, 0));
        return;
      default:
        return;
    }
  };

  return (
    <>
      <Head>
        <title>imti / simplify text</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link rel="icon" href="/photo.jpeg" />
      </Head>
      <main className="h-screen bg-black">
        <Link
          href="/"
          className="fixed top-0 left-0 w-full bg-yellow-300 font-semibold text-slate-800 text-center z-50 text-sm py-1 hover:underline"
        >
          who built this?
        </Link>
        <div className="max-w-xl mx-auto font-mono pt-12 text-slate-300">
          <div className="text-2xl p-4">What is cross-chain technology?</div>
          <div className="relative border-1 p-4 rounded-lg group">
            {texts[complexity]}
          </div>
        </div>
        <div className="absolute bottom-2.5 left-0 right-0 px-4 py-2 transition-transform ease-in-out">
          <div className="flex items-center justify-evenly rounded-xl bg-black shadow-lg text-sm text-slate-300 max-w-lg mx-auto border-slate-800 border-2 shadow-slate-800">
            <button
              disabled={complexity === 0}
              className="font-semibold text-lg p-2 w-1/3 disabled:opacity-20"
              onClick={handleClick(Operation.minus)}
            >
              -
            </button>
            <span className="font-semibold">simplicity</span>
            <button
              disabled={complexity === 4}
              className="font-semibold text-lg p-2 w-1/3 disabled:opacity-20"
              onClick={handleClick(Operation.plus)}
            >
              +
            </button>
          </div>
          <div className="mt-4 text-center text-xs text-slate-300 font-thin">
            Powered by ChatGPT
          </div>
        </div>
      </main>
    </>
  );
}
