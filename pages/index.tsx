import Head from "next/head";
import Image from "next/image";
import { FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <Head>
        <title>Imti Majeed</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="m-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-center">
            <Image
              className="rounded-full mr-3"
              src="/photo.jpeg"
              alt="photo of Imti"
              width={48}
              height={48}
            />
            <span className="text-xl font-semibold text-slate-700">
              Imti Majeed
            </span>
          </div>
          <div className="flex">
            <a href="https://twitter.com/imtimaj" target="_blank">
              <FaTwitter
                className="text-[#1DA1F2] hover:scale-125 transition-transform mr-2"
                size={20}
              />
            </a>
            <a href="https://twitter.com/imtimaj" target="_blank">
              <FaLinkedin
                className="text-[#0072b1] hover:scale-125 transition-transform"
                size={20}
              />
            </a>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
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
              hired and managed the remote engineering team.
            </p>
          </div>
          <div className="bg-white rounded-lg p-6">
            <p className="text-xl text-slate-400">🧑‍💻 Experience</p>
            <p className="mt-2">
              I have 8+ years of full stack engineering at startups of all
              sizes. Crypto pilled in 2020 and haven{"'"}t looked back since.
            </p>
          </div>
          <div className="bg-white rounded-lg p-6">
            <p className="text-xl text-slate-400">📑 Articles</p>
            <p className="mt-2">Coming soon</p>
          </div>
        </div>
      </main>
    </>
  );
}
