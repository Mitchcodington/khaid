import {AnimatedOnScroll} from "react-animated-css-onscroll";

const CurrentSingle = () => {
  return (
    <div >
        <AnimatedOnScroll animationIn="bounceInLeft">
          <h1 className="text-center text-gray-300 mt-0 text-[100px] font-mich bg-carry md:text-[100px] text-[50px]">Current Single</h1>
          </AnimatedOnScroll>
    </div>
  )
}
export default CurrentSingle