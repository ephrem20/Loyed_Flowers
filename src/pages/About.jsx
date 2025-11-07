import loyed from '../assets/loyed.png'
import { motion } from 'framer-motion';

// Simple FadeUp animation variant
const FadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay }
  }
});

const About = () => {
  return (
    <section id="About-section">
      <div className="container grid grid-cols-1 md:grid-cols-2 spacy-y-6 md:space-y-0 py-14">
        {/*image*/}
        <div className='flex justify-center items-center'>
        <motion.img 
        initial={{opacity:0, scale:0.5}}
        whileInView={{opacity:1, scale:1}}
        transition={{type:"spring",stiffness:100, delay:0.2}} 
        animate="visible"
        viewport={{ once: true }} 
        src={loyed} alt="" className='w-[600px] md:max-w-[600px] h-full object-cover'/>
      </div>
      {/*info*/}
      <div className='flex flex-col justify-center'>
        <div className='text-center  md:text-left space-y-4 w-full'>
          <motion.h1
          variants={FadeUp(0.3)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true}}
          animate="visible"
          className='text-3xl lg:text-6xl font-bold uppercase'>About US</motion.h1>
         
          <motion.p 
          variants={FadeUp(0.7)}
          initial="hidden"
          animate="visible"
         className="md:text-xl text-black"
         >
            Established in 2005 E.C., Loyed Flowers was named in honor of our beloved daughter, <strong>Loyed,</strong> 
            whose warmth and beauty continue to inspire everything we do. 
            What began as a small family passion has grown into a trusted flower shop known for fresh, 
            elegant arrangements and heartfelt service. We believe flowers speak the language of love, celebration, and comfort — and we’re proud to help our customers share those feelings every day. 
            From birthdays to weddings, we’re here to make life’s moments bloom.
          </motion.p>
    {/*button sec*/}
    <motion.div
    variants={FadeUp(1.0)}
    initial="hidden"
    animate="visible"
    className='flex justify-center md:justify-start'>
      <button className='primary-btn flex items-center gap-1.5'>
        <span>Learn More</span>
      </button> 
    </motion.div>

        </div>
      </div>
      </div>
    </section>
  )
};

export default About;
