import { OrbitControls, ScrollControls, Stage, Scroll } from "@react-three/drei";
import React, { Suspense, useRef } from 'react'
import { Fish } from '../fish/Fish'

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
                    {/* <ScrollControls pages={3} damping={0.25}> */}
                    <Fish />
                    {/* <Scroll html>
                        <div>Hi Koi!</div>
                    </Scroll> */}
                    {/* </ScrollControls> */}
                </Stage>
            </Suspense>
            <OrbitControls ref={ref} enableZoom={false} />
        </>
    )
}