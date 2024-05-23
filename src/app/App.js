import React, { Suspense, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage } from '@react-three/drei'
import { Scene } from '../scene/Scene'

import './App.css'

function App() {
  const ref = useRef()
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello!</h1>
      </header>
      <Canvas dpr={[1, 2]} camera={{ fov: 50 }}>
        <Scene />
      </Canvas>
    </div>
  );
}

export default App;
