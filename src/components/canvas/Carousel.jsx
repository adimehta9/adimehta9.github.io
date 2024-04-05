import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useSpring as UseSpringThree, a } from '@react-spring/three';
import { useSpring as UseSpringWeb, animated } from '@react-spring/web';
import { Text } from '@react-three/drei';
import { projects } from '../../constants';
import { Tilt } from 'react-tilt';
import { github } from '../../assets';
import { motion } from 'framer-motion';




const categories = [
    { id: 1, name: 'AI/ML' },
    { id: 2, name: 'Frontend' },
    { id: 3, name: 'Game Dev' },
    { id: 4, name: 'Miscellaneous' },
    // Add more categories here
];



const ProjectCard = ({name, description, tags, image, source_code_link}) => {
  return (
    <motion.div>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img 
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open (source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer" 
            >
              <img 
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};


const CarouselButton = ({ position, text, index, onClick }) => {
  const [props, set] = UseSpringThree(() => ({ scale: [1.5, 1.5, 1.5], config: { mass: 5, tension: 350, friction: 40 } }));
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
  const [contentHeight, setContentHeight] = useState('0px');

  const contentRef = useRef();

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(`${contentRef.current.scrollHeight}px`);
    }
  }, [selectedCategory]);


  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(categoryName);
    console.log(`Category clicked: ${categoryName}`);
  };

  
  const slideDownAnimation = UseSpringWeb({
    from: { opacity: 0, maxHeight: '0px' },
    to: {
      opacity: selectedCategory ? 1 : 0,
      maxHeight: selectedCategory ? contentHeight : '0x'
    },
    config: { tension: 210, friction: 20 },
  });
  

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
          <animated.div ref={contentRef} style={{ ...slideDownAnimation, overflow: 'hidden' }}>
            <div style={{ marginTop: '20px', textAlign: 'center' }}>
              <h2>{selectedCategory} Projects</h2>
              <div className="mt-20 flex flex-wrap gap-7 justify-center">
                {projects
                  .filter(projects => projects.category === selectedCategory)
                  .map((row, index) => (
                    <ProjectCard 
                      key={`project-${index}`} 
                      index={index}
                      {...row}
                    />
                ))}
              </div>
            </div>
          </animated.div>
          
        ) 
        
      }

    </>


    );
};
  
  export default Carousel;