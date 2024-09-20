import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Text, useTexture } from "@react-three/drei";

function Planet({ position, planetTexture, onPlanetClick, label }) {
  const planetRef = useRef();
  const textRef = useRef();
  const { camera } = useThree(); // Get camera reference
  const texture = useTexture(planetTexture);

  // Rotate the planet but keep the text static
  useFrame(() => {
    // Rotate only the planet mesh
    planetRef.current.rotation.y += 0.002;

    // Ensure text always faces the camera (billboard effect)
    if (textRef.current) {
      textRef.current.quaternion.copy(camera.quaternion);
    }
  });

  return (
    <group position={position}>
      {/* Rotating Planet */}
      <mesh ref={planetRef} onClick={onPlanetClick}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial map={texture} />
      </mesh>

      {/* Static Text above the planet */}
      <Text
        ref={textRef}
        position={[0, 1.5, 0]} // Position above the planet
        fontSize={0.4} // Adjust font size
        color="white" // Text color
        anchorX="center" // Center text horizontally
        anchorY="middle" // Align text vertically
      >
        {label}
      </Text>
    </group>
  );
}

export default Planet;
