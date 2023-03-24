import {
  useRef,
  useLayoutEffect,
  useEffect,
  MutableRefObject,
  RefObject,
} from "react";
import Head from "next/head";
import Link from "next/link";
import { motion, useAnimation, Variants } from "framer-motion";

export default function GridAnimation() {
  return (
    <>
      <Head>
        <title>imti / grid animation</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link rel="icon" href="/photo.jpeg" />
      </Head>
      <main className="p-6 md:p-1 md:pt-12 bg-black h-screen overflow-hidden">
        <Link
          href="/"
          className="fixed top-0 left-0 bg-transparent w-full text-white text-center z-50 text-sm py-1 hover:underline"
        >
          who built this?
        </Link>
        <div className="max-w-[1440px] mx-auto">
          <Grid />
        </div>
      </main>
    </>
  );
}

function Grid({ delayPerPixel = 0.0008, numItems = 434 }) {
  const originOffset = useRef({ top: 0, left: 0 });
  const controls = useAnimation();

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  return (
    // We set variants to be an object to force variant propagation - this is a bug
    // with variants and useAnimation()
    // https://github.com/framer/motion/issues/191
    <motion.div initial="hidden" animate={controls} variants={{}}>
      {Array.from({ length: numItems }).map((_, i) => (
        <GridItem
          key={i}
          i={i}
          originIndex={232} /* something in the middle */
          delayPerPixel={delayPerPixel}
          originOffset={originOffset}
        />
      ))}
    </motion.div>
  );
}

function GridItem({
  delayPerPixel,
  i,
  originIndex,
  originOffset,
}: {
  delayPerPixel: number;
  i: number;
  originIndex: number;
  originOffset: MutableRefObject<{ top: number; left: number }>;
}) {
  const delayRef = useRef(0);
  const offset = useRef({ top: 0, left: 0 });
  const ref: RefObject<HTMLDivElement> = useRef(null);

  // The measurement for all elements happens in the layoutEffect cycle
  // This ensures that when we calculate distance in the effect cycle
  // all elements have already been measured
  useLayoutEffect(() => {
    const element = ref.current;
    if (element) {
      offset.current = {
        top: (element as HTMLElement).offsetTop,
        left: (element as HTMLElement).offsetLeft,
      };

      if (i === originIndex) {
        originOffset.current = offset.current;
      }
    }
  }, [delayPerPixel, i, originIndex, originOffset]);

  useEffect(() => {
    const dx = Math.abs(offset.current.left - originOffset.current.left);
    const dy = Math.abs(offset.current.top - originOffset.current.top);
    const d = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
    delayRef.current = d * delayPerPixel;
  }, [delayPerPixel, originOffset, originIndex]);

  return (
    <motion.div
      className="h-[30px] w-[30px] m-2 inline-block rounded-md border-8"
      ref={ref}
      variants={itemVariants as Variants}
      custom={delayRef}
    />
  );
}

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

const itemVariants = {
  hidden: () => ({
    opacity: 0,
    scale: 0,
  }),
  visible: (delayRef: { current: { top: number; left: number } }) => ({
    opacity: 1,
    scale: 1,
    backgroundColor: randomColorGenerator.next().value,
    borderColor: randomColorGenerator.next().value,
    transition: {
      delay: delayRef.current as { top: number; left: number },
      type: "spring",
      stiffness: 50,
      damping: 5,
      restDelta: 0.1,
      repeat: Infinity,
    },
  }),
};
