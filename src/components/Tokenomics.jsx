import React from 'react'
import PrimaryHeading from './custom-ui/PrimaryHeading'
import Paragraph from './custom-ui/Paragraph'
import Icons from './common/Icons'
import tokenomics_dots from '../assets/images/svg/tokenomics-dots.svg'
import { TOKONOMICS_LIST } from '../utils/helper'

const Tokenomics = () => {
  return (
    <div className='bg-light-blue pb-0 sm:pb-16 lg:pb-[74px]'>
      <div className="container max-w-[1204px] xl:px-3 px-6 mx-auto relative z-10">
        <img src={tokenomics_dots} alt="tokenomics-dots" className='absolute -bottom-[10%] -left-[5%] -z-10 max-sm:hidden' />
        <PrimaryHeading center className='mb-3'>TOKENOMICS</PrimaryHeading>
        <Paragraph center className='max-w-[791px] mb-6 sm:mb-8 lg:mb-12'>Pepe is the most memeable memecoin around the world, it‘s time to make memecoins great again and add some frog beside all dog memecoins.</Paragraph>
        <div className="flex flex-wrap flex-row -mx-3">
            {
                TOKONOMICS_LIST.map((obj,i)=>(
                    <div key={i} className={`lg:w-1/4 sm:w-1/2 w-full px-3 flex max-sm:!justify-center  ${i===2 && "max-lg:!justify-end"} ${i === 0 && "max-lg:!justify-end"} ${i<3 && "max-sm:!mb-6"} ${i<2 && "max-lg:!mb-6"}`}>
                    <div className="w-full bg-off-white rounded-[25px] px-[25px] pt-[25px] pb-10 max-lg:max-w-[283.75px] shadow-box">
                        <h2 className='lg:text-custom-6xl text-custom-5xl font-outfit text-rich-blue font-semibold text-center leading-126 mb-5'>{obj.percentage}%</h2>
                        <Icons icon="dashed-lines" className='w-full'/>
                        <p className='font-outfit text-xl lg:text-2xl font-medium !leading-126 text-fade-grey text-center mt-5'>{obj.title}</p>
                    </div>
                    </div>
                ))
            }
        </div>
      </div>
    </div>
  )
}

export default Tokenomics
