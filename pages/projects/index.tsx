import Head from "next/head";
import Link from "next/link";
import Header from "@/components/header";

export default function Projects() {
  return (
    <>
      <Head>
        <title>imti / projects</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link rel="icon" href="/photo.jpeg" />
      </Head>
      <main className="p-6 max-w-3xl mx-auto">
        <Header />
        <div className="bg-white rounded-lg p-6">
          <h1 className="text-xl text-slate-400 mb-4">⚒ Projects</h1>
          <ul className="list-disc ml-4">
            <li>
              <Link
                href="/projects/natural-language-block-explorer"
                className="hover:underline"
              >
                Natural Language Block Explorer
              </Link>
            </li>
            <li>
              <Link
                href="/projects/coinbase-base-logo-css"
                className="hover:underline"
              >
                Coinbase Base Logo in CSS
              </Link>
            </li>
            <li>
              <Link href="/projects/eli5" className="hover:underline">
                Simplify text powered by ChatGPT
              </Link>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
}
