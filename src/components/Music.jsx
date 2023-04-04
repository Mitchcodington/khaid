import { apple, bill, front, google, track } from "../assets";
import styles, { layout } from "../style";

const Music = () => (
  <section id="product" className={` ${layout.sectionReverse} overflow-hidden `}>
  
    <div className='w-full'>
      <img src={front} alt="billing" className="w-[100%] h-[100%] relative " />
    </div>

    <div className='w-full'>
    <img src={track} alt="billing" className="w-[100%] h-[100%] relative " />
    </div>
  </section>
);

export default Music;