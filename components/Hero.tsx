
import { FaQuestion } from "react-icons/fa";
import { FaHome } from 'react-icons/fa'
import MagicButton from './ui/MagicButton'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/text-generate-effect'


const Hero = () => {
  return (
    <div className='pb-24 pt-36'>
        <div>
            <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white' /> 
            <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill='blue' /> 
            <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill='blue' /> 
            <Spotlight className='top-28 right-180 h-[80vh] w-[50vw]' fill='#4a40e3' /> 
        </div>

        <div className="h-96 w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.05] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        </div>
        
        <div className='flex justify-center relative my-20 z-10'>
            <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
                <h2 className='uppercase tracking-widest text-xl text-center text-blue-100 max-w-80'>
                    Portfolio
                </h2>

                <TextGenerateEffect 
                    className='text-center text-[40px] md:text-5xl lg:text-6xl'
                    words='Benjamin Pistocchi' 
                />
                
                <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-xl  tracking-widest text-blue-100'>
                    Tecnico Informatico & Graphic Designer  
                </p>
                

                <a href="#about">
                    <MagicButton 
                        title="About me"
                        icon={<FaQuestion />}
                        position='right'
                    />
                </a>
            </div>
        </div>
    </div>

    
    
  )
}

export default Hero