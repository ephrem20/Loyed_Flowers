import { IoBagHandleOutline } from 'react-icons/io5'
import flower3 from '../assets/flower3.png'
import leafdrop from '../assets/leafdrop.png'
import {motion} from 'framer-motion'
import { FadeRight } from '../utility/animation'

const Home = () => {
  return (
    <section id="home-section">
      <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px] realtive">
        {/* brand info */}
        <div className='flex flex-col justify-center py-14 md:py-0 relative z-10'>
          <div className='text-center md:text-left spacy-y-6 lg:max-w-[400px]'>
            <motion.h1
            variants={FadeRight(0.6)} initial='hidden' animate="visible" 
            whileHover={{scale:1.3}}
            className='text-4xl md:text-6xl font-bold leading-relaxed md:leading-tight font-averia'>
              Fresh<br/>
            <span className='text-secondary'>Flowers!</span></motion.h1>
            <motion.p 
            variants={FadeRight(0.9)} initial='hidden' animate="visible" 
            className='text-2xl font-bold tracking-wide mb-2'>Order now for fresh beautiful life</motion.p>
            <motion.p 
            variants={FadeRight(1.2)} initial='hidden' animate="visible"
            className='text-black'>Welcome to <span className='text-secondary'><strong>Loyed Flowers</strong></span> – your one-stop online flower shop for fresh, 
              handcrafted bouquets and unique floral gifts. 
              Order now for same-day delivery and bring joy to every moment.
              </motion.p>

              {/*button */}
            <motion.div variants={FadeRight(1.5)} initial='hidden' animate="visible"
             className='flex justify-center md:justify-start'>
             <button className='primary-btn flex items-center gap-2'>
            <IoBagHandleOutline />
               Order Now
            </button>
            </motion.div>
          </div>
        </div>
        {/*flower images */}
        <div>
          <motion.img 
          initial={{opacity: 0, x:200, rotate:75}}
          animate={{opacity: 1, x:0, rotate:0}}
          transition={{duration: 1, delay: 0.2}}
          src={flower3} alt="Flower" className='w-full h-full object-cover
           md:object-contain drop-shadow' />
        </div>
        {/*leaf*/}
        <div className='absolute top-14 md:top-0 right-1/2 blur-none lg:blur-sm md:blur-0 opacity-100 rotate-[-90deg]'>
          <motion.img
          initial={{opacity: 0, x:-200, rotate:75}}
          animate={{opacity: 1, x:0, rotate:0}} 
          transition={{duration: 1, delay: 1.5}}
           src={leafdrop}/>
        </div>

      </div>
    </section>
  )
}

export default Home