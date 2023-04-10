/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 Astronaut.glb
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";

export default function Astronaut(props: GroupProps) {
  const { nodes, materials } = useGLTF("/Astronaut.glb") as any;
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Astronaut_mesh.geometry}
        material={materials.Astronaut_mat}
      />
    </group>
  );
}

useGLTF.preload("/Astronaut.glb");