import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import "video-react/dist/video-react.css";
import SlickSlider from "./SlickSlider";
import Card from "./Card.responsive";
import none2 from "../assets/none2.webp"
import { useState } from "react";

const TabsVerticel = () => {
  const [activeTab, setActiveTab] = useState('foryou');
  const handleClick = (value) => {
    setActiveTab(value)
    
  }
  return (
    <div className="w-full h-screen overflow-scroll overflow-x-hidden border-none">
      <Tabs defaultValue="foryou" className="w-full h-full ">
        <div className="w-full flex flex-col fixed top-12 z-40 py-4 px-2 bg-gray-50 outline-none overflow-hidden ">
          <TabsList className="w-full flex justify-start overflow-x-scroll scrollbar-hide">
          <TabsTrigger 
                className={`text-sm font-semibold  ${activeTab === 'foryou' ? `text-white background-custom ` : 'text-gray-500'}`} 
                value="foryou" 
                onClick={() => handleClick("foryou")}
            >
                Tất cả
            </TabsTrigger>
            <TabsTrigger 
                className={`text-sm font-semibold  ${activeTab === 'footbal' ? 'background-custom  text-white' : 'text-gray-500'}`} 
                value="footbal"
                onClick={() => handleClick("footbal")}
            >
                Bóng đá
            </TabsTrigger>
            <TabsTrigger 
                className={`text-sm font-semibold ${activeTab === 'basketball' ? 'background-custom  text-white' : 'text-gray-500'}`} 
                value="basketball"  
                onClick={() => handleClick("basketball")}
            >
                Poker
            </TabsTrigger>
            <TabsTrigger 
                className={`text-sm font-semibold  ${activeTab === 'game' ? 'background-custom  text-white' : 'text-gray-500'}`} 
                value="game" 
                onClick={() => handleClick("game")}
            >
                Thể thao điện tử
            </TabsTrigger>
            <TabsTrigger className={`text-sm font-semibold  ${activeTab === 'voleyball' ? 'background-custom  text-white' : 'text-gray-500'}`}  value="voleyball"  onClick={() => handleClick("voleyball")}>
              Bóng chuyền
            </TabsTrigger>
          </TabsList>
        </div>
        <div className="pt-28 ">
        <TabsContent value="foryou">
            <SlickSlider/>
            <Card/>
        </TabsContent>
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
        <TabsContent value="voleyball"> <div className="w-full flex items-center justify-center flex-col">
          <img src={none2} alt="none2" />
          <span className="text-gray-400 font-semibold">Anh em chờ trận nhé!</span>
        </div></TabsContent>
        </div>
        
        
      </Tabs>
    </div>
  )
}

export default TabsVerticel