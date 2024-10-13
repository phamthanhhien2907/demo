import { Link } from "react-router-dom"
import demo from "../assets/demo_list.jpg"
import mochi from "../assets/mochi.jpg"
import host from "../assets/host.gif"

import HomeIcon from '@mui/icons-material/Home';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import path from "@/utils/path"

const Card = ({match}) => {
  return (
    <div className={match ? "w-full" : "w-full px-4 "}>
        <p className="text-xl font-semibold">Xu hướng</p>
       <div className={match ? "grid grid-cols-2 gap-4 py-4" : "grid grid-cols-2 gap-4 py-4"}>
       <Link to={`/${path.MATCH}`}>
       <div className="cursor-pointer flex flex-col items-center gap-4 relative">
                <img src={demo} alt="demo" className="w-[278px] hover:scale-110 hover:transition hover:delay-300 hover:duration-300 hover:ease-in-out"  />
                <div className="absolute flex items-center justify-between top-[45%] w-full px-1">
                  <span className="text-white font-semibold text-xs">Bé kim</span>
                  <img src={host} alt="host" className="w-[47px] h-[17px]" />
                </div>
              <div className="flex gap-2">
              <div className="flex flex-col gap-2">
                <span className="line-clamp-2">CSyD Dorados de Sinaloa VS Tlaxcala FC</span>
               <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500 line-clamp-1">Giải bóng ngoại hạng anh</span>
                  <div className="flex items-center gap-2">
                    <HomeIcon/>
                    <span className="text-sm text-gray-500">11.22K</span>
                  
                </div>
               </div>
             
              </div>
              </div>
              
        </div></Link>
        <Link to={`/${path.MATCH}`}>
       <div className="cursor-pointer flex flex-col items-center gap-4 relative">
                <img src={demo} alt="demo" className="w-[278px] hover:scale-110 hover:transition hover:delay-300 hover:duration-300 hover:ease-in-out"  />
                <div className="absolute flex items-center justify-between top-[45%] w-full px-1">
                  <span className="text-white font-semibold text-xs">Bé kim</span>
                  <img src={host} alt="host" className="w-[47px] h-[17px]" />
                </div>
              <div className="flex gap-2">
              <div className="flex flex-col gap-2">
                <span className="line-clamp-2">CSyD Dorados de Sinaloa VS Tlaxcala FC</span>
               <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500 line-clamp-1">Giải bóng ngoại hạng anh</span>
                  <div className="flex items-center gap-2">
                    <HomeIcon/>
                    <span className="text-sm text-gray-500">11.22K</span>
                  
                </div>
               </div>
             
              </div>
              </div>
              
        </div></Link>
        <Link to={`/${path.MATCH}`}>
       <div className="cursor-pointer flex flex-col items-center gap-4 relative">
                <img src={demo} alt="demo" className="w-[278px] hover:scale-110 hover:transition hover:delay-300 hover:duration-300 hover:ease-in-out"  />
                <div className="absolute flex items-center justify-between top-[45%] w-full px-1">
                  <span className="text-white font-semibold text-xs">Bé kim</span>
                  <img src={host} alt="host" className="w-[47px] h-[17px]" />
                </div>
              <div className="flex gap-2">
              <div className="flex flex-col gap-2">
                <span className="line-clamp-2">CSyD Dorados de Sinaloa VS Tlaxcala FC</span>
               <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500 line-clamp-1">Giải bóng ngoại hạng anh</span>
                  <div className="flex items-center gap-2">
                    <HomeIcon/>
                    <span className="text-sm text-gray-500">11.22K</span>
                  
                </div>
               </div>
             
              </div>
              </div>
              
        </div></Link>
        <Link to={`/${path.MATCH}`}>
       <div className="cursor-pointer flex flex-col items-center gap-4 relative">
                <img src={demo} alt="demo" className="w-[278px] hover:scale-110 hover:transition hover:delay-300 hover:duration-300 hover:ease-in-out"  />
                <div className="absolute flex items-center justify-between top-[45%] w-full px-1">
                  <span className="text-white font-semibold text-xs">Bé kim</span>
                  <img src={host} alt="host" className="w-[47px] h-[17px]" />
                </div>
              <div className="flex gap-2">
              <div className="flex flex-col gap-2">
                <span className="line-clamp-2">CSyD Dorados de Sinaloa VS Tlaxcala FC</span>
               <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500 line-clamp-1">Giải bóng ngoại hạng anh</span>
                  <div className="flex items-center gap-2">
                    <HomeIcon/>
                    <span className="text-sm text-gray-500">11.22K</span>
                  
                </div>
               </div>
             
              </div>
              </div>
              
        </div></Link>
        <Link to={`/${path.MATCH}`}>
       <div className="cursor-pointer flex flex-col items-center gap-4 relative">
                <img src={demo} alt="demo" className="w-[278px] hover:scale-110 hover:transition hover:delay-300 hover:duration-300 hover:ease-in-out"  />
                <div className="absolute flex items-center justify-between top-[45%] w-full px-1">
                  <span className="text-white font-semibold text-xs">Bé kim</span>
                  <img src={host} alt="host" className="w-[47px] h-[17px]" />
                </div>
              <div className="flex gap-2">
              <div className="flex flex-col gap-2">
                <span className="line-clamp-2">CSyD Dorados de Sinaloa VS Tlaxcala FC</span>
               <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500 line-clamp-1">Giải bóng ngoại hạng anh</span>
                  <div className="flex items-center gap-2">
                    <HomeIcon/>
                    <span className="text-sm text-gray-500">11.22K</span>
                  
                </div>
               </div>
             
              </div>
              </div>
              
        </div></Link>
        <Link to={`/${path.MATCH}`}>
       <div className="cursor-pointer flex flex-col items-center gap-4 relative">
                <img src={demo} alt="demo" className="w-[278px] hover:scale-110 hover:transition hover:delay-300 hover:duration-300 hover:ease-in-out"  />
                <div className="absolute flex items-center justify-between top-[45%] w-full px-1">
                  <span className="text-white font-semibold text-xs">Bé kim</span>
                  <img src={host} alt="host" className="w-[47px] h-[17px]" />
                </div>
              <div className="flex gap-2">
              <div className="flex flex-col gap-2">
                <span className="line-clamp-2">CSyD Dorados de Sinaloa VS Tlaxcala FC</span>
               <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500 line-clamp-1">Giải bóng ngoại hạng anh</span>
                  <div className="flex items-center gap-2">
                    <HomeIcon/>
                    <span className="text-sm text-gray-500">11.22K</span>
                  
                </div>
               </div>
             
              </div>
              </div>
              
        </div></Link>
       
        </div>
        <div className="pb-32 pt-4 flex w-full items-center justify-center">
          <h3 className="text-sm text-center ">Đang cập nhập thêm video mới</h3>
        </div>
    </div>
  )
}

export default Card