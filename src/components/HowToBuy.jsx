import React from 'react'
import PrimaryHeading from './custom-ui/PrimaryHeading'
import buy_phone from '../assets/images/webp/buy-phone.webp'
import Icons from './common/Icons'
import Paragraph from './custom-ui/Paragraph'
import { BUY_CARDS_LIST } from '../utils/helper'

const HowToBuy = () => {
  return (
    <div className='bg-light-blue pb-10 md:pb-20 lg:pb-[133px]'>
      <div className='container max-w-[1204px] xl:px-3 px-6 mx-auto'>
          <PrimaryHeading center className='lg:mb-[89px] md:mb-16 sm:mb-10 mb-6'>
          How To Buy
          </PrimaryHeading>
          <div className="custom-lg:flex gap-8 lg:gap-14 custom-xl:gap-[73px] items-center">
            <div className='max-custom-lg:flex justify-center relative'>
              <div className='sm:size-24 size-16 rounded-full bg-rich-blue absolute -left-5 sm:left-0 top-6 opacity-20'></div>
              <div className='sm:size-16 size-10 rounded-full bg-rich-blue opacity-20 absolute right-2 sm:right-4 top-10 sm:top-14'></div>
              <div className='sm:size-8 size-5 rounded-full bg-rich-blue opacity-20 bottom-10 sm:bottom-16 left-5 sm:left-8 absolute'></div>
              <img src={buy_phone} alt="buy-phone" className='lg:max-w-[480px] max-w-[430px] custom-xl:max-w-[577px] max-sm:w-full max-h-[648.74px]' /></div>
            <div className='max-custom-lg:flex justify-center'>
              <div className="md:max-w-[530px] w-full">
                  {BUY_CARDS_LIST.map((item,i) => (
                      <div className={`w-full pb-6 border-b border-solid group border-light-grey mb-[15px] ${i ===3 && "!mb-0"}`}>
                      <div className='flex justify-between items-center mb-6'>
                        <p className='font-cabin text-rich-black text-xl font-bold leading-160 duration-300 group-hover:text-rich-blue'>{item.title}</p>
                        <div className='size-[55px] border border-solid border-rich-blue bg-transparent rounded-full group-hover:bg-dark-blue group-hover:border-dark-blue duration-300 flex justify-center items-center'>
                          <Icons icon="circle-arrow"/>
                        </div>
                    </div>
                    <Paragraph>{item.description}</Paragraph>
                    </div>
                    ))
                  }
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default HowToBuy
