import { OrbitControls, ScrollControls, Stage, Scroll } from "@react-three/drei";
import React, { Suspense, useRef } from 'react'
import { Fish } from '../fish/Fish'
import '../scene/Scene.css'

export function Scene() {
    const ref = useRef()


    return (
        <>
            {/* <Suspense fallback={null}>
                <Stage controls={ref} preset="rembrandt" intensity={1} environment="city">
                    <Fish />
                </Stage>
            </Suspense> */}
            <Suspense fallback={null}>
                <Stage controls={ref} intensity={2} environment="dawn">
                    <ScrollControls pages={3} damping={0.25}>
                        <Fish position={[-2, 1, 0]}/>
                        <Fish position={[1, 4, 0]}/>
                        <Scroll html>
                            <p>** Click on Koi to move them **</p>
                        </Scroll>
                    </ScrollControls>
                </Stage>
            </Suspense>
            <OrbitControls ref={ref} enableZoom={false} />
        </>
    )
}