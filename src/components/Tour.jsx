import { trim } from "../assets";

function Tour() {
  
  return (
 
    <div id="tour" className="flex md:flex-row flex-col">
    
        <div>
       
        <div  className=" absolute w-[100%]">
            <p className="text-center tracking-widest text-gray-300 font-mich flex flex-col items-center justify-center md:text-[6rem] text-[3rem]  sm: text-[3rem] text-[1rem] sm: mt-9 mt-[-30px]">
            <span className="sm: mt-[40px] mt-[-20px] sm:text-[6rem] text-[1rem]">TOUR</span><span className="sm:text-[6rem] text-[2rem]" >BOARD</span></p>
            <p className="text-center text-gray-400 font-mich md:mt-9 mt-2">Khaid coming to a city near you</p>
            <p className="text-center text-gray-400 font-mich tracking-widest  md:text-[4rem] text-[1rem] md:mt-9 mt-0 py-9 p-0">WATCH THIS SPACE</p>
           
            </div>
            <video src={trim} autoPlay  loop muted className="h-[100%] w-[100%]"/>
            </div>
        
        
        
       

       
        
      
   
    </div>
   
      
  )  
}

export default Tour;