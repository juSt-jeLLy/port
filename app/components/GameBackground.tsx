'use client'

import React, { useRef } from 'react'
import { useFrame, Canvas } from '@react-three/fiber'
import { Group, Color, PointLight } from 'three'
import { useSpring, animated } from '@react-spring/three'

const PARTICLE_COUNT = 2000
const PARTICLE_SIZE = 0.03

function Particles() {
  const ref = useRef<Group>(null)
  const positions = React.useMemo(() => {
    const positions = []
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      positions.push(
        (Math.random() - 0.5) * 30, // x
        (Math.random() - 0.5) * 20, // y
        (Math.random() - 0.5) * 10  // z
      )
    }
    return new Float32Array(positions)
  }, [])

  const colors = React.useMemo(() => {
    const colors = []
    const baseColors = [
      new Color('#00eaff'), // neon blue
      new Color('#ff2c2c'), // red
      new Color('#4e00ff'), // purple
    ]

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const color = baseColors[Math.floor(Math.random() * baseColors.length)]
      colors.push(color.r, color.g, color.b)
    }
    
    return new Float32Array(colors)
  }, [])

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.05) * 0.1
      ref.current.rotation.z = Math.cos(clock.getElapsedTime() * 0.05) * 0.05
    }
  })

  const springProps = useSpring({
    from: { scale: [0, 0, 0] },
    to: { scale: [1, 1, 1] },
    config: { mass: 5, tension: 500, friction: 150 },
    delay: 500,
  })

  return (
    <animated.group ref={ref} scale={springProps.scale as any}>
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={positions.length / 3}
            array={positions}
            itemSize={3}
            args={[positions, 3]}
          />
          <bufferAttribute
            attach="attributes-color"
            count={colors.length / 3}
            array={colors}
            itemSize={3}
            args={[colors, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={PARTICLE_SIZE}
          vertexColors
          transparent
          opacity={0.8}
          sizeAttenuation
        />
      </points>
    </animated.group>
  )
}

function MovingLight() {
  const ref = useRef<PointLight>(null)
  
  useFrame(({ clock }) => {
    if (ref.current) {
      const time = clock.getElapsedTime()
      ref.current.position.x = Math.sin(time * 0.6) * 8
      ref.current.position.y = Math.cos(time * 0.4) * 4
      ref.current.intensity = 1.5 + Math.sin(time) * 0.5
    }
  })
  
  return <pointLight ref={ref} position={[0, 0, 5]} color="#00eaff" intensity={2} distance={20} />
}

export default function GameBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <color attach="background" args={['#000b14']} />
        <fog attach="fog" args={['#000b14', 5, 30]} />
        <ambientLight intensity={0.1} />
        <pointLight position={[10, 10, 10]} intensity={0.4} />
        <MovingLight />
        <Particles />
      </Canvas>
    </div>
  )
} 