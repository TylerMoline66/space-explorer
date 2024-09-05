import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Sphere } from "@react-three/drei";

function Planet({ position, color, onPlanetClick }) {
  const planetRef = useRef();

  // Make the planet rotate continuously
  useFrame(() => {
    planetRef.current.rotation.y += 0.01;
  });

  return (
    <mesh
      ref={planetRef}
      position={position}
      onClick={onPlanetClick} // Detect click events
    >
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

export default Planet;
