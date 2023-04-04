import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';import { RxDotFilled } from 'react-icons/rx';
import {motion as m} from 'framer-motion'
function Videos() {
  
  return (
    <m.div initial={{y:'100%'}} animate={{y:'0%'}} transition={{duration:0.95, ease: 'easeOut'}}>
       <div id='video' className="flex flex-row flex-wrap justify-between">
    <iframe id='iframe-home' className='  w-[49%]' height="300" src="https://www.youtube.com/embed/drtnKP_erUE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    <iframe id='iframe-home' className='  w-[49%] ' height="300" src="https://www.youtube.com/embed/nHUGKIChwTI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    <iframe id='iframe-home' className='  mt-4 w-[49%]'  height="300" src="https://www.youtube.com/embed/ChetpZ6GJ_s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    <iframe id='iframe-home' className=' mt-4  w-[49%]'  height="300" src="https://www.youtube.com/embed/lm7vdYkpOZs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    </m.div>
   
      
  )  
}

export default Videos;