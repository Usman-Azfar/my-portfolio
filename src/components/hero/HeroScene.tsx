"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sparkles } from "@react-three/drei";
import * as THREE from "three";
import { theme } from "@/config/site";

function NeuralField({ quality }: { quality: "high" | "low" }) {
  const pointsRef = useRef<THREE.Points>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const count = quality === "high" ? 84 : 42;

  const field = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const edges: number[] = [];
    const columns = quality === "high" ? 12 : 7;
    const rows = Math.ceil(count / columns);

    for (let index = 0; index < count; index += 1) {
      const column = index % columns;
      const row = Math.floor(index / columns);
      const x = (column / (columns - 1) - 0.5) * 10.5;
      const y = (row / Math.max(rows - 1, 1) - 0.5) * 6.2;
      const offset = Math.sin(index * 4.17) * 0.22;
      positions[index * 3] = x + offset;
      positions[index * 3 + 1] = y + Math.cos(index * 2.31) * 0.28;
      positions[index * 3 + 2] = Math.sin(index * 1.71) * 0.6 - 0.8;

      if (column < columns - 1 && index + 1 < count) edges.push(index, index + 1);
      if (row < rows - 1 && index + columns < count) edges.push(index, index + columns);
      if (column < columns - 1 && row < rows - 1 && index + columns + 1 < count) {
        edges.push(index, index + columns + 1);
      }
    }

    const linePositions = new Float32Array(edges.length * 3);
    edges.forEach((nodeIndex, edgeIndex) => {
      linePositions[edgeIndex * 3] = positions[nodeIndex * 3];
      linePositions[edgeIndex * 3 + 1] = positions[nodeIndex * 3 + 1];
      linePositions[edgeIndex * 3 + 2] = positions[nodeIndex * 3 + 2];
    });

    return { positions, linePositions };
  }, [count, quality]);

  useFrame((state) => {
    const pulse = 1 + Math.sin(state.clock.elapsedTime * 1.5) * 0.05;
    if (coreRef.current) coreRef.current.scale.setScalar(pulse);
    if (pointsRef.current) {
      const material = pointsRef.current.material as THREE.PointsMaterial;
      material.opacity = 0.55 + Math.sin(state.clock.elapsedTime * 1.2) * 0.12;
    }
  });

  return (
    <group position={[0, 0, -0.4]}>
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[field.linePositions, 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial color={theme.primary} transparent opacity={0.16} blending={THREE.AdditiveBlending} />
      </lineSegments>

      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[field.positions, 3]} />
        </bufferGeometry>
        <pointsMaterial
          color={theme.secondary}
          size={quality === "high" ? 0.075 : 0.1}
          transparent
          opacity={0.65}
          sizeAttenuation
          blending={THREE.AdditiveBlending}
        />
      </points>

      <mesh ref={coreRef} position={[0, 0, 0.2]}>
        <sphereGeometry args={[0.52, 24, 24]} />
        <meshBasicMaterial color={theme.primary} transparent opacity={0.22} blending={THREE.AdditiveBlending} />
      </mesh>
      <mesh position={[0, 0, 0.22]}>
        <sphereGeometry args={[0.2, 20, 20]} />
        <meshBasicMaterial color={theme.secondary} transparent opacity={0.85} blending={THREE.AdditiveBlending} />
      </mesh>

      <Sparkles count={quality === "high" ? 48 : 20} scale={[12, 7, 3]} size={1.4} speed={0.18} color={theme.primary} opacity={0.45} />
    </group>
  );
}

function Lighting() {
  return <ambientLight intensity={0.5} />;
}

export default function HeroScene({ quality = "high" }: { quality?: "high" | "low" }) {
  const isLow = quality === "low";

  return (
    <div className="absolute inset-0" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 5.6], fov: 42 }}
        dpr={isLow ? [1, 1.2] : [1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        onCreated={({ gl }) => {
          gl.setClearColor(0x000000, 0);
          gl.setPixelRatio(Math.min(window.devicePixelRatio, isLow ? 1.2 : 1.6));
        }}
      >
        <Lighting />
        <NeuralField quality={quality} />
      </Canvas>
    </div>
  );
}
