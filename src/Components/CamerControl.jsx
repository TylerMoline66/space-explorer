import React, { useRef, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

function CameraController({ targetPlanet }) {
  const { camera } = useThree();
  const targetRef = useRef(new THREE.Vector3());
  const distance = 5; // Desired distance from the planet
  const cameraPosition = useRef(camera.position.clone()); // Save the initial camera position

  useFrame(() => {
    if (targetPlanet) {
      targetRef.current.set(...targetPlanet);

      // Compute the new camera position
      const direction = new THREE.Vector3()
        .subVectors(camera.position, targetRef.current)
        .normalize();
      const newCameraPosition = targetRef.current
        .clone()
        .add(direction.multiplyScalar(distance));

      // Smoothly move the camera to the new position
      camera.position.lerp(newCameraPosition, 0.1);

      // Update the camera's lookAt position
      camera.lookAt(targetRef.current);
    }
  });

  useEffect(() => {
    if (!targetPlanet) {
      camera.position.copy(cameraPosition.current); // Reset camera position if no target
    }
  }, [targetPlanet, camera]);

  return null; // No visual output, just logic to control the camera
}

export default CameraController;
