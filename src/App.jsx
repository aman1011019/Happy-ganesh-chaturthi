import { Canvas } from '@react-three/fiber';
import React from 'react';
import "./style.css";
import { Environment, OrbitControls, ScrollControls } from '@react-three/drei';
import MacContainer from './MacContainer';
import { div } from 'three/webgpu';
const App = () => {
  return (
    <div className="w-full h-screen font-['Helvetica_Now_Display']">
      <div className="navbar line flex gap-8 pt-10  absolute top-0 left-1/2 -translate-x-1/2">
        {["Ganpati", "Bappa", "Morya", "Mangal", "Murti", "Morya", "Ganpati", "Bappa", "Morya", "Mangal", "Murti", "Morya",].map(e => (<a href='' className="text-white font-[400] text-lg">
          {e}
        </a>))}
      </div>
      <div className="absolute flex flex-col items-center text-white top-32 left-1/2 -translate-x-1/2 font-['Helvetica_Now_Display']">
        <h3 className="masked text-6xl tracking-tighter ">Happy Ganesh Chaturthi</h3>
        <h5>Ganpati Bappa Morya ,Mangal Murti Morya</h5>
        <p className="text-center w-3/4">Ganesha Chaturthi, the great Ganesha festival, also known as 'Vinayak Chaturthi' or 'Vinayaka Chavithi' is celebrated by Hindus around the world as the birthday of Lord Ganesha</p>
      </div>
      <Canvas camera={{ fov: 12, position: [0, -10, 220]}}>
        <Environment
          files={["https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_09_4k.exr",

          ]}
        />
        <ScrollControls pages={3}>
          <MacContainer />
        </ScrollControls>   
      </Canvas>
    </div>  
  );
};
export default App;