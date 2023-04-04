import styles from "./style";
import {  Current,CurrentSingle, Videos, Footer, Navbar, Hero, Tour,Booking, MusicHeader, VideoHead, Music, Playlist, Stream} from "./components";
import {motion as m} from 'framer-motion'
import {AnimatedOnScroll} from "react-animated-css-onscroll";


const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={` ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
       
      </div>
    </div>

    <div className={`bg-primary  ${styles.flexStart}`}>
    <Navbar />
      <m.div initial={{y:'100%'}} animate={{y:'0%'}} transition={{duration:0.95, ease: 'easeOut'}} className={`${styles.boxWidth}`}>
      
        <Hero />
        <CurrentSingle/>
        <Current />
        <MusicHeader/>
        <AnimatedOnScroll animationIn='flipInY'>
        <Music />
        </AnimatedOnScroll>
        <AnimatedOnScroll animationIn='flipInX'>
        <Playlist />
        </AnimatedOnScroll>
        <AnimatedOnScroll animationIn='flipInX'>
        <Stream />
        </AnimatedOnScroll>
        <VideoHead/>
        <Videos />
        <Tour/>
        <Booking/>
        <AnimatedOnScroll animationIn='flipInX'>
        <Footer />
        </AnimatedOnScroll>
      </m.div>
    </div>
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
       
        
      </div>
    </div>
  </div>
);

export default App;