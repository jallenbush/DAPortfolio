import React from 'react';
//countup
import CountUp from 'react-countup'
//intersection observer hook
import { useInView } from 'react-intersection-observer'
//motion
import { motion } from 'framer-motion'
//varient
import { fadeIn } from '../variants'

import Resume from '../documents/da_res_allenjass.pdf';
import {Link} from 'react-scroll';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className='section' id='about' ref={ref}>
      <div className='container mx-auto'>
        <div className='flex flex-c gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0  '>
          {/* img */}
          <motion.div 
          variants={fadeIn('right', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.3}}
          className='flex-1 bg-about bg-contain bg-no-repeat h-[440px] mix-blend-lighten bg-top'> 
          </motion.div>
          
          {/* text */}
          <motion.div 
          variants={fadeIn('left', 0.5)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.3}}
          className='flex-1'>
            <h2 className='h2 text-accent'>About me.</h2>
            <h3 className='h3 mb-2 text-lg'>
            I am a computer science graduate with a passion for using technology to create innovative 
            solutions. With a strong desire to make a positive impact in the data analytic sector, I am excited to 
            showcase my skills, projects, and achievements on this platform. 
            </h3>
            <p className='mb-4'>
            I possess a strong skill set in data analytics, proficient in Python & SQL for data manipulation, 
            data analysis, & database querying. I also have experience with visualization tools such as Microsoft Power
            BI & Tableau for effectively presenting insights. 
            </p>
            {/* stats */}
            <div className='flex gap-x-6 lg:gap-x-10 mb-8'>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={2} duration={1} /> : 
                  null}
                </div>
                <div className='font-primary text-sm tracking-[2px] '>
                  Years of <br/>
                  Experience
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={9} duration={2} /> : 
                  null}
                  +
                </div>
                <div className='font-primary text-sm tracking-[2px] '>
                  Skills & Tools <br/>
                  Comprehended
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={1} duration={1} /> : 
                  null}
                  
                </div>
                <div className='font-primary text-sm tracking-[2px] '>
                  Degree <br/>
                  Acquired
                </div>
              </div>
            </div>
            <div className=' flex gap-x-5 items-center place-content-end'>
            <Link
            to='contact'
            activeClass='active'
            smooth={true}
            spy={true}>
              <button className='btn btn-sm'>Contact Me</button>
            </Link> 
              <a href={Resume} className='text-gradient text-[12px] btn-link text-sm' download={'jassmon-allen-resume'} 
              target='_blank' rel='noopener noreferrer'>
                Download My Resume</a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
