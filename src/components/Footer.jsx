import React from 'react'
import PrimaryHeading from './custom-ui/PrimaryHeading'
import { FOOTER_LINK_LIST, SOCIAL_ICONS } from '../utils/helper'

const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <div className='bg-cloud pt-16 md:pt-[95px] bg-cover bg-center bg-no-repeat bg-light-blue sm:pb-20 pb-10 md:pb-[99px]'>
      <div className="container max-w-[1204px] xl:px-3 px-6 mx-auto">
        <div className="w-full bg-foot bg-cover bg-no-repeat bg-center pt-20 pb-[183px]">
<PrimaryHeading className='text-white mb-3' center>Contact</PrimaryHeading>
<p className='font-cabin text-lg text-white !leading-normal max-w-[766px] mx-auto text-center mb-8'>Pepe is the most memeable memecoin around the world, it‘s time to make memecoins great again and add some frog beside all dog memecoins.</p>
<div className='flex gap-2 justify-center'>
    {
    SOCIAL_ICONS.map((item,i)=>(
        <a target='blank' rel="noopener norefferer" href={item.link}>
<div className={`sm:size-[54px] size-10 bg-white flex justify-center items-center rounded-md ${i === 2 && "!bg-transparent"}`}>{item.icon}</div>
        </a>
    ))}
</div>
        </div>
        <div className='w-full md:flex justify-between items-center max-md:-mt-20'>
    <div className='flex gap-5 sm:gap-10 items-center max-md:w-full max-md:justify-center max-md:mb-2 max-sm:flex-wrap'>
        {FOOTER_LINK_LIST.map((obj,i)=>(
            <a key={i} href={obj.url} className='font-jost text-rich-black text-sm font-semibold leading-144'>{obj.link}</a>
        ))}
        
    </div>
    <div className="max-md:w-full max-md:flex justify-center">
        <p className='font-jost text-rich-black text-sm font-semibold leading-144 max-md:text-center'>© 2000-{currentYear}, All Rights Reserved</p>
    </div>
</div>
      </div>
    </div>
  )
}

export default Footer
