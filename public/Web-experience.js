/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/web-experience.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Plush_Unicorn.geometry} material={materials['Plush Unicorn']} position={[1.19, 0.2, 1.81]} rotation={[Math.PI / 2, 0, 0]} scale={0.07} />
      <mesh geometry={nodes.Part1.geometry} material={materials['Part1.002']} position={[-1.1, 2.21, -0.7]} rotation={[Math.PI / 2, 0, 2.19]} scale={2.74} />
      <mesh geometry={nodes.Part2.geometry} material={materials['Part2.002']} position={[-1.1, 2.21, -0.7]} rotation={[Math.PI / 2, 0, 2.19]} scale={2.74} />
    </group>
  )
}

useGLTF.preload('/web-experience.gltf')
