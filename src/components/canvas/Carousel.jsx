import React, { Suspense, useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useSpring, a } from '@react-spring/three';
import { OrbitControls, Text } from '@react-three/drei';

const categories = [
    { id: 1, name: 'AI/ML' },
    { id: 2, name: 'Frontend' },
    { id: 3, name: 'Game Dev' },
    { id: 4, name: 'Miscellaneous' },
    // Add more categories here
];



const CarouselButton = ({ position, text, index, onClick }) => {
  const [props, set] = useSpring(() => ({ scale: [1.5, 1.5, 1.5], config: { mass: 5, tension: 350, friction: 40 } }));
  const mesh = useRef();

  const { camera } = useThree();

  useEffect(() => {
    // Initially align button to face the camera
    mesh.current.lookAt(camera.position);
  }, [camera.position]);

  useFrame(({clock}) => {
    // Continuously adjust button to face the camera
    mesh.current.lookAt(camera.position);

    mesh.current.rotation.y = Math.sin(clock.getElapsedTime())


  });


  return (
    <a.mesh
      position={position}
      ref={mesh}
      onClick={onClick}
      onPointerOver={() => set({ scale: [2.5, 2.5, 2.5] })}
      onPointerOut={() => set({ scale: [1.5, 1.5, 1.5] })}
      scale={props.scale}>
      <boxGeometry args={[2, 0.5, 0.2]} />
      <meshStandardMaterial/>
      <meshBasicMaterial color={'#DC8686'}/>
      <Text
        color='black'
        anchorX="center" // Center the text horizontally
        anchorY="middle" // Center the text vertically
        fontSize={0.2} // Adjust the size of the text
        position={[0, 0, 0.11]} // Slightly in front of the box
      >
        {text}
      </Text>
    </a.mesh>
  );
};

const Carousel = () => {
    const handleCategoryClick = (categoryName) => {
      // Here, you can use react-router-dom's useHistory to navigate
      console.log(`Category clicked: ${categoryName}`);
    };
    

    const calculatePosition = (index, total, radiusX, radiusZ) => {
      const theta = (index / total) * Math.PI * 2; 
      const x = Math.cos(theta) * radiusX;
      const z = Math.sin(theta) * radiusZ;
      return [x, 0, z];
    };
  
    return (
      <Canvas>
        <ambientLight intensity={0} />
        <pointLight position={[10, 10, 10]} />
        {categories.map((category, index) => (
        <CarouselButton
            key={category.id}
            position={calculatePosition(index, categories.length, 12, 3)} // 5 is the radius of the circle
            text={category.name}
            index={index}
            onClick={() => handleCategoryClick(category.name)}
        />
        ))}
        

        
      </Canvas>
    );
  };
  
  export default Carousel;