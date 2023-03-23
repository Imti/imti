import Head from "next/head";
import Link from "next/link";
import Header from "@/components/header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Imti Majeed</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/photo.jpeg" />
      </Head>
      <main className="p-6 max-w-3xl mx-auto">
        <Header />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg p-6 md:col-start-1 md:col-span-2">
            <p className="text-xl  text-slate-400">✨ Something New</p>
            <p className="mt-2">
              Open to opportunities and collaborations, book a time to chat on{" "}
              <a
                className="underline"
                href="https://calendly.com/imti/30min"
                target="_blank"
              >
                my calendar
              </a>
            </p>
          </div>
          <div className="bg-white rounded-lg p-6">
            <p className="text-xl text-slate-400">🌉 Nomad</p>
            <p className="mt-2">
              I was a founding engineer at Nomad, a cross-chain messaging
              protocol, that bridged close to $1B in less than a year.
            </p>
          </div>
          <div className="bg-white rounded-lg p-6">
            <p className="text-xl text-slate-400">📈 Scope</p>
            <p className="mt-2">
              I was head of engineering at Scope, an expert marketplace, where I
              hired and managed a remote engineering team.
            </p>
          </div>
          <div className="bg-white rounded-lg p-6">
            <p className="text-xl text-slate-400">🧑‍💻 Experience</p>
            <p className="mt-2">
              I have 8+ years of full stack engineering at startups of all
              sizes. Crypto pilled in 2020 and haven{"'"}t looked back since.
            </p>
          </div>
          <Link
            href="/projects"
            className="bg-white rounded-lg p-6 cursor-pointer group"
          >
            <p className="text-xl text-slate-400">⚒ Projects</p>
            <p className="mt-2">
              I{"'"}m always building. Anything from small experimental demos to
              more complex projects used in production.
            </p>
          </Link>
        </div>
      </main>
    </>
  );
}
