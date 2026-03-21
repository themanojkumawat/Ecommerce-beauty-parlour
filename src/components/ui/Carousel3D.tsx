"use client";
import React, { useRef, useState, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Image, ScrollControls, useScroll, PerspectiveCamera, Environment, Float, useCursor } from "@react-three/drei";
import * as THREE from "three";
import { galleryImages } from "@/data/gallery";
interface CardProps {
  url: string;
  index: number;
  total: number;
  onClick: (url: string) => void;
}
function Card({ url, index, total, onClick }: CardProps) {
  const ref = useRef<THREE.Group>(null!);
  const [hovered, setHover] = useState(false);
  const scroll = useScroll();
  useCursor(hovered);
  useFrame((state: any, delta: number) => {
    if (!ref.current) return;
    // 3D Circular Distribution Logic
    const offset = scroll.offset * total;
    const posIndex = (index - offset + total) % total;
    const angle = (posIndex / total) * Math.PI * 2;
    // Physical geometry: 8.5 unit radius
    const radius = 8.5;
    const x = Math.sin(angle) * radius;
    const z = Math.cos(angle) * radius;
    // Movement: Smooth Lerp with high-end physics feel
    ref.current.position.x = THREE.MathUtils.lerp(ref.current.position.x, x, 0.1);
    ref.current.position.z = THREE.MathUtils.lerp(ref.current.position.z, z, 0.1);
    // Perspective: Always orient toward the center camera
    ref.current.lookAt(0, 5, 0);
    // Depth Scaling: Front-facing images expand into view
    const distFromFront = Math.abs(x);
    const targetScale = THREE.MathUtils.mapLinear(distFromFront, 0, radius, 1.8, 0.4);
    const smoothScale = THREE.MathUtils.lerp(ref.current.scale.x, targetScale, 0.1);
    ref.current.scale.setScalar(smoothScale);
    // Aesthetic: Subtle bounce/float physics
    ref.current.position.y = Math.sin(state.clock.elapsedTime + index * 0.5) * 0.15;
  });
  return (
    <group 
      ref={ref} 
      onPointerOver={() => setHover(true)} 
      onPointerOut={() => setHover(false)}
      onClick={() => onClick(url)}
    >
      <Image 
        url={url} 
        transparent 
        scale={[3, 4, 1]} 
        toneMapped={false} 
        brightness={1.1}
      />
      {/* Dynamic Glow Strip below active cards */}
      <mesh position={[0, -2.1, 0.01]}>
         <planeGeometry args={[3.2, 0.1]} />
         <meshBasicMaterial 
           color={hovered ? "#ff5da2" : "#ffffff"} 
           opacity={hovered ? 0.8 : 0.2} 
           transparent 
         />
      </mesh>
    </group>
  );
}
export const Carousel3D = ({ onCardClick }: { onCardClick: (url: string) => void }) => {
  return (
    <div className="h-full w-full cursor-grab active:cursor-grabbing">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 15]} fov={55} />
        <ambientLight intensity={1.5} />
        <pointLight position={[10, 10, 10]} intensity={2} color="#ff5da2" />
        <pointLight position={[-10, 10, 10]} intensity={1} color="#fce4ec" />
        <ScrollControls pages={4} horizontal damping={0.3} infinite>
          <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
            {galleryImages.map((image: any, i: number) => (
              <Card 
                key={i} 
                index={i} 
                total={galleryImages.length} 
                url={image.src} 
                onClick={onCardClick}
              />
            ))}
          </Float>
        </ScrollControls>
        <Environment preset="studio" />
      </Canvas>
    </div>
  );
};
