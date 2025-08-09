import { useGLTF, useScroll, useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import React from 'react'
import * as THREE from "three";
import bgImage from './video/ganpati clg.mp4'

const MacContainer = () => {
    <video autoPlay loop muted>
        <source src={bgImage} type="video/mp4"/>
    </video>
    let model = useGLTF("./ma.glb");
    let tex = useTexture("/gan.jpg ");
    let meshes = {};
    model.scene.traverse(e => {
        meshes[e.name] = e;
    });

    meshes.screen.rotation.x = THREE.MathUtils.degToRad(180);
    meshes.matte.material.map = tex;
    meshes.matte.material.emissiveIntensity = 0;
    meshes.matte.material.metalness = 0;
    meshes.matte.material.roughness = 1;
    
    let data = useScroll();
    let ganeshaudio = new Audio('./gan.wav');

    useFrame((state, delta) => {
        meshes.screen.rotation.x = THREE.MathUtils.degToRad(180 - data.offset * 90);
        ganeshaudio.play();
    });
    return (
        <group position={[0, -10, 20]}>
            <primitive object={model.scene} />;
        </group>
    );
};

export default MacContainer;