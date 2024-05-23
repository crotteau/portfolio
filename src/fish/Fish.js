import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'


export function Fish(props) {
  const group = useRef()
  const { nodes, materials, animations, scene } = useGLTF('/koi_fish/scene.gltf')
  const { actions, mixer } = useAnimations(animations, group)
  
  useEffect(() => {
    actions.MorphBake.play();
  }, [mixer]);

  

  return (
    <group ref={group} {...props} dispose={null}>
      {/* <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root"> */}
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 0.1, 0, -0.2]}>
              <group name="koifish_0" position={[-0.268, 1, 0]} rotation={[Math.PI, 0.75, Math.PI]}>
                <mesh
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
