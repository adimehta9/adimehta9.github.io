import React from 'react'
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { languages, tools, frameworks } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { Tilt } from 'react-tilt';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => (
    <Tilt className="xs:w-[95px]">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale:1, 
            speed: 450
          }}
          className="bg-secondary rounded-[20px] py-3 px-4 min-w-[20px] h-[100px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-12 h-12 object-contain" />
          <h3 className="text-white text-[16px] text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  
);


const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p 
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-fourth text-[17px] max-w-3xl leading-[30px]"
      >
        I am a skilled software engineer with a deep passion for Artificial Intelligence/Machine Learning, Data Engineering,
        and Cloud Computing. Beyond my expertise in Python and C++, I am a fast learner who thrives on acquiring new languages
        and technologies, and using them to think of and create innovative solutions. This enthusiasm fuels my drive to 
        continuously innovate and explore the ever-evoling landscape of AI and data science.

        
      </motion.p>

      <h2 className={`${styles.heroSubText} mt-20 text-white-100`}>Programming Languages</h2>
      <div className="mt-5 flex flex-wrap gap-8 justify-center">
        {languages.map((service, index) => (
          <ServiceCard key={service.lang} index= {index} {...service} />
        ))}
      </div>

      <h2 className={`${styles.heroSubText} mt-20 text-white-100`}>Tools</h2>
      <div className="mt-5 flex flex-wrap gap-8 justify-center">
        {tools.map((service, index) => (
          <ServiceCard key={service.lang} index= {index} {...service} />
        ))}
      </div>

      <h2 className={`${styles.heroSubText} mt-20 text-white-100`}>Frameworks</h2>
      <div className="mt-5 flex flex-wrap gap-8 justify-center">
        {frameworks.map((service, index) => (
          <ServiceCard key={service.lang} index= {index} {...service} />
        ))}
      </div>

      




    </>
  )
}

export default SectionWrapper(About, "about")