import { Link } from "react-router-dom"
import demo from "../assets/demo_list.jpg"
import mochi from "../assets/mochi.jpg"
import host from "../assets/host.gif"
import hot_live from "../assets/hot-live.webp"
import "video-react/dist/video-react.css";
import nga from "../assets/nga.png"
import japan from "../assets/japan.jpg"
import none2 from "../assets/none2.webp"
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
        {/* <p className="text-xl font-semibold">Xu hướng</p> */}
        <img src={hot_live} alt="hot_live" className="w-[183px] h-[47px]" />
       <div className={match ? "grid grid-cols-2 gap-4 py-4" : "grid grid-cols-2 gap-4 py-4"}>
       {/* <Link to={`/${path.MATCH}`}>
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
              
        </div></Link> */}
        <Link to={`/${path.MATCH}`}>
           <div className=" hover:scale-110 hover:transition hover:delay-300 hover:duration-300 hover:ease-in-out bg-[#e8f0c6] p-2 cursor-pointer rounded-lg  border-yellow-500 border-2 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <div className="flex flex-col justify-center gap-1">
                  <span className="font-semibold text-xs line-clamp-1">Canadian Soccer League</span>
                  <div className="flex items-center gap-1 text-[10px] text-gray-500 font-semibold">
                    <span>14-10-2024</span>
                    <span>04:00:00</span>
                  </div>
                </div>
                <span className="text-red-500 font-semibold text-xs">Live</span>
                
              </div>
              <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-2 items-center w-[70px]">
                    <img src={japan} alt="nga" className="w-[35px] h-[35px] object-contain rounded-full" />
                    <span className="text-[10px] font-semibold line-clamp-1 break-words w-full text-center">JPN League2</span>
                  </div>
                  <span className="text-sm font-semibold">
                    1 : 1
                  </span>
                  <div className="flex flex-col gap-2 items-center w-14">
                    <img src={nga} alt="nga" className="w-[35px] h-[35px] object-contain rounded-full" />
                    <span className="text-[10px] font-semibold line-clamp-1 break-words text-center">Nga FNL2dasdsasadasass</span>
                  </div>
                  
              </div>
              <div>
              <div className="flex justify-between">
                 <div className="flex items-center gap-2">
                 <Avatar className="h-5 w-5">
                    <AvatarImage src={mochi} alt="mochi" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <span className="font-semibold text-[11px] ">Blv Mochi</span>
                 </div>
                  <div className="flex items-center gap-2 font-semibold">
                <span className="text-[11px] text-gray-500">11.22K</span>
              </div>
              </div>
              </div>
        </div></Link>
        <Link to={`/${path.MATCH}`}>
           <div className=" hover:scale-110 hover:transition hover:delay-300 hover:duration-300 hover:ease-in-out bg-[#e8f0c6] p-2 cursor-pointer rounded-lg  border-yellow-500 border-2 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <div className="flex flex-col justify-center gap-1">
                  <span className="font-semibold text-xs line-clamp-1">Canadian Soccer League</span>
                  <div className="flex items-center gap-1 text-[10px] text-gray-500 font-semibold">
                    <span>14-10-2024</span>
                    <span>04:00:00</span>
                  </div>
                </div>
                <span className="text-red-500 font-semibold text-xs">Live</span>
                
              </div>
              <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-2 items-center w-[70px]">
                    <img src={japan} alt="nga" className="w-[35px] h-[35px] object-contain rounded-full" />
                    <span className="text-[10px] font-semibold line-clamp-1 break-words w-full text-center">JPN League2</span>
                  </div>
                  <span className="text-sm font-semibold">
                    1 : 1
                  </span>
                  <div className="flex flex-col gap-2 items-center w-14">
                    <img src={nga} alt="nga" className="w-[35px] h-[35px] object-contain rounded-full" />
                    <span className="text-[10px] font-semibold line-clamp-1 break-words text-center">Nga FNL2dasdsasadasass</span>
                  </div>
                  
              </div>
              <div>
              <div className="flex justify-between">
                 <div className="flex items-center gap-2">
                 <Avatar className="h-5 w-5">
                    <AvatarImage src={mochi} alt="mochi" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <span className="font-semibold text-[11px] ">Blv Mochi</span>
                 </div>
                  <div className="flex items-center gap-2 font-semibold">
                <span className="text-[11px] text-gray-500">11.22K</span>
              </div>
              </div>
              </div>
        </div></Link>
        <Link to={`/${path.MATCH}`}>
           <div className=" hover:scale-110 hover:transition hover:delay-300 hover:duration-300 hover:ease-in-out bg-[#e8f0c6] p-2 cursor-pointer rounded-lg  border-yellow-500 border-2 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <div className="flex flex-col justify-center gap-1">
                  <span className="font-semibold text-xs line-clamp-1">Canadian Soccer League</span>
                  <div className="flex items-center gap-1 text-[10px] text-gray-500 font-semibold">
                    <span>14-10-2024</span>
                    <span>04:00:00</span>
                  </div>
                </div>
                <span className="text-red-500 font-semibold text-xs">Live</span>
                
              </div>
              <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-2 items-center w-[70px]">
                    <img src={japan} alt="nga" className="w-[35px] h-[35px] object-contain rounded-full" />
                    <span className="text-[10px] font-semibold line-clamp-1 break-words w-full text-center">JPN League2</span>
                  </div>
                  <span className="text-sm font-semibold">
                    1 : 1
                  </span>
                  <div className="flex flex-col gap-2 items-center w-14">
                    <img src={nga} alt="nga" className="w-[35px] h-[35px] object-contain rounded-full" />
                    <span className="text-[10px] font-semibold line-clamp-1 break-words text-center">Nga FNL2dasdsasadasass</span>
                  </div>
                  
              </div>
              <div>
              <div className="flex justify-between">
                 <div className="flex items-center gap-2">
                 <Avatar className="h-5 w-5">
                    <AvatarImage src={mochi} alt="mochi" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <span className="font-semibold text-[11px] ">Blv Mochi</span>
                 </div>
                  <div className="flex items-center gap-2 font-semibold">
                <span className="text-[11px] text-gray-500">11.22K</span>
              </div>
              </div>
              </div>
        </div></Link>
        <Link to={`/${path.MATCH}`}>
           <div className=" hover:scale-110 hover:transition hover:delay-300 hover:duration-300 hover:ease-in-out bg-[#e8f0c6] p-2 cursor-pointer rounded-lg  border-yellow-500 border-2 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <div className="flex flex-col justify-center gap-1">
                  <span className="font-semibold text-xs line-clamp-1">Canadian Soccer League</span>
                  <div className="flex items-center gap-1 text-[10px] text-gray-500 font-semibold">
                    <span>14-10-2024</span>
                    <span>04:00:00</span>
                  </div>
                </div>
                <span className="text-red-500 font-semibold text-xs">Live</span>
                
              </div>
              <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-2 items-center w-[70px]">
                    <img src={japan} alt="nga" className="w-[35px] h-[35px] object-contain rounded-full" />
                    <span className="text-[10px] font-semibold line-clamp-1 break-words w-full text-center">JPN League2</span>
                  </div>
                  <span className="text-sm font-semibold">
                    1 : 1
                  </span>
                  <div className="flex flex-col gap-2 items-center w-14">
                    <img src={nga} alt="nga" className="w-[35px] h-[35px] object-contain rounded-full" />
                    <span className="text-[10px] font-semibold line-clamp-1 break-words text-center">Nga FNL2dasdsasadasass</span>
                  </div>
                  
              </div>
              <div>
              <div className="flex justify-between">
                 <div className="flex items-center gap-2">
                 <Avatar className="h-5 w-5">
                    <AvatarImage src={mochi} alt="mochi" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <span className="font-semibold text-[11px] ">Blv Mochi</span>
                 </div>
                  <div className="flex items-center gap-2 font-semibold">
                <span className="text-[11px] text-gray-500">11.22K</span>
              </div>
              </div>
              </div>
        </div></Link>
        <Link to={`/${path.MATCH}`}>
           <div className=" hover:scale-110 hover:transition hover:delay-300 hover:duration-300 hover:ease-in-out bg-[#e8f0c6] p-2 cursor-pointer rounded-lg  border-yellow-500 border-2 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <div className="flex flex-col justify-center gap-1">
                  <span className="font-semibold text-xs line-clamp-1">Canadian Soccer League</span>
                  <div className="flex items-center gap-1 text-[10px] text-gray-500 font-semibold">
                    <span>14-10-2024</span>
                    <span>04:00:00</span>
                  </div>
                </div>
                <span className="text-red-500 font-semibold text-xs">Live</span>
                
              </div>
              <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-2 items-center w-[70px]">
                    <img src={japan} alt="nga" className="w-[35px] h-[35px] object-contain rounded-full" />
                    <span className="text-[10px] font-semibold line-clamp-1 break-words w-full text-center">JPN League2</span>
                  </div>
                  <span className="text-sm font-semibold">
                    1 : 1
                  </span>
                  <div className="flex flex-col gap-2 items-center w-14">
                    <img src={nga} alt="nga" className="w-[35px] h-[35px] object-contain rounded-full" />
                    <span className="text-[10px] font-semibold line-clamp-1 break-words text-center">Nga FNL2dasdsasadasass</span>
                  </div>
                  
              </div>
              <div>
              <div className="flex justify-between">
                 <div className="flex items-center gap-2">
                 <Avatar className="h-5 w-5">
                    <AvatarImage src={mochi} alt="mochi" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <span className="font-semibold text-[11px] ">Blv Mochi</span>
                 </div>
                  <div className="flex items-center gap-2 font-semibold">
                <span className="text-[11px] text-gray-500">11.22K</span>
              </div>
              </div>
              </div>
        </div></Link>
        <Link to={`/${path.MATCH}`}>
           <div className=" hover:scale-110 hover:transition hover:delay-300 hover:duration-300 hover:ease-in-out bg-[#e8f0c6] p-2 cursor-pointer rounded-lg  border-yellow-500 border-2 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <div className="flex flex-col justify-center gap-1">
                  <span className="font-semibold text-xs line-clamp-1">Canadian Soccer League</span>
                  <div className="flex items-center gap-1 text-[10px] text-gray-500 font-semibold">
                    <span>14-10-2024</span>
                    <span>04:00:00</span>
                  </div>
                </div>
                <span className="text-red-500 font-semibold text-xs">Live</span>
                
              </div>
              <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-2 items-center w-[70px]">
                    <img src={japan} alt="nga" className="w-[35px] h-[35px] object-contain rounded-full" />
                    <span className="text-[10px] font-semibold line-clamp-1 break-words w-full text-center">JPN League2</span>
                  </div>
                  <span className="text-sm font-semibold">
                    1 : 1
                  </span>
                  <div className="flex flex-col gap-2 items-center w-14">
                    <img src={nga} alt="nga" className="w-[35px] h-[35px] object-contain rounded-full" />
                    <span className="text-[10px] font-semibold line-clamp-1 break-words text-center">Nga FNL2dasdsasadasass</span>
                  </div>
                  
              </div>
              <div>
              <div className="flex justify-between">
                 <div className="flex items-center gap-2">
                 <Avatar className="h-5 w-5">
                    <AvatarImage src={mochi} alt="mochi" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <span className="font-semibold text-[11px] ">Blv Mochi</span>
                 </div>
                  <div className="flex items-center gap-2 font-semibold">
                <span className="text-[11px] text-gray-500">11.22K</span>
              </div>
              </div>
              </div>
        </div></Link>
        <Link to={`/${path.MATCH}`}>
           <div className=" hover:scale-110 hover:transition hover:delay-300 hover:duration-300 hover:ease-in-out bg-[#e8f0c6] p-2 cursor-pointer rounded-lg  border-yellow-500 border-2 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <div className="flex flex-col justify-center gap-1">
                  <span className="font-semibold text-xs line-clamp-1">Canadian Soccer League</span>
                  <div className="flex items-center gap-1 text-[10px] text-gray-500 font-semibold">
                    <span>14-10-2024</span>
                    <span>04:00:00</span>
                  </div>
                </div>
                <span className="text-red-500 font-semibold text-xs">Live</span>
                
              </div>
              <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-2 items-center w-[70px]">
                    <img src={japan} alt="nga" className="w-[35px] h-[35px] object-contain rounded-full" />
                    <span className="text-[10px] font-semibold line-clamp-1 break-words w-full text-center">JPN League2</span>
                  </div>
                  <span className="text-sm font-semibold">
                    1 : 1
                  </span>
                  <div className="flex flex-col gap-2 items-center w-14">
                    <img src={nga} alt="nga" className="w-[35px] h-[35px] object-contain rounded-full" />
                    <span className="text-[10px] font-semibold line-clamp-1 break-words text-center">Nga FNL2dasdsasadasass</span>
                  </div>
                  
              </div>
              <div>
              <div className="flex justify-between">
                 <div className="flex items-center gap-2">
                 <Avatar className="h-5 w-5">
                    <AvatarImage src={mochi} alt="mochi" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <span className="font-semibold text-[11px] ">Blv Mochi</span>
                 </div>
                  <div className="flex items-center gap-2 font-semibold">
                <span className="text-[11px] text-gray-500">11.22K</span>
              </div>
              </div>
              </div>
        </div></Link>
        <Link to={`/${path.MATCH}`}>
           <div className=" hover:scale-110 hover:transition hover:delay-300 hover:duration-300 hover:ease-in-out bg-[#e8f0c6] p-2 cursor-pointer rounded-lg  border-yellow-500 border-2 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <div className="flex flex-col justify-center gap-1">
                  <span className="font-semibold text-xs line-clamp-1">Canadian Soccer League</span>
                  <div className="flex items-center gap-1 text-[10px] text-gray-500 font-semibold">
                    <span>14-10-2024</span>
                    <span>04:00:00</span>
                  </div>
                </div>
                <span className="text-red-500 font-semibold text-xs">Live</span>
                
              </div>
              <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-2 items-center w-[70px]">
                    <img src={japan} alt="nga" className="w-[35px] h-[35px] object-contain rounded-full" />
                    <span className="text-[10px] font-semibold line-clamp-1 break-words w-full text-center">JPN League2</span>
                  </div>
                  <span className="text-sm font-semibold">
                    1 : 1
                  </span>
                  <div className="flex flex-col gap-2 items-center w-14">
                    <img src={nga} alt="nga" className="w-[35px] h-[35px] object-contain rounded-full" />
                    <span className="text-[10px] font-semibold line-clamp-1 break-words text-center">Nga FNL2dasdsasadasass</span>
                  </div>
                  
              </div>
              <div>
              <div className="flex justify-between">
                 <div className="flex items-center gap-2">
                 <Avatar className="h-5 w-5">
                    <AvatarImage src={mochi} alt="mochi" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <span className="font-semibold text-[11px] ">Blv Mochi</span>
                 </div>
                  <div className="flex items-center gap-2 font-semibold">
                <span className="text-[11px] text-gray-500">11.22K</span>
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