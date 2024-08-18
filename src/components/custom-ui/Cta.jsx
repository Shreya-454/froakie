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
      className={`${className}  flex items-center gap-1.5 py-[15px] px-6 font-cabin text-white font-semibold text-base text-center bg-dark-blue rounded-[14px] leading-normal`}>
      {children}  <span><Icons icon="button-arrow"/></span>
    </Link>
  ) : (
    <button
      {...props}
      className={`${className} flex items-center gap-2.5  py-[15px] px-6 font-cabin text-white font-semibold text-base bg-dark-blue rounded-[14px] text-center leading-normal`}>
      {children} <span><Icons icon="button-arrow"/></span>
    </button>
  )
}

export default Cta