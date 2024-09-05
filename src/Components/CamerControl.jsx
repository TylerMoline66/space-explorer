import React, { useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import Planet from "./Planet1";

function CameraController({ targetPlanet }) {
  const { camera } = useThree();

  useFrame(() => {
    if (targetPlanet) {
      camera.position.lerp(targetPlanet, 0.05); // Smoothly move the camera
      camera.lookAt(targetPlanet); // Ensure the camera looks at the planet
    }
  });

  return null; // No visual output, just logic to control the camera
}

export default CameraController;
