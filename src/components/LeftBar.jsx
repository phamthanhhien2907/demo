import home_logo from "../assets/Home.png"
import lich_logo from "../assets/Cup.png"
import download_logo from "../assets/download.png"
import hot from "../assets/hot.svg"
import player from "../assets/player.png"
import qrcode from "../assets/qrcode.png"
import { Link } from "react-router-dom"
import path from "@/utils/path"

const LeftBar = () => {
  return (
      <div className="">
        <div className="px-8 flex flex-col gap-8 ">
      <div className="flex items-center gap-4 cursor-pointer">
        <img src={home_logo} alt="home" className="w-[23px] h-[23px]" />
        <span className="text-white text-base">Trang chủ</span>
      </div>
      <Link to={`/${path.CALENDAR}`}>
      <div className="flex items-center gap-4 cursor-pointer hover:translate-x-2 hover:scale-110 hover:transition hover:delay-300 hover:duration-300 hover:ease-in-out">
        <img src={lich_logo} alt="home" className="text-white w-[23px] h-[23px]" />
        <span className="text-white text-base">Lịch thi đấu</span>
      </div></Link>
      <div className="flex items-center gap-4 cursor-pointer relative hover:translate-x-2 hover:scale-110 hover:transition hover:delay-300 hover:duration-300 hover:ease-in-out">
        <img src={download_logo} alt="home" className="text-white w-[23px] h-[23px] " />
        <span className="text-white text-base ">Tải xuống</span>
        <img src={hot} alt="home" className="text-white w-[23px] h-[23px] absolute -top-3 left-20" />
      </div>
    </div>
      <div className="relative -bottom-80 flex flex-col justify-center left-4 ">
      <img src={player} alt="player" className="absolute -z-40 -top-28 w-[170px] left-8" />

        <div className="h-fit bg-[#202020] w-[210px] rounded-md flex flex-col justify-center items-center gap-4 p-4 ">
          <span className="text-xs text-center">Quét mã để tải xuống ứng dụng và tương tác với chủ nhà, thưởng thức màn hình lớn HD, xem bản ghi, nhận tín dụng miễn phí. Hãy hành động ngay lập tức!</span>
          <img src={qrcode} alt="qrcode" className="w-[90px] h-[90px]" />
          <span className="text-xs">Quét mã QR để tải ứng dụng</span>
        </div>

      </div>
      </div>
  )
}

export default LeftBar