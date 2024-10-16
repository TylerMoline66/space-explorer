import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Text, useTexture } from "@react-three/drei";

function Planet({ position, planetTexture, onPlanetClick, label }) {
  const planetRef = useRef();
  const textRef = useRef();
  const { camera } = useThree();
  const texture = useTexture(planetTexture);

  useFrame(() => {
    planetRef.current.rotation.y += 0.002;

    if (textRef.current) {
      textRef.current.quaternion.copy(camera.quaternion);
    }
  });

  return (
    <group position={position}>
      <mesh ref={planetRef} onClick={onPlanetClick}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial map={texture} />
      </mesh>

      <Text
        ref={textRef}
        position={[0, 1.5, 0]}
        fontSize={0.4}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        {label}
      </Text>
    </group>
  );
}

export default Planet;
