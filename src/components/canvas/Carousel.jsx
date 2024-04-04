import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useSpring, a } from '@react-spring/three';
import { OrbitControls } from '@react-three/drei';

const categories = [
    { id: 1, name: 'AI/ML' },
    { id: 2, name: 'Frontend' },
    { id: 3, name: 'Game Dev' },
    { id: 4, name: 'Miscellaneous' },
    // Add more categories here
];

function calculatePosition(index, total, radius) {
    const theta = (index / total) * Math.PI * 2; // Angle for the current item
    return [Math.cos(theta) * radius, 0, Math.sin(theta) * radius];
}

const CarouselButton = ({ position, text, onClick }) => {
    const mesh = useRef();
  
    const [props, set] = useSpring(() => ({ scale: [1, 1, 1], config: { mass: 5, tension: 350, friction: 40 } }));
    
    return (
      <a.mesh
        position={position}
        ref={mesh}
        onClick={onClick}
        onPointerOver={() => set({ scale: [1.5, 1.5, 1.5] })}
        onPointerOut={() => set({ scale: [1, 1, 1] })}
        scale={props.scale}>
        <boxGeometry args={[2, 0.5, 0.2]} />
        <meshStandardMaterial color='#EEEEEE' />
        <meshBasicMaterial />
      </a.mesh>
    );
};

const Carousel = () => {
    const handleCategoryClick = (categoryName) => {
      // Here, you can use react-router-dom's useHistory to navigate
      console.log(`Category clicked: ${categoryName}`);
    };
  
    return (
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        {categories.map((category, index) => (
        <CarouselButton
            key={category.id}
            position={calculatePosition(index, categories.length, 5)} // 5 is the radius of the circle
            text={category.name}
            onClick={() => handleCategoryClick(category.name)}
        />
        ))}
        <OrbitControls 
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}/>
      </Canvas>
    );
  };
  
  export default Carousel;