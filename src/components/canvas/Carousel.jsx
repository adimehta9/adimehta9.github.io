import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useSpring, a } from '@react-spring/three';
import { Text } from '@react-three/drei';


const projects = [
  { id: 1, name: 'Project 1', category: 'AI/ML' },
  { id: 2, name: 'Project 2', category: 'Frontend' },
  // Add more projects here
];

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
  
  const radiusX = 12; // X radius of the ellipse
  const radiusZ = 3; // Z radius of the ellipse
  const speed = 0.5; // Speed of rotation

  useFrame(() => {
    
    const angle = performance.now() / 1000 * speed + (Math.PI * 2 * (index / categories.length));
    mesh.current.position.x = Math.sin(angle) * radiusX;
    mesh.current.position.z = Math.cos(angle) * radiusZ;


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

  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(categoryName);
    console.log(`Category clicked: ${categoryName}`);
  };
  

  const calculatePosition = (index, total, radiusX, radiusZ) => {
    const theta = (index / total) * Math.PI * 2; 
    const x = Math.cos(theta) * radiusX;
    const z = Math.sin(theta) * radiusZ;
    return [x, 0, z];
  };

  return (
    <>
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

      {
        selectedCategory && (
          <div style={{ marginTop: '20px', textAlign: 'center' }}>
            <h2>{selectedCategory} Projects</h2>
            <div>
              {projects
                .filter(proects => projects.category === selectedCategory)
                .map(project => (
                  <div key={project.id}>
                    <h3>{project.name}</h3>
                  </div>
                ))}
            </div>
          </div>
        ) 
        
      }

    </>


    );
};
  
  export default Carousel;