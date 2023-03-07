import Head from "next/head";
import Link from "next/link";

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
        <h1 className="text-xl text-slate-400 mb-4">Projects</h1>
        <ul className="list-disc">
          <li>
            <Link href="/projects/natural-language-block-explorer">
              Natural Language Block Explorer
            </Link>
          </li>
          <li>
            <Link href="/projects/coinbase-base-logo-css">
              Coinbase Base Logo in CSS
            </Link>
          </li>
        </ul>
      </main>
    </>
  );
}
