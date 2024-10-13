import { Link } from "react-router-dom"
import demo from "../assets/demo_list.jpg"
import mochi from "../assets/mochi.jpg"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import path from "@/utils/path"

const VideoList = ({match}) => {
  return (
    <div className={match ? "w-full" : "w-11/12 pr-16 "}>
        <p className="text-2xl">Trận đấu hot</p>
       <div className={match ? "grid grid-cols-6 gap-4 py-8" : "grid grid-cols-5 gap-4 py-8"}>
       <Link to={`/${path.MATCH}`}>
       <div className="cursor-pointer flex flex-col items-center gap-4 ">
                <img src={demo} alt="demo" className="w-[278px] hover:scale-110 hover:transition hover:delay-300 hover:duration-300 hover:ease-in-out"  />
              <div className="flex  gap-2">
              <Avatar>
                <AvatarImage src={mochi} alt="mochi" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="flex flex-col gap-2">
                <span className="line-clamp-1">CSyD Dorados de Sinaloa VS Tlaxcala FC</span>
               <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500 line-clamp-1">Bánh mochi</span>
                <span className="text-sm text-gray-500 line-clamp-1">Giải bóng ngoại hạng anh</span>
               </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">11.22K</span>
                <span className="text-sm text-gray-500">Người xem</span>
              </div>
              </div>
              </div>
              
        </div></Link>
        <Link to={`/${path.MATCH}`}>
       <div className="cursor-pointer flex flex-col items-center gap-4 ">
                <img src={demo} alt="demo" className="w-[278px] hover:scale-110 hover:transition hover:delay-300 hover:duration-300 hover:ease-in-out"  />
              <div className="flex  gap-2">
              <Avatar>
                <AvatarImage src={mochi} alt="mochi" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="flex flex-col gap-2">
                <span className="line-clamp-1">CSyD Dorados de Sinaloa VS Tlaxcala FC</span>
               <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500 line-clamp-1">Bánh mochi</span>
                <span className="text-sm text-gray-500 line-clamp-1">Giải bóng ngoại hạng anh</span>
               </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">11.22K</span>
                <span className="text-sm text-gray-500">Người xem</span>
              </div>
              </div>
              </div>
              
        </div></Link>
        <Link to={`/${path.MATCH}`}>
       <div className="cursor-pointer flex flex-col items-center gap-4 ">
                <img src={demo} alt="demo" className="w-[278px] hover:scale-110 hover:transition hover:delay-300 hover:duration-300 hover:ease-in-out"  />
              <div className="flex  gap-2">
              <Avatar>
                <AvatarImage src={mochi} alt="mochi" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="flex flex-col gap-2">
                <span className="line-clamp-1">CSyD Dorados de Sinaloa VS Tlaxcala FC</span>
               <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500 line-clamp-1">Bánh mochi</span>
                <span className="text-sm text-gray-500 line-clamp-1">Giải bóng ngoại hạng anh</span>
               </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">11.22K</span>
                <span className="text-sm text-gray-500">Người xem</span>
              </div>
              </div>
              </div>
              
        </div></Link>
        <Link to={`/${path.MATCH}`}>
       <div className="cursor-pointer flex flex-col items-center gap-4 ">
                <img src={demo} alt="demo" className="w-[278px] hover:scale-110 hover:transition hover:delay-300 hover:duration-300 hover:ease-in-out"  />
              <div className="flex  gap-2">
              <Avatar>
                <AvatarImage src={mochi} alt="mochi" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="flex flex-col gap-2">
                <span className="line-clamp-1">CSyD Dorados de Sinaloa VS Tlaxcala FC</span>
               <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500 line-clamp-1">Bánh mochi</span>
                <span className="text-sm text-gray-500 line-clamp-1">Giải bóng ngoại hạng anh</span>
               </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">11.22K</span>
                <span className="text-sm text-gray-500">Người xem</span>
              </div>
              </div>
              </div>
              
        </div></Link>
        <Link to={`/${path.MATCH}`}>
       <div className="cursor-pointer flex flex-col items-center gap-4 ">
                <img src={demo} alt="demo" className="w-[278px] hover:scale-110 hover:transition hover:delay-300 hover:duration-300 hover:ease-in-out"  />
              <div className="flex  gap-2">
              <Avatar>
                <AvatarImage src={mochi} alt="mochi" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="flex flex-col gap-2">
                <span className="line-clamp-1">CSyD Dorados de Sinaloa VS Tlaxcala FC</span>
               <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500 line-clamp-1">Bánh mochi</span>
                <span className="text-sm text-gray-500 line-clamp-1">Giải bóng ngoại hạng anh</span>
               </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">11.22K</span>
                <span className="text-sm text-gray-500">Người xem</span>
              </div>
              </div>
              </div>
              
        </div></Link>
        <Link to={`/${path.MATCH}`}>
       <div className="cursor-pointer flex flex-col items-center gap-4 ">
                <img src={demo} alt="demo" className="w-[278px] hover:scale-110 hover:transition hover:delay-300 hover:duration-300 hover:ease-in-out"  />
              <div className="flex  gap-2">
              <Avatar>
                <AvatarImage src={mochi} alt="mochi" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="flex flex-col gap-2">
                <span className="line-clamp-1">CSyD Dorados de Sinaloa VS Tlaxcala FC</span>
               <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500 line-clamp-1">Bánh mochi</span>
                <span className="text-sm text-gray-500 line-clamp-1">Giải bóng ngoại hạng anh</span>
               </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">11.22K</span>
                <span className="text-sm text-gray-500">Người xem</span>
              </div>
              </div>
              </div>
              
        </div></Link>
        <Link to={`/${path.MATCH}`}>
       <div className="cursor-pointer flex flex-col items-center gap-4 ">
                <img src={demo} alt="demo" className="w-[278px] hover:scale-110 hover:transition hover:delay-300 hover:duration-300 hover:ease-in-out"  />
              <div className="flex  gap-2">
              <Avatar>
                <AvatarImage src={mochi} alt="mochi" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="flex flex-col gap-2">
                <span className="line-clamp-1">CSyD Dorados de Sinaloa VS Tlaxcala FC</span>
               <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500 line-clamp-1">Bánh mochi</span>
                <span className="text-sm text-gray-500 line-clamp-1">Giải bóng ngoại hạng anh</span>
               </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">11.22K</span>
                <span className="text-sm text-gray-500">Người xem</span>
              </div>
              </div>
              </div>
              
        </div></Link>
       </div>
        
    </div>
  )
}

export default VideoList