import {  audio, boom, carryme, shazam, spotify, youtube,apple,deezer, itunes, tidal } from "../assets";

import styles, { layout } from "../style";



 

export default function Current()  {
  return(
  <section  className='flex md:flex-row flex-col mt-[-65px]'>
   
    <div className='flex flex-col items-center justify-center bg-carry py-12 px-2 md:w-[50%] w-[100%]'>
    <p className="text-gray-200 text-[18px] font-mich tracking-widest mt-7">CARRY ME GO</p>
    <p className="text-gray-300 text-[10px] font-mich tracking-widest mt-1">Out on all major music platforms</p>
    <img src={carryme} alt='' className="w-[30%] mt-2 rounded-lg"/>
    <button className="text-black rounded-full text-[12px] font-bold font-mich py-4 bg-spotGreen w-[40%] tracking-widest  mt-3"><a href="https://platoon.lnk.to/carry-me-go" target='_blank' rel="noreferrer" > STREAM</a></button>
    </div>

    <div className="md:w-[50%] w-[100%] " >
    <iframe id="iframe-home" title='all over'  className=' mt-4  w-[100%]'  height="420"src="https://www.youtube.com/embed/drtnKP_erUE"></iframe>
   
    </div>
  </section>
)
};

