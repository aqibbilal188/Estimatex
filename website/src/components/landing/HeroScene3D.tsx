"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import type { Group, Mesh } from "three";

type Bar = { x: number; z: number; h: number; pulse: number };

function BackgroundBars() {
  const bars = useMemo<Bar[]>(
    () =>
      Array.from({ length: 32 }, (_, i) => {
        const x = -10 + (i % 8) * 2.7;
        const z = -14 + Math.floor(i / 8) * 2.6;
        return {
          x,
          z,
          h: 0.7 + ((i * 5) % 10) * 0.2,
          pulse: 0.25 + (i % 7) * 0.05,
        } as Bar;
      }),
    []
  );

  return (
    <>
      {bars.map((bar, index) => (
        <PulsingBar key={index} bar={bar} />
      ))}
    </>
  );
}

function PulsingBar({ bar }: { bar: Bar }) {
  const ref = useRef<Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime * bar.pulse;
    ref.current.position.y = bar.h * 0.5 - 2.0 + Math.sin(t) * 0.05;
  });

  return (
    <mesh ref={ref} position={[bar.x, bar.h * 0.5 - 2.0, bar.z]} scale={[1.15, bar.h, 1.15]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#0f766e" roughness={0.6} metalness={0.1} />
    </mesh>
  );
}

function FloatingSheets() {
  const group = useRef<Group>(null);

  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.elapsedTime;
    group.current.rotation.y = Math.sin(t * 0.2) * 0.08;
    group.current.position.y = Math.sin(t * 0.45) * 0.08 + 0.85;
  });

  const sheets = useMemo(
    () => [
      { p: [-2.6, 0, -1.5], r: [-0.1, 0.42, 0], c: "#99f6e4", a: 0.18 },
      { p: [0.4, 0.1, -1.2], r: [-0.05, 0.22, 0], c: "#5eead4", a: 0.16 },
      { p: [2.8, 0.2, -1.0], r: [0, -0.1, 0], c: "#67e8f9", a: 0.15 },
      { p: [-1.2, -0.35, -0.4], r: [0.03, 0.34, 0], c: "#2dd4bf", a: 0.14 },
      { p: [1.4, -0.28, -0.15], r: [0.06, 0.12, 0], c: "#99f6e4", a: 0.13 },
    ],
    []
  );

  return (
    <group ref={group}>
      {sheets.map((sheet, i) => (
        <mesh key={i} position={sheet.p as [number, number, number]} rotation={sheet.r as [number, number, number]}>
          <boxGeometry args={[4.8, 0.06, 2.8]} />
          <meshPhysicalMaterial
            color={sheet.c}
            transparent
            opacity={sheet.a}
            roughness={0.18}
            metalness={0.12}
            clearcoat={0.9}
            clearcoatRoughness={0.15}
          />
        </mesh>
      ))}
      <mesh position={[0.4, 0.2, 1.3]} rotation={[0.1, -0.22, 0]}>
        <torusGeometry args={[2.7, 0.035, 12, 100]} />
        <meshStandardMaterial color="#5eead4" emissive="#0f766e" emissiveIntensity={0.35} />
      </mesh>
    </group>
  );
}

function CameraRig() {
  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const tx = state.pointer.x * 0.9;
    const ty = state.pointer.y * 0.45;
    state.camera.position.x += (tx - state.camera.position.x) * 0.025;
    state.camera.position.y += (2.45 + ty - state.camera.position.y) * 0.025;
    state.camera.position.z = 8.2 + Math.sin(t * 0.18) * 0.25;
    state.camera.lookAt(0, 0.35, -2.8);
  });
  return null;
}

export default function HeroScene3D() {
  return (
    <Canvas camera={{ position: [0, 2.45, 8.2], fov: 46 }} dpr={[1, 1.6]}>
      <color attach="background" args={["#021716"]} />
      <fog attach="fog" args={["#021716", 7, 28]} />
      <ambientLight intensity={0.35} />
      <directionalLight position={[6, 10, 4]} intensity={0.95} color="#99f6e4" />
      <directionalLight position={[-6, 4, -8]} intensity={0.4} color="#67e8f9" />
      <spotLight position={[0, 7, 8]} intensity={0.45} angle={0.35} penumbra={0.85} color="#2dd4bf" />

      <BackgroundBars />
      <FloatingSheets />
      <Environment preset="night" />
      <CameraRig />
    </Canvas>
  );
}
