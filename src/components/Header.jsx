import React from 'react'
import { SOCIAL_ICONS } from '../utils/helper'
import Cta from './custom-ui/Cta'
import hero_frog from '../assets/images/webp/head-frog.webp'
import NavBar from './common/NavBar'
import hero_clouds from '../assets/images/webp/hero-clouds.webp'

const Header = () => {
  return (
    <div className='bg-hero md:min-h-[811px] lg:min-h-[900px] custom-xl:min-h-[977px] xl:min-h-[1065px] custom-2xl:min-h-[1110px] 2xl:min-h-[1170px] 3xl:min-h-[1229px] bg-cover bg-center bg-no-repeat pt-7 relative z-10'>
        <NavBar/>
      <div className="container max-w-[1204px] px-6 xl:px-3 mx-auto md:pt-9 ">
        <div className="flex flex-row flex-wrap -mx-3 items-center">
<div className="xl:w-1/2 md:w-7/12 w-full px-3 max-md:flex flex-col items-center max-md:py-6">
<div className="max-w-[214px] w-full rounded-full p-[5px] flex gap-2.5 items-center bg-blue mb-3">
    <span className=' text-white font-cabin text-xs font-bold bg-sky py-2 px-5 rounded-full !leading-121'>Coin</span>
    <p className='sm:text-sm text-xs text-white font-cabin !leading-normal '># Second_Chance</p>
</div>
<h1 className= ' text-custom-4xl sm:text-custom-5xl lg:text-custom-6xl text-white font-cabin font-bold leading-130 mb-2 sm:mb-3'>$Froakie</h1>
<p className='font-cabin text-white text-base md:text-lg !leading-normal mb-2 sm:mb-3 max-md:text-center'>Froakie Coin, fully decentralized version, that‘s how crypto should be.</p>
    <p className='font-cabin text-white text-base md:text-lg !leading-normal mb-4 sm:mb-6 md:mb-8 max-md:text-center'>CA: 0xf940400F89B8eA896b67110a0D<span className='lg:block max-xs:block'></span>CE492FF6326b10</p>
<div className='flex gap-2 mb-4 sm:mb-6 md:mb-8'>{
    SOCIAL_ICONS.map((item,i)=>(
        <a href={item.link}>
<div className={`sm:size-[54px] size-10 bg-white flex justify-center items-center rounded-md ${i === 2 && "!bg-transparent"}`}>{item.icon}</div>
        </a>
    ))}
</div>
<Cta className='!gap-1.5'>
Get started <span></span>
</Cta>
</div>
<div className="xl:w-1/2 md:w-5/12 w-full px-3 flex lg:justify-end justify-center">
<img src={hero_frog} alt="hero-frog" className='max-w-[536px] w-full' /></div>
        </div>
      </div>
      <img src={hero_clouds} alt="hero-clouds" className='absolute left-0 right-0 bottom-[-2%] custom-xl:-bottom-1 -z-20' />
    </div>
  )
}

export default Header
