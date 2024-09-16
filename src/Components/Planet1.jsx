import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Sphere, Text } from "@react-three/drei";

function Planet({ position, color, onPlanetClick, label }) {
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

      <Text
        position={[0, 1.5, 0]} // Position above the planet
        fontSize={0.4} // Adjust font size
        color="white" // Text color
        anchorX="center" // Center text horizontally
        anchorY="middle" // Align text vertically
      >
        {label} {/* Display the label passed as a prop */}
      </Text>
    </mesh>
  );
}

export default Planet;
