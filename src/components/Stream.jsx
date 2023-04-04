
import {spotify,boom,audio,youtube,apple,deezer,shazam} from "../assets";


const Stream = () => {
  return (
    <section>
        <div className='stream-platform'>
        <p id='stream' className="font-mich text-gray-300">STREAM KHAID</p>
        <div className='platform'>
        <p className='a-p-stream'><a href='https://open.spotify.com/artist/2mM6BxFQCd6BHzW4W7VhQP' target='_blank' rel="noreferrer"><img src={spotify} alt='' className='music-platform'/></a></p>
        <p className='a-p-stream'><a href='https://www.boomplay.com/artists/39263439' target='_blank' rel="noreferrer"><img src={boom} alt='' className='music-platform'/></a></p>
        <p className='a-p-stream'><a href='https://music.youtube.com/channel/UCPrqyJ4-l2r2YWWXN7ifMEQ' target='_blank' rel="noreferrer"><img src={youtube} alt='' className='music-platform'/></a></p>
        <p className='a-p-stream'><a href='https://www.shazam.com/gb/artist/khaid/1603818444' target='_blank' rel="noreferrer"><img src={shazam} alt='' className='music-platform'/></a></p>
        <p className='a-p-stream'><a href='https://music.apple.com/ng/artist/khaid/1603818444' target='_blank' rel="noreferrer"><img src={apple} alt='' className='music-platform'/></a></p>
        <p className='a-p-stream'><a href='https://audiomack.com/khaid' target='_blank' rel="noreferrer"><img src={audio} alt='' className='music-platform'/></a></p>
        <p className='a-p-stream'><a href='https://www.deezer.com/en/artist/156680712' target='_blank' rel="noreferrer"><img src={deezer} alt='' className='music-platform'/></a></p>
        </div>
        </div>
    </section>
  )
}
export default Stream