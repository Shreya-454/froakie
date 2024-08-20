import React from 'react'
import PrimaryHeading from './custom-ui/PrimaryHeading'
import Paragraph from './custom-ui/Paragraph'
import about_bitcoin from '../assets/images/webp/about-bitcoin.webp'
import Cta from './custom-ui/Cta'
import about_dots from '../assets/images/svg/about-dots.svg'

const About = () => {
  return (
    <div className='relative z-[1]  max-md:z-0 md:-mt-16 lg:-mt-28 custom-xl:-mt-44 2xl:-mt-56 overflow-hidden max-md:bg-light-blue max-md:pt-10'>
      <div className="container max-w-[1204px] mx-auto xl:px-3 px-6 pb-[45px] ">
        <PrimaryHeading center className='mb-3'>About Our Froakie </PrimaryHeading>
        <Paragraph className='font-cabin max-w-[791px]' center>Pepe is the most memeable memecoin around the world, it‘s time to make memecoins great again and add some frog beside all dog memecoins.</Paragraph>
      </div>
      <div className='bg-light-blue w-full -mt-20 custom-xl:-mt-4 pt-16 sm:pb-20 pb-10 lg:pb-[133px]'>
          <div className='container max-w-[1204px] mx-auto xl:px-3 px-6 relative z-[1]'>
          <img src={about_dots} alt="about-dots" className='absolute -bottom-[6%] -right-[8%] z-[-1]' />
            <div className="w-full bg-white shadow-box py-6 lg:py-[43px] px-5 lg:px-8 custom-xl:pl-12 xl:pl-[62px] xl:pr-[49px] rounded-[35px] ">
                <div className="flex flex-wrap gap-5 md:gap-7 custom-xl:gap-[60px] items-center max-custom-lg:justify-center">
                    <img src={about_bitcoin} alt="about-bitcoin" className='custom-xl:max-w-[477px]  lg:max-w-[430px] max-w-[380px] w-full' />
                    <div className='custom-xl:max-w-[532px] custom-lg:max-w-[455px] w-full max-custom-lg:flex flex-col items-center'>
                        <div className='mb-4 sm:mb-6 md:mb-8 py-[7px] px-[21px] border border-solid border-bolt-blue rounded-full max-w-[86px]'><span className='font-cabin text-base leading-155 text-dark-grey'>About</span></div>
                        <h3 className='font-cabin text-rich-black text-2xl sm:text-3xl md:text-custom-3xl leading-120 font-medium mb-2 sm:mb-[15px]'>What Froakie is All About</h3>
           <Paragraph className='mb-4 sm:mb-6 md:mb-8 max-custom-lg:text-center'>Come join the pond! Whether you’re launching bubbles or laying out on a lily pad, there’s a little something for everyone here. Hosted on the Ethereum blockchain, Froakie brings water types from all walks of life together <span className='block'></span> As we continue to evolve, community makes our growth possible… Even if that means protecting one another with a flurry of frubbles from time to time. Meanwhile, we’ve always got one finger on the water pulse by keeping our community in the know.<span className='block'></span>
So if you’re ready to hop on over as a Froakie holder, prepare to make a splash. That’s because together, we’re taking one giant leap for amphibians far and wide.</Paragraph>
<Cta>Hop In</Cta>
                    </div>
                </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default About
