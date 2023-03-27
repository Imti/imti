import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function GlowingAnimation() {
  return (
    <>
      <Head>
        <title>imti / glowing animation</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link rel="icon" href="/photo.jpeg" />
      </Head>
      <main className="p-6 md:p-1 md:pt-12 bg-black h-screen overflow-hidden">
        <Link
          href="/"
          className="fixed top-0 left-0 w-full bg-teal-900 text-white text-center z-50 text-sm py-1 hover:underline"
        >
          who built this?
        </Link>
        <div className="relative h-full flex items-center justify-center flex-col md:flex-row">
          <GlowingImage
            src="/google-logo.png"
            blurAmount={10}
            size={100}
            className="mb-8 md:mr-8 w-[100px] h-[100px]"
          />
          <div className="relative w-[80px] h-[80px] rounded-full mb-8 md:mr-8">
            <div
              className="absolute w-[80px] h-[80px] rounded-full bg-gradient-to-r from-purple-900 via-purple-500 to-purple-200"
              style={{ rotate: "30deg" }}
            />
            <motion.div
              className="absolute w-[80px] h-[80px] rounded-full bg-gradient-to-r from-purple-900 via-purple-500 to-purple-200"
              animate={{ scale: 1.3, opacity: 1 }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 2,
                ease: "easeInOut",
              }}
              style={{
                filter: "blur(20px)",
                rotate: "30deg",
                scale: 1.1,
                opacity: 0.8,
              }}
            />
          </div>
          <div className="relative w-[80px] h-[80px] rounded-full mb-8 md:mr-8">
            <div
              className="absolute w-[80px] h-[80px] rounded-full"
              style={{
                rotate: "-90deg",
                backgroundImage: `conic-gradient(from 90.001deg at 50% 50%, #eee 0deg, #000 0deg, rgba(255, 255, 255, 1) 360deg)`,
              }}
            />
            <motion.div
              className="absolute w-[80px] h-[80px] rounded-full"
              animate={{ scale: 1.3, opacity: 1 }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 2,
                ease: "easeInOut",
              }}
              style={{
                filter: "blur(40px)",
                rotate: "-90deg",
                scale: 1.1,
                opacity: 0.8,
                backgroundImage: `conic-gradient(from 90.001deg at 50% 50%, #eee 0deg, #000 0deg, rgba(255, 255, 255, 1) 360deg)`,
              }}
            />
          </div>
          <div className="relative w-[80px] h-[80px] rounded-full mb-8 md:mr-8">
            <div className="absolute w-[80px] h-[80px] rounded-full border-2 border-[#3cf] bg-transparent opacity-60" />
            <motion.div
              className="absolute w-[90px] h-[90px] rounded-full border-4 border-[#3cf] bg-transparent"
              animate={{ scale: 1.3, opacity: 1 }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 2,
                ease: "easeInOut",
              }}
              style={{
                filter: "blur(8px)",
                scale: 1.1,
                opacity: 0.5,
                translateX: -5,
                translateY: -5,
              }}
            />
          </div>
          <GlowingImage
            src="/pocket-logo.png"
            blurAmount={40}
            size={80}
            className="mb-8 md:mr-8"
          />
        </div>
      </main>
    </>
  );
}

function GlowingImage({
  src = "",
  blurAmount = 40,
  size = 100,
  className = "",
}) {
  return (
    <>
      <div
        className={`relative w-[${size}px] h-[${size}px] min-w-[${size}px] ${className}`}
      >
        <Image
          className="absolute"
          width={size}
          height={size}
          src={src}
          alt="logo"
        />
        <motion.img
          className="absolute"
          animate={{ scale: 1.3, opacity: 1 }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 2,
            ease: "easeInOut",
          }}
          style={{
            filter: `blur(${blurAmount}px)`,
            scale: 1.1,
            opacity: 0.8,
          }}
          width={size}
          height={size}
          src={src}
          alt="logo blurred"
        />
      </div>
    </>
  );
}
