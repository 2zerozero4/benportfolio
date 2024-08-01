import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/bento-grid'
import { gridItems } from '@/data'

const Grid = () => {
  return (
    <section id='about' className='overflow-visible'>

      <h1 className='text-2xl text-white z-50 mb-3 font-bold '>
        About me
      </h1>
        
      <BentoGrid>
            {gridItems.map(({id, title, description, className, img, imgClassName, titleClassName, spareImg}) => (
                <BentoGridItem 
                    id ={id}
                    key={id}
                    title={title}
                    description={description}
                    className={className}
                    img={img}
                    imgClassName={imgClassName}
                    titleClassName={titleClassName}
                    spareImg={spareImg}

                />
            ))}
        </BentoGrid> 
        
    </section>
  )
}

export default Grid