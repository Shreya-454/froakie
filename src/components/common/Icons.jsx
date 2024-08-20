import React from 'react'

const Icons = ({ icon, className = '', ...props }) => {
  const iconsList = {
    'medium-icon':(<svg className='max-sm:w-7 max-sm:h-4' width="42" height="24" viewBox="0 0 42 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M23.6245 11.9999C23.6245 18.4266 18.4501 23.6364 12.0671 23.6364C5.68423 23.6364 0.509766 18.4266 0.509766 11.9999C0.509766 5.57314 5.68413 0.363281 12.0671 0.363281C18.45 0.363281 23.6245 5.57314 23.6245 11.9999Z" fill="#2C9CF1"/>
        <path d="M36.3033 12.0007C36.3033 18.0504 33.7162 22.9545 30.5247 22.9545C27.3333 22.9545 24.7461 18.0504 24.7461 12.0007C24.7461 5.95103 27.3333 1.04688 30.5247 1.04688C33.7162 1.04688 36.3033 5.95113 36.3033 12.0007Z" fill="#2C9CF1"/>
        <path d="M41.4886 12.0017C41.4886 17.4219 40.5786 21.8159 39.4562 21.8159C38.3337 21.8159 37.4238 17.4219 37.4238 12.0017C37.4238 6.58146 38.3337 2.1875 39.4562 2.1875C40.5787 2.1875 41.4886 6.58146 41.4886 12.0017Z" fill="#2C9CF1"/>
        </svg>
        ),
        'telegram-icon':(<svg className='max-sm:w-7 max-sm:h-6' width="42" height="38" viewBox="0 0 42 38" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M40.8269 1.09236C40.7328 1.01527 40.614 0.972656 40.4921 0.972656C40.4231 0.972656 40.3556 0.986051 40.2916 1.01242L1.30501 17.0657C1.11475 17.144 0.986814 17.3275 0.978904 17.5331C0.970993 17.7387 1.08458 17.9314 1.26831 18.0241L11.2315 23.0513L29.3016 12.9703C29.3816 12.9255 29.4677 12.9029 29.558 12.9029C29.725 12.9029 29.8786 12.9792 29.9792 13.112C30.1373 13.3207 30.1171 13.6176 29.9323 13.8028L18.1388 25.6241L16.6234 35.0884L16.6327 35.0791C16.6407 35.0612 16.645 35.0558 16.6453 35.0665L22.791 28.9209L33.2928 36.9176C33.3841 36.9871 33.4976 37.0254 33.6124 37.0254C33.6765 37.0254 33.7394 37.0139 33.7995 36.991C33.9708 36.9259 34.0943 36.7796 34.1296 36.5998L41.0097 1.60167C41.0472 1.41088 40.9772 1.21576 40.8269 1.09236Z" fill="#2C9CF1"/>
            </svg>
            ),
            'twitter-icon':(<svg className='max-sm:size-10' width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_1_690)">
                <path d="M28.8048 26.0795L40.9568 43.4611H35.9696L26.0533 29.2777V29.2768L24.5975 27.1947L13.0137 10.625H18.0009L27.349 23.9974L28.8048 26.0795Z" fill="white"/>
                <path d="M48.1652 0H5.83482C2.61242 0 0 2.61242 0 5.83482V48.1652C0 51.3876 2.61242 54 5.83482 54H48.1652C51.3876 54 54 51.3876 54 48.1652V5.83482C54 2.61242 51.3876 0 48.1652 0ZM34.4429 45.7931L24.4083 31.1888L11.8448 45.7931H8.59775L22.9665 29.0913L8.59775 8.17922H19.5571L29.0592 22.0084L40.9559 8.17922H44.203L30.5014 24.1064H30.5005L45.4022 45.7931H34.4429Z" fill="white"/>
                </g>
                <defs>
                <clipPath id="clip0_1_690">
                <rect width="54" height="54" fill="white"/>
                </clipPath>
                </defs>
                </svg>
                ),
                'button-arrow':(<svg  width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.4297 5.92969L20.4997 11.9997L14.4297 18.0697" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" className='group-hover:stroke-dark-blue duration-300'/>
                    <path d="M3.5 12H20.33" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" className='group-hover:stroke-dark-blue duration-300'/>
                    </svg>
                    ),
                    'circle-arrow':(
                      <svg  width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0_1_116)">
<path className='group-hover:fill-white duration-300' d="M19.5001 15.4998H17.5001V8.9098L5.91006 20.4998L4.50006 19.0898L16.0901 7.4998H9.50006V5.4998H19.5001V15.4998Z" fill="#2194E8"/>
</g>
<defs>
<clipPath id="clip0_1_116">
<rect className='group-hover:fill-white duration-300' width="24" height="24" fill="white" transform="matrix(1 0 0 -1 0.5 24.5)"/>
</clipPath>
</defs>
</svg>

                    ),
                    'dashed-lines':(
                      <svg className='w-full' width="234" height="2" viewBox="0 0 234 2" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.2" d="M0 1H233.75" stroke="black" strokeDasharray="5 5"/>
</svg>

                    )
}
return icon && iconsList[icon]
}

export default Icons