import styles from "../style";
import { logo, neville } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => (
  <section id="follow" className="w-full border">
    
  <p className="text-white text-center text-[12px] font-mich tracking-widest border p-4">Stay up to date with the latest from Khaid.</p>
  <div className="flex items-center justify-between w-full md:flex-row flex-col px-9 ">
     <div className="flex flex-row items-center justify-between  px-4 py-7 md:w-[39%] w-[100%]">
      <div className="flex flex-col items-center justify-center text-white ">
        <p className="font-mich md:text-[11px] text-[7px]"><a href="https://web.facebook.com/khaidxr/?_rdc=1&_rdr" target='_blank' rel="noreferrer">FACEBOOK</a></p>
        <p className="font-mich mt-4 md:text-[11px] text-[7px]"><a href="https://twitter.com/khaidxr?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target='_blank' rel="noreferrer">TWITTER</a></p>
        
      </div>
      <div className="flex flex-col items-center justify-center text-white">
        <p className="font-mich md:text-[11px] text-[7px]"><a href="https://www.tiktok.com/@khaidxr" target='_blank' rel="noreferrer">TIKTOK</a></p>
        <p className="font-mich mt-4 md:text-[11px] text-[7px]"><a href="https://www.instagram.com/khaidxr/?hl=en" target='_blank' rel="noreferrer">INSTAGRAM</a> </p>
       
      </div>
      <div className="flex flex-col items-center justify-center text-white">
        <p className="font-mich md:text-[11px] text-[7px]"><a href="https://www.youtube.com/channel/UCMf0Pbiqx_igxy0xQXvtBhg" target='_blank' rel="noreferrer">YOUTUBE</a></p>
        <p className="font-mich mt-4 md:text-[11px] text-[7px]"><a href="https://soundcloud.com/khaid-music" target='_blank' rel="noreferrer">SOUNDCLOUD</a></p>
       
      </div>
    </div> 
    <div className="flex flex-col text-white items-center justify-center  px-4 py-7  md:w-[39%] w-[100%]">
      <p className="text-center  mt-[-9px] font-mich md:text-[11px] text-[11px]">Join Khaid Newsletter</p>
      <div className="flex flex-row border rounded-full bg-spotGreen">
      <input type='text' placeholder="Email" className="rounded-full px-2 md:w-full w-[70%]"/>
      <button className="px-2 font-mich text-black font-bold">JOIN</button>
      </div>
     
    </div>
    <div className="flex flex-col text-white  items-center justify-center py-2  px-4  md:w-[39%] w-[100%]">
      <img src={neville} alt=''className="w-[8%]"/>
      <p className="text-[8px] font-mich tracking-widest text-center">© 2023 Neville records. All Rights Reserved.</p>
      <p className="w-[90%]  text-[8px] font-mich tracking-widest text-center">You're free to unsubscribe to Khaid newsletter anytime by clicking the unsubscribe link in the email. </p>
      <p className="w-[90%]  text-[8px] font-mich tracking-widest text-center">Designed and built by<span className='mitchell'><a href='https://mitchellamewieye.info/' target='_blank' rel="noreferrer"> Mitchell</a></span> </p>
    </div>
  </div>
  </section>
);

export default Footer;