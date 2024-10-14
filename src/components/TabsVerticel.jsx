import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import "video-react/dist/video-react.css";
import SlickSlider from "./SlickSlider";
import Card from "./Card.responsive";
const TabsVerticel = () => {
  return (
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
        <div className="pt-28 ">
        <TabsContent value="foryou">
            <SlickSlider/>
            <Card/>
        </TabsContent>
        </div>
        
        
      </Tabs>
    </div>
  )
}

export default TabsVerticel