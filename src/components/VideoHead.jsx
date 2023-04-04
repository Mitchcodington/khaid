import {AnimatedOnScroll} from "react-animated-css-onscroll";

const VideoHead = () => {
  return (
    <div id="video">
        <AnimatedOnScroll animationIn="bounceInLeft">
          <h1 className="text-center text-gray-300 z-50  font-mich bg-inherit md:text-[100px] text-[50px]">Videos</h1>
          </AnimatedOnScroll>
    </div>
  )
}
export default VideoHead