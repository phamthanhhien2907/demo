import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import "video-react/dist/video-react.css";
import SlickSlider from "./SlickSlider";
import Card from "./Card.responsive";
import football from "@/assets/football.gif"
import star from "@/assets/star.png"
import nathan from "@/assets/nathan.png"
import trangsao from "@/assets/trangsao.png"
import none2 from "../assets/none2.webp"
import logo_meovang from "@/assets/logo-meovang.webp"

const CalendarReponsive = () => {
  return (
    <>
    <div className="bg-black fixed top-0 z-50 h-[60px] flex items-center px-4 gap-4 overflow-hidden w-full">
            <img src={logo_meovang} className="h-[45px]" alt="header_gif" />
             <div className="flex w-full items-end gap-4 justify-end">
                <button className="w-[120px] h-[35px] bg-yellow-500 text-white font-semibold rounded-full text-[10px]">Tải xuống</button>
             </div>
        </div>
    <div className="w-full h-screen overflow-scroll overflow-x-hidden border-none">
    <Tabs defaultValue="foryou" className="w-full h-full ">
      <div className="w-full flex flex-col fixed top-12 z-40 py-4 px-2 bg-gray-50 outline-none overflow-hidden ">
        <TabsList className="w-full flex justify-start overflow-x-scroll scrollbar-hide">
          <TabsTrigger className="text-sm text-gray-500 font-semibold" value="foryou">
              Tất cả
          </TabsTrigger>
          <TabsTrigger className="text-sm text-gray-500 font-semibold" value="footbal">
            Bóng đá
          </TabsTrigger>
          <TabsTrigger className="text-sm text-gray-500 font-semibold" value="basketball">
            Poker
          </TabsTrigger>
          <TabsTrigger className="text-sm text-gray-500 font-semibold" value="game">
            Thể thao điện tử
          </TabsTrigger>
          <TabsTrigger className="text-sm text-gray-500 font-semibold" value="voleyball">
            Bóng chuyền
          </TabsTrigger>
        </TabsList>
      </div>
      <div className="pt-28">
      <TabsContent value="foryou">
       <div className="px-4 flex flex-col gap-4">
          <div className="w-full rounded-lg bg-gray-100 flex flex-col py-4 gap-4">
              <div className="flex items-center justify-between py-2 border-b border-gray-300 px-4">
                  <div className="flex items-center gap-1 flex-4">
                  <img className="w-[15px] h-[15px]" src={football} alt="football" />
                  <span className="text-xs text-gray-500">
                    22:00
                  </span>
                  <span className="text-xs text-gray-500 line-clamp-1 w-10">
                    GHA Phân khu 1
                  </span>
                </div>    
                  <div className="flex-4  flex items-end justify-center">
                  <span className=" text-red-500 font-semibold text-sm">Trực tiếp 71'</span>
                  </div>
                  <div className="flex-4 flex items-end justify-end">
                    <img className="w-[30px] h-[30px] brightness-0" src={star} alt="star" />
                  </div>
              </div>
              <div className="px-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 ">
                    <span className="text-[13px] line-clamp-1">Na Thần FC</span>
                    <img className="w-[15px] h-[15px] rounded-full" src={nathan} alt="nathan" />
                  </div>
                  <span style={{ fontFamily : "Impact, Haettenschweiler, Arial Narrow Bold, sans-serif" }} className="text-2xl">1-1</span>
                  <div className="flex items-center gap-1">
                    <img className="w-[15px] h-[15px] rounded-full" src={trangsao} alt="trangsao" />
                    <span className="text-[13px] line-clamp-1">Trang chủSao</span>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
                  <span>
                    Hiệp 1: 1-1
                  </span>
                  <span>
                    Hiệp 2: 2-2
                  </span>
                </div>
              </div>
          </div>
          <div className="w-full rounded-lg bg-gray-100 flex flex-col py-4 gap-4">
              <div className="flex items-center justify-between py-2 border-b border-gray-300 px-4">
                  <div className="flex items-center gap-2 flex-4">
                  <img className="w-[15px] h-[15px]" src={football} alt="football" />
                  <span className="text-xs text-gray-500">
                    22:00
                  </span>
                  <span className="text-xs text-gray-500 line-clamp-1 w-20">
                    GHA Phân khu 1
                  </span>
                </div>    
                  <div className="flex-4  flex items-end justify-center">
                  <span className=" text-red-500 font-semibold text-sm">Trực tiếp 71'</span>
                  </div>
                  <div className="flex-4 flex items-end justify-end">
                    <img className="w-[30px] h-[30px] brightness-0" src={star} alt="star" />
                  </div>
              </div>
              <div className="px-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 ">
                    <span>Na Thần FC</span>
                    <img className="w-[15px] h-[15px] rounded-full" src={nathan} alt="nathan" />
                  </div>
                  <span style={{ fontFamily : "Impact,Haettenschweiler,Arial Narrow Bold,sans-serif" }} className="text-2xl">1-1</span>
                  <div className="flex items-center gap-2">
                    <img className="w-[15px] h-[15px] rounded-full" src={trangsao} alt="trangsao" />
                    <span>Trang chủSao</span>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
                  <span>
                    Hiệp 1: 1-1
                  </span>
                  <span>
                    Hiệp 2: 2-2
                  </span>
                </div>
              </div>
          </div>
          <div className="w-full rounded-lg bg-gray-100 flex flex-col py-4 gap-4">
              <div className="flex items-center justify-between py-2 border-b border-gray-300 px-4">
                  <div className="flex items-center gap-2 flex-4">
                  <img className="w-[15px] h-[15px]" src={football} alt="football" />
                  <span className="text-xs text-gray-500">
                    22:00
                  </span>
                  <span className="text-xs text-gray-500 line-clamp-1 w-20">
                    GHA Phân khu 1
                  </span>
                </div>    
                  <div className="flex-4  flex items-end justify-center">
                  <span className=" text-red-500 font-semibold text-sm">Trực tiếp 71'</span>
                  </div>
                  <div className="flex-4 flex items-end justify-end">
                    <img className="w-[30px] h-[30px] brightness-0" src={star} alt="star" />
                  </div>
              </div>
              <div className="px-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 ">
                    <span>Na Thần FC</span>
                    <img className="w-[15px] h-[15px] rounded-full" src={nathan} alt="nathan" />
                  </div>
                  <span style={{ fontFamily : "Impact,Haettenschweiler,Arial Narrow Bold,sans-serif" }} className="text-2xl">1-1</span>
                  <div className="flex items-center gap-2">
                    <img className="w-[15px] h-[15px] rounded-full" src={trangsao} alt="trangsao" />
                    <span>Trang chủSao</span>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
                  <span>
                    Hiệp 1: 1-1
                  </span>
                  <span>
                    Hiệp 2: 2-2
                  </span>
                </div>
              </div>
          </div>
          <div className="w-full rounded-lg bg-gray-100 flex flex-col py-4 gap-4">
              <div className="flex items-center justify-between py-2 border-b border-gray-300 px-4">
                  <div className="flex items-center gap-2 flex-4">
                  <img className="w-[15px] h-[15px]" src={football} alt="football" />
                  <span className="text-xs text-gray-500">
                    22:00
                  </span>
                  <span className="text-xs text-gray-500 line-clamp-1 w-20">
                    GHA Phân khu 1
                  </span>
                </div>    
                  <div className="flex-4  flex items-end justify-center">
                  <span className=" text-red-500 font-semibold text-sm">Trực tiếp 71'</span>
                  </div>
                  <div className="flex-4 flex items-end justify-end">
                    <img className="w-[30px] h-[30px] brightness-0" src={star} alt="star" />
                  </div>
              </div>
              <div className="px-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 ">
                    <span>Na Thần FC</span>
                    <img className="w-[15px] h-[15px] rounded-full" src={nathan} alt="nathan" />
                  </div>
                  <span style={{ fontFamily : "Impact,Haettenschweiler,Arial Narrow Bold,sans-serif" }} className="text-2xl">1-1</span>
                  <div className="flex items-center gap-2">
                    <img className="w-[15px] h-[15px] rounded-full" src={trangsao} alt="trangsao" />
                    <span>Trang chủSao</span>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
                  <span>
                    Hiệp 1: 1-1
                  </span>
                  <span>
                    Hiệp 2: 2-2
                  </span>
                </div>
              </div>
          </div>
          <div className="w-full rounded-lg bg-gray-100 flex flex-col py-4 gap-4">
              <div className="flex items-center justify-between py-2 border-b border-gray-300 px-4">
                  <div className="flex items-center gap-2 flex-4">
                  <img className="w-[15px] h-[15px]" src={football} alt="football" />
                  <span className="text-xs text-gray-500">
                    22:00
                  </span>
                  <span className="text-xs text-gray-500 line-clamp-1 w-20">
                    GHA Phân khu 1
                  </span>
                </div>    
                  <div className="flex-4  flex items-end justify-center">
                  <span className=" text-red-500 font-semibold text-sm">Trực tiếp 71'</span>
                  </div>
                  <div className="flex-4 flex items-end justify-end">
                    <img className="w-[30px] h-[30px] brightness-0" src={star} alt="star" />
                  </div>
              </div>
              <div className="px-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 ">
                    <span>Na Thần FC</span>
                    <img className="w-[15px] h-[15px] rounded-full" src={nathan} alt="nathan" />
                  </div>
                  <span style={{ fontFamily : "Impact,Haettenschweiler,Arial Narrow Bold,sans-serif" }} className="text-2xl">1-1</span>
                  <div className="flex items-center gap-2">
                    <img className="w-[15px] h-[15px] rounded-full" src={trangsao} alt="trangsao" />
                    <span>Trang chủSao</span>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
                  <span>
                    Hiệp 1: 1-1
                  </span>
                  <span>
                    Hiệp 2: 2-2
                  </span>
                </div>
              </div>
          </div>
          <div className="w-full rounded-lg bg-gray-100 flex flex-col py-4 gap-4">
              <div className="flex items-center justify-between py-2 border-b border-gray-300 px-4">
                  <div className="flex items-center gap-2 flex-4">
                  <img className="w-[15px] h-[15px]" src={football} alt="football" />
                  <span className="text-xs text-gray-500">
                    22:00
                  </span>
                  <span className="text-xs text-gray-500 line-clamp-1 w-20">
                    GHA Phân khu 1
                  </span>
                </div>    
                  <div className="flex-4  flex items-end justify-center">
                  <span className=" text-red-500 font-semibold text-sm">Trực tiếp 71'</span>
                  </div>
                  <div className="flex-4 flex items-end justify-end">
                    <img className="w-[30px] h-[30px] brightness-0" src={star} alt="star" />
                  </div>
              </div>
              <div className="px-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 ">
                    <span>Na Thần FC</span>
                    <img className="w-[15px] h-[15px] rounded-full" src={nathan} alt="nathan" />
                  </div>
                  <span style={{ fontFamily : "Impact,Haettenschweiler,Arial Narrow Bold,sans-serif" }} className="text-2xl">1-1</span>
                  <div className="flex items-center gap-2">
                    <img className="w-[15px] h-[15px] rounded-full" src={trangsao} alt="trangsao" />
                    <span>Trang chủSao</span>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
                  <span>
                    Hiệp 1: 1-1
                  </span>
                  <span>
                    Hiệp 2: 2-2
                  </span>
                </div>
              </div>
          </div>
          <div className="w-full rounded-lg bg-gray-100 flex flex-col py-4 gap-4">
              <div className="flex items-center justify-between py-2 border-b border-gray-300 px-4">
                  <div className="flex items-center gap-2 flex-4">
                  <img className="w-[15px] h-[15px]" src={football} alt="football" />
                  <span className="text-xs text-gray-500">
                    22:00
                  </span>
                  <span className="text-xs text-gray-500 line-clamp-1 w-20">
                    GHA Phân khu 1
                  </span>
                </div>    
                  <div className="flex-4  flex items-end justify-center">
                  <span className=" text-red-500 font-semibold text-sm">Trực tiếp 71'</span>
                  </div>
                  <div className="flex-4 flex items-end justify-end">
                    <img className="w-[30px] h-[30px] brightness-0" src={star} alt="star" />
                  </div>
              </div>
              <div className="px-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 ">
                    <span>Na Thần FC</span>
                    <img className="w-[15px] h-[15px] rounded-full" src={nathan} alt="nathan" />
                  </div>
                  <span style={{ fontFamily : "Impact,Haettenschweiler,Arial Narrow Bold,sans-serif" }} className="text-2xl">1-1</span>
                  <div className="flex items-center gap-2">
                    <img className="w-[15px] h-[15px] rounded-full" src={trangsao} alt="trangsao" />
                    <span>Trang chủSao</span>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
                  <span>
                    Hiệp 1: 1-1
                  </span>
                  <span>
                    Hiệp 2: 2-2
                  </span>
                </div>
              </div>
          </div>

          <div className="pb-24 pt-4 flex w-full items-center justify-center">
          <h3 className="text-sm text-center ">Đang cập nhập thêm lịch mới</h3>
        </div>
       </div>
      </TabsContent>
      </div>
      <TabsContent value="footbal">
        <div className="w-full flex items-center justify-center flex-col">
          <img src={none2} alt="none2" />
          <span className="text-gray-400 font-semibold">Anh em chờ trận nhé!</span>
        </div>
      </TabsContent>
      <TabsContent value="basketball"> <div className="w-full flex items-center justify-center flex-col">
          <img src={none2} alt="none2" />
          <span className="text-gray-400 font-semibold">Anh em chờ trận nhé!</span>
        </div></TabsContent>
      <TabsContent value="game"> <div className="w-full flex items-center justify-center flex-col">
          <img src={none2} alt="none2" />
          <span className="text-gray-400 font-semibold">Anh em chờ trận nhé!</span>
        </div></TabsContent>
      
    </Tabs>
  </div></>
  )
}

export default CalendarReponsive