import { useState } from "react";

import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, Stars, Text } from "@react-three/drei";

import CameraController from "./CamerControl";

import Planet from "./Planet1";

import image from "../assets/2k_earth_daymap.jpeg";
import tw from "../assets/tw.png";
import res from "../assets/res.png";
import tsqd from "../assets/tsqd1.png";
// import tsqd1 from "../assets/tsqd1.png";
import ubb from "../assets/ubb.png";

function SpaceScene() {
  const [targetPlanet, setTargetPlanet] = useState(null);

  const handlePlanetClick = (position) => {
    setTargetPlanet(position);
  };

  return (
    <Canvas className="space">
      <OrbitControls />
      <Stars />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />

      <CameraController targetPlanet={targetPlanet} />

      <Text
        position={[-5, 2, 0]}
        fontSize={0.25}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        Welcome to my portfolio!
      </Text>

      <Planet
        position={[0, 0, 0]}
        planetTexture={image}
        onPlanetClick={() => handlePlanetClick([0, 0, 0])}
        label="About Me!"
      />

      <Planet
        position={[-5, 0, -5]}
        planetTexture={ubb}
        onPlanetClick={() => handlePlanetClick([-5, 0, -5])}
        label="Utah Basement Builders"
      />

      <Planet
        position={[5, 0, -5]}
        planetTexture={tsqd}
        onPlanetClick={() => handlePlanetClick([5, 0, -5])}
        label="Tsquared Construction"
      />

      <Planet
        position={[3, 4, -5]}
        planetTexture={res}
        onPlanetClick={() => handlePlanetClick([3, 4, -5])}
        label="Resonance"
      />

      <Planet
        position={[-3, 4, -5]}
        planetTexture={tw}
        onPlanetClick={() => handlePlanetClick([-3, 4, -5])}
        label="Taskwize"
      />

      <Planet
        position={[-3, -4, -5]}
        planetTexture={image}
        onPlanetClick={() => handlePlanetClick([-3, -4, -5])}
        label="Earth"
      />

      <Planet
        position={[3, -4, -5]}
        planetTexture={image}
        onPlanetClick={() => handlePlanetClick([3, -4, -5])}
        label="Earth?"
      />
    </Canvas>
  );
}

export default SpaceScene;
