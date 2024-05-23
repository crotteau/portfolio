import React, { useRef, useEffect, useState } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

export function Fish(props) {
  const group = useRef()
  const { viewport, mouse } = useThree();
  const { nodes, materials, animations } = useGLTF('/koi_fish/scene.gltf')
  const { actions, mixer } = useAnimations(animations, group)
  const [position, setPosition] = useState([]);
  
  useEffect(() => {
    actions.MorphBake.play();
  }, [mixer]);

  const swim = () => {
    setPosition([Math.random() * 10 - 4, Math.random() * 10 - 5, Math.random() * 10 - 5]);
  }

  useFrame(() => {
    if (group.current) {
      group.current.position.lerp(new THREE.Vector3(...position), 0.09);
    }
  });

  return (
    <group ref={group} {...props} dispose={null}>
      {/* <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root"> */}
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 0.1, 0, -0.1]}>
              <group name="koifish_0" position={props.position} rotation={[Math.PI, 0.75, Math.PI]}>
                <mesh
                  onClick={swim}
                  name="mesh_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_0.geometry}
                  material={materials.SimplygonCastMaterial}
                  morphTargetDictionary={nodes.mesh_0.morphTargetDictionary}
                  morphTargetInfluences={nodes.mesh_0.morphTargetInfluences}
                />
              </group>
            </group>
          </group>
    //     </group>
    //   </group>
    // </group>
  )
}

useGLTF.preload('/koi_fish/scene.gltf')
