import { useState } from "react";

import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";

import CameraController from "./CamerControl";

import Planet from "./Planet1";

function SpaceScene() {
  const [targetPlanet, setTargetPlanet] = useState(null); // Track clicked planet

  const handlePlanetClick = (position) => {
    setTargetPlanet(position); // Set target position to the clicked planet
  };

  return (
    <Canvas className="space">
      {/* Add an interactive camera */}
      <OrbitControls />
      {/* Add a sky full of stars */}
      <Stars />
      {/* Add lighting to the scene */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />

      {/* Camera control logic */}
      <CameraController targetPlanet={targetPlanet} />

      {/* Central Planet */}
      <Planet
        position={[0, 0, 0]}
        color="grey"
        onPlanetClick={() => handlePlanetClick([0, 0, 0])}
        label="About Me!"
      />

      {/* Planet on the Left */}
      <Planet
        position={[-5, 0, -5]}
        color="salmon"
        onPlanetClick={() => handlePlanetClick([-5, 0, -5])}
        label="Utah Basement Builders"
      />

      {/* Planet on the Right */}
      <Planet
        position={[5, 0, -5]}
        color="pink"
        onPlanetClick={() => handlePlanetClick([5, 0, -5])}
        label="Tsquared Construction"
      />

      <Planet
        position={[3, 4, -5]}
        color="red"
        onPlanetClick={() => handlePlanetClick([3, 4, -5])}
        label="Resonance"
      />

      <Planet
        position={[-3, 4, -5]}
        color="blue"
        onPlanetClick={() => handlePlanetClick([-3, 4, -5])}
        label="Taskwize"
      />

      <Planet
        position={[-3, -4, -5]}
        color="coral"
        onPlanetClick={() => handlePlanetClick([-3, -4, -5])}
        label="Earth"
      />

      <Planet
        position={[3, -4, -5]}
        color="purple"
        onPlanetClick={() => handlePlanetClick([3, -4, -5])}
        label="Earth"
      />
    </Canvas>
  );
}

export default SpaceScene;
