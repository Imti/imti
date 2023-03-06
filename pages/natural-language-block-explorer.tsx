import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { MentionsInput, Mention } from "react-mentions";
import { FaArrowAltCircleRight } from "react-icons/fa";

const destinations = [{ id: 1, display: "Tornado Cash" }];

const mentionStyle = {
  textDecoration: "underline rgb(16 185 129)",
  textDecorationStyle: "wavy",
  textUnderlineOffset: 1,
  textDecorationThickness: 1,
};

const style = {
  control: {
    fontFamily: "monospace",
    fontSize: 16,
    fontWeight: "normal",
    paddingLeft: 10,
  },

  input: {
    borderRadius: "9999px",
    padding: 9,
    paddingLeft: 20,
    paddingRight: 40,
  },

  highlighter: {
    padding: 9,
    border: "2px inset transparent",
  },

  suggestions: {
    list: {
      border: "1px solid rgba(0,0,0,0.1)",
      fontSize: 14,
      overflow: "hidden",
    },
    item: {
      padding: "5px 15px",
      "&focused": {
        backgroundColor: "#eee",
      },
    },
  },
};

function randomString() {
  return (Math.random() + 1).toString(36).substring(7);
}

// NOTE: There's currently a weird behavior with textarea cursor position
// that I've noticed in both react-mention and draft.js in react v18.
// PR to fix is up on react-mention already:
// https://github.com/signavio/react-mentions/pull/659

export default function Projects() {
  const [input, setInput] = useState("");
  const [data, setData] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: any) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("query", input);
    setLoading(true);

    setTimeout(() => {
      setData(true);
      setLoading(false);
    }, 750);
  };

  return (
    <>
      <Head>
        <title>imti / natural language block explorer</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link rel="icon" href="/photo.jpeg" />
      </Head>
      <main className="p-6 font-mono">
        <Link
          href="/"
          className="fixed top-0 left-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-full text-white text-center z-50 text-sm py-1 hover:underline"
        >
          who built this?
        </Link>
        <div className="pt-4">
          <form onSubmit={handleSubmit} className="relative max-w-2xl mx-auto ">
            <MentionsInput
              autoFocus
              value={input}
              onChange={handleChange}
              style={style}
              singleLine
              placeholder="How much money was sent to Tornado Cash in the last hour?"
            >
              <Mention
                style={mentionStyle}
                trigger="@"
                data={destinations}
                appendSpaceOnAdd
              />
            </MentionsInput>
            <button
              className=" py-1 text-white float-left absolute top-0 right-0 m-0.5 mr-2 mt-1 bg-white rounded-full"
              type="submit"
            >
              <FaArrowAltCircleRight
                className="text-emerald-500"
                size={30}
                opacity={loading ? 0.25 : 1}
              />
            </button>
          </form>
        </div>
        {data ? (
          <div className="max-w-2xl mx-auto">
            <div className="text-xl md:text-2xl text-center text-slate-400 my-6 mx-auto">
              A total of 1324{" "}
              <span className="cursor-pointer underline hover:text-emerald-500 decoration-wavy hover:decoration-wavy decoration-emerald-500 decoration-2 underline-offset-2">
                ETH
              </span>{" "}
              was sent to{" "}
              <span className="cursor-pointer underline hover:text-emerald-500 decoration-wavy hover:decoration-wavy decoration-emerald-500 decoration-2 underline-offset-2">
                Tornado Cash
              </span>{" "}
              by{" "}
              <span className="cursor-pointer underline hover:text-emerald-500 decoration-wavy hover:decoration-wavy decoration-emerald-500 decoration-2 underline-offset-2">
                84 addresses
              </span>{" "}
              in the last hour.
            </div>
            <div className="text-md md:text-lg text-slate-400 text-center mb-4">
              Here are the 10 most recent transactions:
            </div>
            <table className="table-auto border-collapse text-sm max-w mx-auto">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-4">Txn Hash</th>
                  <th className="p-4">Value</th>
                  <th className="hidden sm:table-cell p-4">From</th>
                  <th className="hidden md:table-cell p-4">Age</th>
                </tr>
              </thead>
              <tbody className="text-center">
                {Array.from(Array(10).keys()).map((_, i) => {
                  const txHash = `0x${randomString()}...${randomString()}`;
                  const fromAddr = `0x${randomString()}...${randomString()}`;
                  return (
                    <tr key={i} className="hover:bg-slate-200 cursor-pointer">
                      <td className="text-left p-4">{txHash}</td>
                      <td className="p-4">
                        {(Math.random() * 10).toFixed(2)} ETH
                      </td>
                      <td className="hidden sm:table-cell p-4">{fromAddr}</td>
                      <td className="hidden md:table-cell p-4">
                        {Math.ceil(Math.random() * 10)} min ago
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-lg text-center mt-4 text-slate-400">
            What would a natural language block explorer look like?
          </div>
        )}
      </main>
    </>
  );
}
