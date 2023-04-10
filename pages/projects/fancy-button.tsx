import {
  Suspense,
  useState,
  useLayoutEffect,
  useRef,
  MouseEvent,
  Ref,
} from "react";
import Head from "next/head";
import Link from "next/link";
import {
  motion,
  MotionValue,
  useMotionValue,
  useSpring,
  useTransform,
  MotionConfig,
  SpringOptions,
} from "framer-motion";
import { motion as motion3D } from "framer-motion-3d";
import { Canvas, useThree, PerspectiveCameraProps } from "@react-three/fiber";
import useMeasure from "react-use-measure";
import Astronaut from "@/components/astronaut";
import Satellite from "@/components/satellite";
import Asteroids2 from "@/components/asteroids";
import Neptune from "@/components/neptune";
import Saturn from "@/components/saturn";
import { MeshTransmissionMaterial } from "@react-three/drei";

function useSmoothTransform(
  value: MotionValue,
  springOptions: SpringOptions,
  transformer: (n: number) => number
) {
  return useSpring(useTransform(value, transformer), springOptions);
}

const spring = { stiffness: 600, damping: 30 };

const mouseToLightRotation = (v: number) => (-1 * v) / 140;

const transition = {
  type: "spring",
  duration: 0.7,
  bounce: 0.2,
};

export default function FancyButton() {
  const [ref, bounds] = useMeasure({ scroll: false });
  const [isHover, setIsHover] = useState(false);
  const [isTap, setIsTap] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const resetMousePosition = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const handleHoverStart = () => {
    resetMousePosition();
    setIsHover(true);
  };

  const handleHoverEnd = () => {
    resetMousePosition();
    setIsHover(false);
  };

  const handleTapStart = () => {
    setIsTap(true);
  };

  const handleTap = () => {
    setIsTap(false);
  };

  const handleTapCancel = () => {
    setIsTap(false);
  };

  const handlePointerMove = (e: MouseEvent<HTMLElement>) => {
    mouseX.set(e.clientX - bounds.x - bounds.width / 2);
    mouseY.set(e.clientY - bounds.y - bounds.height / 2);
  };

  return (
    <>
      <Head>
        <title>imti / fancy button</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link rel="icon" href="/photo.jpeg" />
      </Head>
      <main className="p-6 md:p-1 md:pt-12 bg-black h-screen overflow-hidden flex items-center justify-center font-mono">
        <Link
          href="/"
          className="fixed top-0 left-0 w-full bg-[#9333ea] text-white text-center z-50 text-sm py-1 hover:underline"
        >
          who built this?
        </Link>
        <MotionConfig transition={transition}>
          <motion.button
            ref={ref}
            className="relative border-4 border-slate-400 text-slate-400 text-3xl font-semibold py-8 px-16 rounded-full"
            animate={isHover ? "hover" : "rest"}
            whileTap="press"
            onHoverStart={handleHoverStart}
            onHoverEnd={handleHoverEnd}
            onTapStart={handleTapStart}
            onTap={handleTap}
            onTapCancel={handleTapCancel}
            onPointerMove={handlePointerMove}
            variants={{
              rest: { scale: 1 },
              hover: { scale: 1.5 },
              press: { scale: 1.4 },
            }}
          >
            <motion.div
              className="absolute top-[-1px] left-[-1px] bottom-[-1px] right-[-1px] opacity-0 -z-10"
              variants={{
                rest: { opacity: 0 },
                hover: { opacity: 1 },
              }}
            >
              <div
                className="absolute bottom-[-1px] w-[100px] h-[100px] right-[300px] bg-purple-900"
                style={{
                  filter: "blur(40px)",
                }}
              />
              <div
                className="absolute bottom-[-1px] w-[100px] h-[100px] right-[100px] bg-purple-900"
                style={{
                  filter: "blur(40px)",
                }}
              />
              <div
                className="absolute bottom-[-1px] w-[100px] h-[100px] left-[100px] bg-purple-900"
                style={{
                  filter: "blur(40px)",
                }}
              />
              <div
                className="absolute bottom-[-1px] w-[100px] h-[100px] left-[300px] bg-purple-900"
                style={{
                  filter: "blur(40px)",
                }}
              />
              <div className="absolute top-[-100px] left-[-100px] bottom-[-100px] right-[-100px] w-[calc(100% + 200px)] pointer-events-none">
                <Suspense fallback={null}>
                  <Shapes
                    isHover={isHover}
                    isTap={isTap}
                    mouseX={mouseX}
                    mouseY={mouseY}
                  />
                </Suspense>
              </div>
            </motion.div>
            <motion.div
              variants={{
                hover: {
                  scale: 0.85,
                  color: "rgba(255, 255, 255, 0.9)",
                },
                press: { scale: 1.0 },
              }}
            >
              download pocket
            </motion.div>
          </motion.button>
        </MotionConfig>
      </main>
    </>
  );
}

function Shapes({
  isHover,
  isTap,
  mouseX,
  mouseY,
}: {
  isHover: boolean;
  isTap: boolean;
  mouseX: MotionValue;
  mouseY: MotionValue;
}) {
  const lightRotateX: any = useSmoothTransform(
    mouseY,
    spring,
    mouseToLightRotation
  );
  const lightRotateY: any = useSmoothTransform(
    mouseX,
    spring,
    mouseToLightRotation
  );

  return (
    <Canvas
      className="absolute w-full h-full"
      style={{ pointerEvents: "none" }}
      shadows
      dpr={[1, 2]}
      resize={{ scroll: false, offsetSize: true }}
    >
      <Camera mouseX={mouseX} mouseY={mouseY}></Camera>
      <MotionConfig transition={transition}>
        <motion3D.group rotation={[lightRotateX, lightRotateY, 0]}>
          <Lights />
        </motion3D.group>
        <motion3D.group
          initial={false}
          animate={isHover ? "hover" : "rest"}
          dispose={null}
          variants={{
            hover: { z: isTap ? -0.9 : 0 },
          }}
        >
          <Button />
          <Astronaut
            scale={0.4}
            position={[-2.65, -0.75, 0.9]}
            rotation={[0.3, 1, 0]}
          />
          <Saturn
            scale={0.5}
            position={[2, -1, 0.8]}
            rotation={[1.8, 2.5, 1.2]}
          />
          <Neptune
            scale={0.011}
            position={[-1.5, 0.6, 0.5]}
            rotation={[1.5, 3.5, 1]}
          />
          <Satellite
            scale={0.009}
            position={[2, 0.25, 1.5]}
            rotation={[1, 3.9, 0]}
          />
          <Asteroids2
            scale={1}
            position={[0, -0.15, 1]}
            rotation={[-2, -0.2, 0]}
          />
        </motion3D.group>
      </MotionConfig>
    </Canvas>
  );
}

function Lights() {
  return (
    <>
      <spotLight color="#61dafb" position={[-10, -10, -10]} intensity={0.2} />
      <spotLight color="#61dafb" position={[-10, 0, 15]} intensity={0.8} />
      <spotLight color="#61dafb" position={[-5, 20, 2]} intensity={0.5} />
      <spotLight color="#f2056f" position={[15, 10, -2]} intensity={2} />
      <spotLight color="#f2056f" position={[15, 10, 5]} intensity={1} />
      <spotLight color="#b107db" position={[5, -10, 5]} intensity={0.8} />
    </>
  );
}

function Button() {
  return (
    <motion3D.mesh position={[0, 0, 0]}>
      <planeGeometry args={[9, 1.8]} />
      <Material />
    </motion3D.mesh>
  );
}

function Material(props: any) {
  return (
    <MeshTransmissionMaterial
      {...props}
      samples={16}
      resolution={256}
      thickness={1}
      roughness={0.45}
      anisotropy={1}
      color="#fff"
      flatShading={true}
    />
  );
}

// Adapted from https://github.com/pmndrs/drei/blob/master/src/core/PerspectiveCamera.tsx
function Camera({
  mouseX,
  mouseY,
  ...props
}: {
  mouseX: MotionValue;
  mouseY: MotionValue;
}) {
  const cameraX: any = useSmoothTransform(mouseX, spring, (x) => x / 350);
  const cameraY: any = useSmoothTransform(
    mouseY,
    spring,
    (y) => (-1 * y) / 350
  );

  const set = useThree(({ set }) => set);
  const camera = useThree(({ camera }) => camera);
  const size = useThree(({ size }) => size);
  const scene = useThree(({ scene }) => scene);
  const cameraRef: Ref<PerspectiveCameraProps | undefined> = useRef();

  useLayoutEffect(() => {
    const { current: cam } = cameraRef;
    if (cam) {
      cam.aspect = size.width / size.height;
      cam.updateProjectionMatrix!();
    }
  }, [size, props]);

  useLayoutEffect(() => {
    if (cameraRef.current) {
      const oldCam = camera;
      set(() => ({ camera: cameraRef.current as any }));
      return () => set(() => ({ camera: oldCam }));
    }
  }, [camera, cameraRef, set]);

  useLayoutEffect(() => {
    return cameraX.onChange(() => camera.lookAt(scene.position));
  }, [camera, scene, cameraX]);

  return (
    <motion3D.perspectiveCamera
      ref={cameraRef as Ref<PerspectiveCameraProps>}
      fov={90}
      position={[cameraX, cameraY, 3.8]}
    />
  );
}
