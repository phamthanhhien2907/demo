import logo from "../assets/logo.png"

import bellowVideo from "../assets/bellow_img.png"
import che_do from "../assets/che_do.png"
import { Link, useLocation } from "react-router-dom"
import { CiSearch } from "react-icons/ci";
import { ModeToggle } from "./mode-toggle";
import home_logo from "../assets/Home.png"
import lich_logo from "../assets/Cup.png"
import download_logo from "../assets/download.png"
import hot from "../assets/hot.svg"

const TopBar = () => {
  const path = useLocation()
  return (
    <div className="">
        <div className="relative ">
          {path?.pathname === "/" && (
              <img src={bellowVideo} alt="" className="absolute -z-10 bg-[rgba(16,17,20,.9)]" />
          )}
           
         
           <div className={path.pathname === "/match" || path.pathname === "/calendar" ? "p-12 flex w-full items-center justify-between fixed top-0 overflow-hidden z-50" : "p-8 flex w-full items-center fixed top-0 overflow-hidden z-50"}>
            <div className={path.pathname === "/match" || path.pathname === "/calendar" ? "flex items-center gap-4 flex-2" : "flex items-center gap-4 flex-1"} >
              <Link to="/">
              <img src={logo} alt="logo" className="w-[40px] h-[40px] rounded-lg" /></Link>
              <div className="flex flex-col ">
                <span className="text-white font-medium">JalaLive</span>
                <p className="text-gray-400 font-thin text-[10px]">Truyền phát miễn phí và HD</p>
              </div>
            </div>
            {path.pathname === "/match" || path.pathname === "/calendar" &&  <div className="px-8 flex gap-8 ">
              <Link to="/">
              <div className="flex items-center gap-4 cursor-pointer">
                <img src={home_logo} alt="home" className="w-[23px] h-[23px]" />
                <span className="text-white text-base">Trang chủ</span>
              </div></Link>
             <Link to={`/calendar`}>
             
             <div className="flex items-center gap-4 cursor-pointer hover:translate-x-2 hover:scale-110 hover:transition hover:delay-300 hover:duration-300 hover:ease-in-out">
                <img src={lich_logo} alt="home" className="text-white w-[23px] h-[23px]" />
                <span className="text-white text-base">Lịch thi đấu</span>
              </div></Link>
              <div className="flex items-center gap-4 cursor-pointer relative hover:translate-x-2 hover:scale-110 hover:transition hover:delay-300 hover:duration-300 hover:ease-in-out">
                <img src={download_logo} alt="home" className="text-white w-[23px] h-[23px] " />
                <span className="text-white text-base ">Tải xuống</span>
                <img src={hot} alt="home" className="text-white w-[23px] h-[23px] absolute -top-3 left-20" />
              </div>
            </div>}
            <div className="flex items-center rounded-lg flex-5">
                <input
                    type="text"
                    placeholder="Tìm kiếm..."
                    className="rounded-l-sm p-2 outline-none bg-inherit border border-white  text-white w-2/4"
                  />
                <button className="p-2 border border-white outline-1 rounded-r-sm outline-none bg-[#21212199]">
                  <CiSearch  className="h-6 w-16 text-white outline-none" />
                </button>
            </div>
            <div className={path.pathname === "/match" || path.pathname === "/calendar" ? "flex-2 flex items-center justify-end gap-3" : "flex-3 flex items-center gap-3"}>
                <img src={che_do} alt="che_do" className="w-[30px] h-[30px]" />
                <ModeToggle/>
            </div>
           </div>
           
        </div>
    </div>
  )
}

export default TopBar