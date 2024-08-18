import React from 'react'
import { Link } from 'react-router-dom'
import Icons from '../common/Icons'

const Cta = ({
  children,
  className = '',
  header,
  url,
  ...props
}) => {
  return url ? (
    <Link
      to={url}
      {...props}
      className={`${className}  flex items-center gap-1.5 py-[15px] px-6 font-cabin text-white border-transparent hover:border-dark-blue border border-solid hover:!text-dark-blue font-semibold text-base text-center bg-dark-blue rounded-[14px] leading-normal relative after:-z-10 z-10 overflow-hidden after:duration-300 after:absolute after:bg-white after:top-0 after:bottom-0 after:left-0 after:right-[200%] hover:after:right-0 duration-300 group`}>
      {children}  <span><Icons icon="button-arrow"/></span>
    </Link>
  ) : (
    <button
      {...props}
      className={`${className} flex items-center gap-2.5  py-[15px] px-6 font-cabin text-white border-transparent hover:border-dark-blue border border-solid hover:!text-dark-blue font-semibold text-base bg-dark-blue rounded-[14px] text-center leading-normal relative after:-z-10 z-10 overflow-hidden after:duration-300 after:absolute after:bg-white after:top-0 after:bottom-0 after:left-0 after:right-[200%] hover:after:right-0 duration-300 group`}>
      {children} <span className='group-hover:translate-x-3 duration-300'><Icons icon="button-arrow"/></span>
    </button>
  )
}

export default Cta