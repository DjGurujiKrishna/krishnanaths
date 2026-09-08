"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import type { Group, Mesh } from "three";

function seededUnit(seed: number) {
  const value = Math.sin(seed * 12.9898) * 43758.5453;
  return value - Math.floor(value);
}

function createParticles(count: number) {
  return Array.from({ length: count }, (_, index) => ({
    position: [
      (seededUnit(index + 1) - 0.5) * 25,
      (seededUnit(index + 101) - 0.5) * 25,
      (seededUnit(index + 202) - 0.5) * 25,
    ] as [number, number, number],
    size: seededUnit(index + 303) * 0.05 + 0.02,
  }));
}

function ParticleField({
  count = 150,
  color = "#FFDF80",
}: {
  count?: number;
  color?: string;
}) {
  const mesh = useRef<Group>(null);

  const particles = useMemo(() => createParticles(count), [count]);

  useFrame(() => {
    if (!mesh.current) return;
    mesh.current.rotation.x += 0.0001;
    mesh.current.rotation.y += 0.0001;
  });

  return (
    <group ref={mesh}>
      {particles.map((particle, i) => (
        <mesh key={i} position={particle.position}>
          <sphereGeometry args={[particle.size, 5, 5]} />
          <meshBasicMaterial color={color} transparent opacity={0.5} />
        </mesh>
      ))}
    </group>
  );
}

function GlowingSphere({
  position = [0, 0, 0] as [number, number, number],
  color = "#FFB300",
  size = 1.5,
}: {
  position?: [number, number, number];
  color?: string;
  size?: number;
}) {
  const mesh = useRef<Mesh>(null);

  useFrame(({ clock }) => {
    if (!mesh.current) return;
    const t = clock.getElapsedTime() * 0.5;
    mesh.current.position.y = position[1] + Math.sin(t) * 0.1;
    mesh.current.rotation.y += 0.005;
    mesh.current.rotation.z += 0.001;
  });

  return (
    <mesh ref={mesh} position={position}>
      <sphereGeometry args={[size, 16, 16]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.5}
        transparent
        opacity={0.2}
      />
    </mesh>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={0.8} />
      <ParticleField count={150} />
      <GlowingSphere position={[-5, 0, -5]} color="#A38A3A" size={1.8} />
      <GlowingSphere position={[5, 2, -3]} color="#FFB300" size={1.2} />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.3}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
    </>
  );
}

export default function ThreeBackground({ opacity = 0.3 }: { opacity?: number }) {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none" style={{ opacity }}>
      <Canvas
        gl={{
          antialias: false,
          powerPreference: "default",
          alpha: true,
        }}
        camera={{ position: [0, 0, 15], fov: 60 }}
        dpr={[1, 1.5]}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
