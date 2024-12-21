import { useState, useRef, Suspense, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import { BufferGeometry, Float32BufferAttribute } from "three";

// Manual point generation in a sphere
const generateSphere = (numPoints, radius) => {
  const points = new Float32Array(numPoints * 3); // 3 for x, y, z
  for (let i = 0; i < numPoints; i++) {
    const phi = Math.random() * Math.PI * 2;
    const theta = Math.random() * Math.PI;
    points[i * 3] = radius * Math.sin(theta) * Math.cos(phi);
    points[i * 3 + 1] = radius * Math.sin(theta) * Math.sin(phi);
    points[i * 3 + 2] = radius * Math.cos(theta);
  }
  return points;
};

const Stars = (props) => {
  const ref = useRef();
  const [sphere] = useState(() => {
    const positions = generateSphere(5000, 1.2);  // Generate 5000 points within a radius of 1.2
    return positions;
  });

  // Create geometry and ensure it's properly set
  const geometry = new BufferGeometry();
  geometry.setAttribute("position", new Float32BufferAttribute(sphere, 3));  // 3 for x, y, z

  // Animate the stars' rotation
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} geometry={geometry} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  useEffect(() => {
    // Cleanup WebGL context when the component is unmounted
    return () => {
      const canvas = document.querySelector("canvas");
      if (canvas && canvas.context) {
        canvas.context.dispose(); // Dispose of the WebGL context
      }
    };
  }, []);

  return (
    <div className="w-full h-auto absolute inset-0 z-[-1]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
