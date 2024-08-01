import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import MagicButton from './ui/MagicButton'
import { FaQuestion, FaRProject } from 'react-icons/fa'
import { FaSquarePen } from 'react-icons/fa6'

export default function Example() {
  return (
    <div id='about' className="relative isolate overflow-hidden dark:bg-black-100 px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        
      <div className="p-1 pt-10 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            alt=""
            src="./immagine3.svg"
            className="w-full h-full sm:w-[57rem]"
          />
        </div>
        
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-white">Conoscimi meglio</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-white-100 sm:text-4xl">About Me</h1>
              <p className="mt-6 mb-0 text-xl leading-7 text-white">
                Sono Benjamin Pistocchi, un giovane di 20 anni, appena diplomato all'Istituto
                Tecnico Tecnologico Blaise Pascal di Cesena, specializzazione in Informatica.
              </p>
            </div>

            <div className="max-w-xl text-base leading-7 text-white lg:max-w-lg">
              <p className='mt-4'>
                Grazie a questa formazione, ho acquisito una solida base di conoscenze in
                programmazione con vari linguaggi (C#, HTML, CSS, Javascript, Python), reti e
                sicurezza informatica. Apprendo velocemente e ho una forte attitudine al lavoro
                di squadra, con grande attenzione ai dettagli. Sono molto propenso a migliorare
                e a conoscere.
              </p>
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-white lg:max-w-lg">
              <h1 className="mt-6 text-3xl font-bold tracking-tight text-white-100 sm:text-3xl">Hobby del Graphic Designer</h1>
              <p className="mt-5">
                Nel mio tempo libero, coltivo la passione per la grafica digitale, un hobby che
                pratico da diversi anni e che mi ha permesso di sviluppare competenze
                avanzate nella creazione di immagini digitali. Sperimentare con software come
                Adobe Photoshop e Figma mi permette di creare progetti grafici vari, dalle
                brochure ai manifesti pubblicitari.
              </p>
              
                <div className='mt-4 md:mt-8 lg:-mt-4'>
                    <a href="#progetti">
                        <MagicButton 
                            title="Vedi i miei progetti"
                            icon={<FaSquarePen/>}
                            position='right'
                        />
                    </a>
                </div>
            </div>
          </div>
        </div>
        

      </div>
    </div>
  )
}
