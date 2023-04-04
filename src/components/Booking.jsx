import { neville } from "../assets"

const Booking = () => {
  return (
    <div id="booking" className="flex md:flex-row flex-col mt-2">
        <div className="flex flex-col text-gray-300 items-center justify-center py-5 md:w-[50%] w-[100%]">
            <p className="text-gray-300  font-mich tracking-widest md:text-[4rem] text-[2rem]">BOOKING</p>
            <p className="tracking-widest  ont-mich text-gray-400  md:text-[4rem] text-[2rem]">&</p>
            <p className="text-gray-300  font-mich tracking-widest  md:text-[4rem] text-[2rem]">INQUIRY</p>
        </div>
        <div className="flex flex-col text-gray-300 items-center justify-center py-[100px] md:w-[50%] w-[100%] px-5">
            <img src={neville} alt=''className="w-[10%] "/>
            <form className="flex flex-col items-center justify-center">
                <p className="text-[12px] font-mich tracking-widest py-1  text-center">Reach out to us and we'll get in touch with you.</p>
                <input type='text' placeholder="Email" className="w-full text-[12px]  py-3 mb-3 px-3 rounded-full font-mich"/>
                <input type='text' placeholder="Phone Number"className="w-full text-[12px] py-3 mb-3 px-3 rounded-full font-mich"/>
                <textarea type='text' placeholder="Booking Details" className="w-full text-[12px]  h-[150px] mb-3 px-3 rounded-lg font-mich"/>
                <button className="bg-spotGreen text-gray-700 w-full py-4 font-mich tracking-widest rounded-lg font-bold">SEND</button>
                <p className="text-[12px] font-mich tracking-widest py-1  text-center">By clicking send, you are opting to share the details provided with neville records</p>
            </form>
        </div>
    </div>
  )
}
export default Booking