import styles from "../style";
import { khaidhero1, khaidhero } from "../assets";


const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col mt-9 ${styles.paddingY}`}>
     
     <h1 id="khaid" className="text-[90px] text-white font-mich z-[10] absolute mt-[110px] ml-[407px] ">KHAID</h1>
     <h1 id="khaid-mobile" className="text-[20px] text-white font-mich z-[10]  absolute mt-[30px] ml-[5px] ">KHAID</h1>
        <img src={khaidhero} alt="billing" className="h-[100%] relative z-[5] md:w-[50%] w-[100%]" />
        
        <img src={khaidhero1} alt="billing" className=" h-[100%] relative z-[5] md:w-[55.8%] w-[100%]" />

       

      {/* <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
       

        {/* gradient start */}
        {/* <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" /> */}
        {/* gradient end */}
      {/* </div>  */}

     
    </section>
  );
};

export default Hero;